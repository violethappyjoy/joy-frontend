# ─── Stage 1: Build & prune ───────────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --include=dev
COPY . .
RUN npm run build
RUN npm prune --production

# ─── Stage 2: Distroless runtime ───────────────────────────────────────────────
FROM gcr.io/distroless/nodejs22-debian12 AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static   ./.next/static
COPY --from=builder /app/public          ./public

EXPOSE 3000
CMD ["server.js"]