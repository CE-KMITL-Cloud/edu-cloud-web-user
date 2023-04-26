#########################################
#  Educational Cloud Platform Service   #
#    Computer Engineering, KMITL        #
#########################################

# This Dockerfile is have 3 stages
# 1. deps: Install dependencies
# 2. builder: Build the app
# 3. runner: Run the app

# First stage: Install dependencies
# Base Image
FROM node:19-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

#RUN \
#  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
#  elif [ -f package-lock.json ]; then npm ci; \
#  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
#  else echo "Lockfile not found." && exit 1; \
#  fi

RUN yarn --frozen-lockfile

# Second stage: Build the app
FROM node:19-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

# Build the app
RUN yarn run build

FROM node:19-alpine AS runner

WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# USER nextjs

EXPOSE 3000

ENV PORT 3000

# Run the app
CMD ["yarn", "start"]
