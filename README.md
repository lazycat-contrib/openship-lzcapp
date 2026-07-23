# Openship for LazyCat

LazyCat LPK v2 packaging for [oblien/openship](https://github.com/oblien/openship), using the versioned container images published by [dockers-x/openship](https://github.com/dockers-x/openship).

## Entrypoints

- Dashboard: the default application entry.
- Website: the `www` prefixed entry.

## Automatic updates

The scheduled GitHub workflow watches the stable SemVer tags of the Openship API, Dashboard, and Web images. A new API version updates the package, copies all three Openship images to the LazyCat Registry, creates a versioned GitHub Release asset, and publishes the same verified LPK to both configured application stores.

PostgreSQL and Redis are pinned to one-time LazyCat Registry copies and are intentionally excluded from automatic updates.

The package bootstraps the first administrator from deployment parameters and injects LazyCat's file chooser bridge for Openship's import/export features.

Openship's upstream Docker Compose deployment does not expose a host Docker socket. Deploying workloads to the LazyCat host itself therefore requires device testing; managing an external server over SSH is the safer expected path.

Required organization or repository secrets:

- `LAZYCAT_TOKEN`
- `APPSTORE_URL`
- `APPSTORE_TOKEN`
- `PRIVATE_STORE_GROUP_CODES` when private groups are used
