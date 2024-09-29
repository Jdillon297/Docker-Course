# Stage 1: Build the React application
FROM node:18 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the React application using NGINX
FROM nginx:alpine

# Copy the build output from the previous stage to NGINX's web root
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port that NGINX is running on
EXPOSE 3000

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
