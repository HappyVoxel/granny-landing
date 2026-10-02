# Deployment

The site is a static Next.js export served by nginx in one Docker container on
Easypanel, at <https://granny.happyvoxel.com>. Woodpecker CI
(`https://ci.opscom.io`, the shared server for OpsComCorp, HuggerHustle and
HappyVoxel) builds the image; Easypanel runs it. The pattern is copied from
`HappyVoxel/neuroparticles-plus` - see its `docs/deployment.md` for the older
`ci.happyvoxel.com` history.

```
push to master
  └─ .woodpecker/test.yaml         pnpm lint, pnpm typecheck, pnpm build
  └─ .woodpecker/production.yaml   docker build → ghcr.io/happyvoxel/granny-landing:latest + :sha-<commit>
                                   Easypanel API deployService → Easypanel pulls :latest
```

Files involved: `Dockerfile`, `.dockerignore`, `nginx.conf`, `.woodpecker/test.yaml`,
`.woodpecker/production.yaml`. The app has no runtime env and no secrets.

## Where each setting lives

| Setting                   | Where                         | Kind      |
| ------------------------- | ----------------------------- | --------- |
| `ghcr_username`           | Woodpecker org secret         | CI        |
| `ghcr_token`              | Woodpecker org secret         | CI        |
| `easypanel_token`         | Woodpecker org secret         | CI        |
| Easypanel project/service | `.woodpecker/production.yaml` | CI        |
| GHCR pull token           | Easypanel service image       | pull auth |

- `ghcr_token` is a **classic** personal access token with `write:packages`. GHCR does not accept
  fine-grained tokens. `ghcr_username` is the GitHub user that owns it.
- `easypanel_token` is the Easypanel API token shared by every HappyVoxel repo. It can change any
  service, so its allowed events are `push` and `manual` only.
- Org secrets reach only repos in the HappyVoxel org, and the Woodpecker server lets in only that org,
  so the repo lives at `HappyVoxel/granny-landing`.

## One-time setup

The Easypanel service needs an image to pull, so the first run publishes the image and its deploy
step fails because the service does not exist yet.

1. **Activate the repo.** Log in to `https://ci.opscom.io` (GitHub login, member of HappyVoxel) and
   add `HappyVoxel/granny-landing`. Settings → General: timeout 30 minutes, and untick `push` under
   "Cancel previous pipelines".
2. **Publish the first image.** Run a manual pipeline on `master`. The private package
   `ghcr.io/happyvoxel/granny-landing` now has `:latest`.
3. **Create the Easypanel service.** In project `ideas`, an **App** service named `granny-landing`.
   Source → **Docker Image**:
   - Image: `ghcr.io/happyvoxel/granny-landing:latest`
   - Username: the GitHub user that owns the pull token
   - Password: a **classic** token with only `read:packages` (reuse the one other HappyVoxel services
     pull with)
4. **Add the domain.** Domains → `granny.happyvoxel.com`, HTTPS on, **proxy port 8080**.
   DNS needs nothing: `*.happyvoxel.com` is already a proxied wildcard.
5. **Deploy by hand once.** Press Deploy and open the domain.

From then on, every push to `master` that passes the checks is live a minute or two later.

## Operations

- **Roll back:** in Easypanel, set the image to `ghcr.io/happyvoxel/granny-landing:sha-<old commit>`
  and deploy. Switch back to `:latest` afterwards, or the next pipeline deploy keeps the pinned tag.
- **Caching:** nginx sends `no-cache` for HTML and a one-year `immutable` for `/_next/static/`,
  whose file names change with their content. A deploy shows on the next page load.

## Build and run locally

```bash
docker build --platform linux/amd64 -t granny-landing:local .
docker run --rm -p 8080:8080 granny-landing:local
```

Then open <http://localhost:8080>.
