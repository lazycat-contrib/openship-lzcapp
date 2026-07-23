#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
manifest="$repo_root/lzc-manifest.yml"
params="$repo_root/lzc-deploy-params.yml"
package="$repo_root/package.yml"

api_block="$(sed -n '/^  api:/,/^  dashboard:/p' "$manifest")"
dashboard_block="$(sed -n '/^  dashboard:/,/^  web:/p' "$manifest")"
email_param_block="$(sed -n '/^  - id: login_email$/,/^  - id: login_password$/p' "$params")"

grep -Fq '      - OPENSHIP_REQUIRE_AUTH=true' <<<"$api_block"
grep -Fq '      - OPENSHIP_PUBLIC_URL=https://{{ .S.AppDomain }}' <<<"$api_block"
grep -Fq '      - OPENSHIP_EXTRA_TRUSTED_ORIGINS=https://{{ .S.AppDomain }}' <<<"$api_block"

if grep -Fq 'BETTER_AUTH_URL=' <<<"$api_block"; then
  echo 'API must use OPENSHIP_PUBLIC_URL instead of BETTER_AUTH_URL' >&2
  exit 1
fi

grep -Fq '      - INTERNAL_API_URL=http://api:4000' <<<"$dashboard_block"
grep -Fq '      - OPENSHIP_PUBLIC_URL=https://{{ .S.AppDomain }}' <<<"$dashboard_block"
grep -Fq '      - OPENSHIP_ADMIN_EMAIL={{ .U.login_email }}' <<<"$dashboard_block"
grep -Fq '      - OPENSHIP_ADMIN_PASSWORD={{ .U.login_password }}' <<<"$dashboard_block"

grep -Fq '    default_value: "admin@openship.local"' <<<"$email_param_block"
grep -Fq '    optional: true' <<<"$email_param_block"
grep -Fq '    default_value: "$random(len=24)"' "$params"
grep -Fq 'version: 0.3.0' "$package"

echo 'Auth environment regression checks passed.'
