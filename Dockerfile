# syntax=docker/dockerfile:1.7

# ---------- builder: node + pnpm, static export to out/ ----------
FROM node:24-alpine AS builder
ENV PNPM_HOME="/pnpm" \
    PATH="/pnpm:$PATH"
# The scaffold removed package.json's `packageManager`, so corepack has nothing
# to resolve; install the pinned pnpm directly. `devEngines` in package.json
# still pins node and pnpm for local runs.
RUN npm install -g pnpm@12.8.1
WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm config set store-dir /pnpm/store && \
    pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

# ---------- runner: nginx serving the static export, non-root ----------
FROM nginxinc/nginx-unprivileged:alpine AS runner
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html
# The unprivileged image can't bind 80; Easypanel's proxy port is 8080.
EXPOSE 8080
