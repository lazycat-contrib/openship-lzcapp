#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
manifest="$repo_root/lzc-manifest.yml"
params="$repo_root/lzc-deploy-params.yml"
package="$repo_root/package.yml"

api_block="$(sed -n '/^  api:/,/^  dashboard:/p' "$manifest")"
dashboard_block="$(sed -n '/^  dashboard:/,/^  web:/p' "$manifest")"

# ── API environment assertions ───────────────────────────
grep -Fq '      - OPENSHIP_REQUIRE_AUTH=true' <<<"$api_block"
grep -Fq '      - TRUST_PROXY=true' <<<"$api_block"
grep -Fq '      - OPENSHIP_PUBLIC_URL=https://{{ .S.AppDomain }}' <<<"$api_block"
grep -Fq '      - OPENSHIP_EXTRA_TRUSTED_ORIGINS=https://{{ .S.AppDomain }}' <<<"$api_block"
grep -Fq '      - OPENSHIP_HOSTNAME={{ .S.AppDomain }}' <<<"$api_block"
grep -Fq '      - OPENSHIP_DOMAIN_KIND=byo' <<<"$api_block"

# OPENSHIP_PUBLIC_URL must be used instead of BETTER_AUTH_URL
if grep -Fq 'BETTER_AUTH_URL=' <<<"$api_block"; then
  echo 'API must use OPENSHIP_PUBLIC_URL instead of BETTER_AUTH_URL' >&2
  exit 1
fi

# OAuth conditional blocks must exist
grep -Fq '{{if .U.github_client_id}}- GITHUB_CLIENT_ID={{ .U.github_client_id }}{{end}}' <<<"$api_block"
grep -Fq '{{if .U.github_client_secret}}- GITHUB_CLIENT_SECRET={{ .U.github_client_secret }}{{end}}' <<<"$api_block"
grep -Fq '{{if .U.google_client_id}}- GOOGLE_CLIENT_ID={{ .U.google_client_id }}{{end}}' <<<"$api_block"
grep -Fq '{{if .U.google_client_secret}}- GOOGLE_CLIENT_SECRET={{ .U.google_client_secret }}{{end}}' <<<"$api_block"

# SMTP conditional blocks must exist
grep -Fq '{{if .U.smtp_host}}- SMTP_HOST={{ .U.smtp_host }}{{end}}' <<<"$api_block"
grep -Fq '{{if .U.smtp_host}}- SMTP_PORT={{ .U.smtp_port }}{{end}}' <<<"$api_block"
grep -Fq '{{if .U.smtp_user}}- SMTP_USER={{ .U.smtp_user }}{{end}}' <<<"$api_block"
grep -Fq '{{if .U.smtp_pass}}- SMTP_PASS={{ .U.smtp_pass }}{{end}}' <<<"$api_block"
grep -Fq '{{if .U.smtp_from}}- SMTP_FROM={{ .U.smtp_from }}{{end}}' <<<"$api_block"

# ── Dashboard environment assertions ─────────────────────
grep -Fq '      - INTERNAL_API_URL=http://api:4000' <<<"$dashboard_block"
grep -Fq '      - OPENSHIP_PUBLIC_URL=https://{{ .S.AppDomain }}' <<<"$dashboard_block"
grep -Fq '      - OPENSHIP_ADMIN_EMAIL={{ .U.login_email }}' <<<"$dashboard_block"
grep -Fq '      - OPENSHIP_ADMIN_PASSWORD={{ .U.login_password }}' <<<"$dashboard_block"

# ── Deploy params assertions ─────────────────────────────
grep -Fq '    default_value: "admin@openship.local"' "$params"
grep -Fq '    default_value: "$random(len=24)"' "$params"

# OAuth deploy params must exist
grep -Fq '  - id: github_client_id' "$params"
grep -Fq '  - id: github_client_secret' "$params"
grep -Fq '  - id: google_client_id' "$params"
grep -Fq '  - id: google_client_secret' "$params"

# SMTP deploy params must exist
grep -Fq '  - id: smtp_host' "$params"
grep -Fq '  - id: smtp_port' "$params"
grep -Fq '  - id: smtp_user' "$params"
grep -Fq '  - id: smtp_pass' "$params"
grep -Fq '  - id: smtp_from' "$params"

# All new params must be optional
for param in github_client_id github_client_secret google_client_id google_client_secret \
  smtp_host smtp_port smtp_user smtp_pass smtp_from; do
  param_block="$(sed -n "/^  - id: ${param}\$/,/^  - id:/p" "$params")"
  grep -Fq '    optional: true' <<<"$param_block"
done

# ── Package assertions ───────────────────────────────────
grep -Fq 'version: 0.3.0' "$package"
grep -Fq 'min_os_version: 1.5.0' "$package"

echo 'Auth environment regression checks passed.'
