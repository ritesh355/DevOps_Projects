# Step 1: Base image
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./

# Step 2: Dependencies
FROM base AS deps
RUN npm install --legacy-peer-deps

# Step 3: Build
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Step 4: Production runtime
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy only necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]

