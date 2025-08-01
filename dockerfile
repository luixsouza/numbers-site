# --- Stage 1: Build the application ---
# Use a lightweight Node.js image as the builder
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and the pnpm lockfile
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install project dependencies using pnpm
RUN pnpm install

# Copy the rest of the application source code
COPY . .

# Build the application for production
# This will create a 'dist' folder with static files
RUN pnpm build


# --- Stage 2: Serve the application ---
# Use a lightweight Nginx image
FROM nginx:stable-alpine

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy our custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/

# Copy the built static files from the 'builder' stage
# from the '/app/dist' directory to Nginx's public html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]