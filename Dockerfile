# Stage 1: Dependencies
ARG NODE_VERSION=20.11.1

FROM node:${NODE_VERSION}-alpine AS deps
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Stage 2: Builder
FROM node:${NODE_VERSION}-alpine AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build application
# Note: Build-time env vars are NOT baked into the image
# Runtime env vars are handled by Next.js standalone server
RUN npm run build

# Stage 3: Runner
FROM node:${NODE_VERSION}-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set correct permissions
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Runtime environment variables (passed at container start, not baked in)
# These can be overridden with docker run -e or docker-compose environment
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# NEXT_PUBLIC_* variables must be available at runtime for client-side code
# Pass these when running the container:
# docker run -e NEXT_PUBLIC_IMAGE_BASE_URL=https://your-bucket.s3.amazonaws.com ...

# Start the application
CMD ["node", "server.js"]
