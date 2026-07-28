# Openship for LazyCat

LazyCat LPK v2 packaging for [oblien/openship](https://github.com/oblien/openship), using the versioned container images published by [dockers-x/openship](https://github.com/dockers-x/openship).

## Entrypoints

| Entry | Path | Domain | Description |
|-------|------|--------|-------------|
| Dashboard | `/` | `<subdomain>.*.lzcapp` | Default entry — Openship admin dashboard |
| Website | `/` | `www.<subdomain>.*.lzcapp` | Upstream Openship landing page |

## Setup Wizard Parameters

### Required / Pre-filled

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `admin_name` | string | `LazyCat Admin` | Initial administrator display name |
| `login_email` | string | `admin@openship.local` | Administrator login email |
| `login_password` | secret | (random 24 chars) | Administrator login password |

### Optional — OAuth Login

| Parameter | Type | Description |
|-----------|------|-------------|
| `github_client_id` | string | GitHub OAuth App client ID |
| `github_client_secret` | secret | GitHub OAuth App client secret |
| `google_client_id` | string | Google OAuth client ID |
| `google_client_secret` | secret | Google OAuth client secret |

> Set both Client ID and Client Secret for a provider to enable its OAuth login button on the Openship sign-in page. Leave empty to skip.

### Optional — Transactional Email

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `smtp_host` | string | (empty) | SMTP server hostname |
| `smtp_port` | string | `587` | SMTP server port |
| `smtp_user` | string | (empty) | SMTP authentication username |
| `smtp_pass` | secret | (empty) | SMTP authentication password |
| `smtp_from` | string | `Openship <noreply@openship.local>` | Sender address |

> Set `smtp_host` to enable transactional email (invitations, password resets, notifications).

## Architecture

```
┌────────────────────────────────────────────┐
│                  lzcinit                    │
│  TLS termination · domain routing · proxy  │
└──────┬──────────────┬──────────────────────┘
       │ /            │ www./
       ▼              ▼
┌──────────────┐  ┌──────────┐
│  dashboard   │  │   web    │
│   :3001      │  │  :3000   │
└──────┬───────┘  └──────────┘
       │ /api/proxy → api:4000
       ▼
┌──────────────┐
│     api      │
│    :4000     │
└──┬────────┬──┘
   │        │
   ▼        ▼
┌──────┐ ┌──────┐
│postgr│ │redis │
│ :5432│ │:6379 │
└──────┘ └──────┘
```

## Environment Variables (API)

The API service is configured with these key variables derived from the upstream `.env.example`:

| Variable | Value | Notes |
|----------|-------|-------|
| `NODE_ENV` | `production` | |
| `CLOUD_MODE` | `false` | Self-hosted mode |
| `DEPLOY_MODE` | `docker` | |
| `TRUST_PROXY` | `true` | Required behind LazyCat's reverse proxy — avoids shared rate-limit bucket |
| `OPENSHIP_DOMAIN_KIND` | `byo` | LazyCat provides TLS termination |
| `OPENSHIP_HOSTNAME` | `{{ .S.AppDomain }}` | Derived from LazyCat domain |
| `OPENSHIP_PUBLIC_URL` | `https://{{ .S.AppDomain }}` | Dashboard origin for CORS/CSRF |
| `OPENSHIP_REQUIRE_REDIS` | `true` | Force Redis backend |
| `BETTER_AUTH_SECRET` | `{{ stable_secret }}` | Auto-generated, stable across restarts |
| `INTERNAL_TOKEN` | `{{ stable_secret }}` | Auto-generated, stable across restarts |

OAuth and SMTP variables are rendered conditionally — only injected when the corresponding setup wizard parameters are filled.

## Administrator Bootstrap

On first start, the dashboard container waits for the API to become healthy, then calls `POST /api/system/bootstrap-admin` with the configured admin credentials. This is the headless equivalent of:

```bash
OPENSHIP_ADMIN_PASSWORD='…' openship up --non-interactive \
  --admin-email you@example.com --admin-name "You" \
  --domain-kind byo --hostname <domain>
```

The call is idempotent (HTTP 409 on re-run is treated as success), so restarts are safe.

## Passwordless Login

The login page (`/login`) auto-fills the administrator email and password via `builtin://simple-inject-password`, so users don't need to re-enter credentials on each session.

## Data Persistence

| Path | Contents |
|------|----------|
| `/lzcapp/var/postgres` | PostgreSQL data directory |
| `/lzcapp/var/redis` | Redis append-only file |

## Automatic Updates

The scheduled GitHub workflow watches the stable SemVer tags of the Openship API, Dashboard, and Web images. A new API version updates the package, copies all three Openship images to the LazyCat Registry, creates a versioned GitHub Release asset, and publishes the same verified LPK to both configured application stores.

PostgreSQL and Redis are pinned to one-time LazyCat Registry copies and are intentionally excluded from automatic updates.

Openship's upstream Docker Compose deployment does not expose a host Docker socket. Deploying workloads to the LazyCat host itself therefore requires device testing; managing an external server over SSH is the safer expected path.

## Repository Secrets

Required organization or repository secrets:

- `LAZYCAT_TOKEN`
- `APPSTORE_URL`
- `APPSTORE_TOKEN`
- `PRIVATE_STORE_GROUP_CODES` when private groups are used
