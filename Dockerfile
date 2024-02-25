# Base image for building both frontend and backend
FROM node:18-alpine AS builder

# Build frontend
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend ./
RUN npm run build

# Build backend
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend ./
RUN npm run build

# Final stage: Set up runtime environment with PM2
FROM node:18-alpine

# Install PM2 globally
RUN npm install -g pm2

# Copy built frontend and backend from the builder stage
WORKDIR /app
COPY --from=builder /app/frontend ./frontend
COPY --from=builder /app/backend ./backend

# Copy package.json files (if necessary for running the apps)
COPY frontend/package*.json ./frontend/
COPY backend/package*.json ./backend/

COPY ecosystem.config.js ./

# Expose the port your app runs on
EXPOSE 3002
EXPOSE 3001

# Start both frontend and backend using PM2
CMD pm2-runtime start ecosystem.config.js
