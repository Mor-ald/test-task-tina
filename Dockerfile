FROM node:16-alpine AS base

# Install dependencies only when needed
FROM base AS dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /tina-sto-arm

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /tina-sto-arm
COPY --from=dependencies /tina-sto-arm/node_modules ./node_modules
COPY . .
RUN yarn docker

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /tina-sto-arm

ENV NODE_ENV production

COPY --from=builder /tina-sto-arm/next.config.js ./
COPY --from=builder /tina-sto-arm/.env ./
COPY --from=builder /tina-sto-arm/public ./public
COPY --from=builder /tina-sto-arm/package.json ./package.json
COPY --from=builder /tina-sto-arm/dist ./dist
COPY --from=builder /tina-sto-arm/.tina ./.tina
COPY --from=builder /tina-sto-arm/node_modules ./node_modules

# Port
EXPOSE 3000

# Start Project
CMD ["yarn", "start"]