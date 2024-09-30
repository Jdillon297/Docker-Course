# Use node:20.15.0-alpine as the base image for the frontend React.js application
FROM node:20.15.0-alpine

# Creating the working directory named `app`
WORKDIR /usr/src/app

# Install curl using apk
RUN apk add --no-cache curl

# Copying all the tools and dependencies in the package.json file to the working directory `app`
COPY package*.json ./

# Change ownership to the node user
RUN chown -R node:node /usr/src/app

# Installing all the tools and dependencies in the container
RUN npm ci --only=production

# Switch to a non-root user
USER node

# Copying all the application source code and files to the working directory `app`
COPY --chown=node:node ./src ./src
COPY --chown=node:node ./public ./public  
COPY --chown=node:node ./node_modules ./node_modules

# Exposing the container to run on this port 4000
EXPOSE 4000

# Command to start the Docker container for the frontend React.js application
CMD ["npm", "start"]
