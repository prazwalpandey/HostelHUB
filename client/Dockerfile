# # Use the official Node.js 14 image
# FROM node:14 as build

# # Set the working directory in the container
# WORKDIR /app/frontend

# # Copy package.json and package-lock.json to the container
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the frontend code
# COPY . .

# # Build the React app
# RUN npm run build

# # Use NGINX as the web server
# FROM nginx:alpine

# # Copy build output from the 'build' stage to NGINX directory
# COPY --from=build /app/frontend/dist /usr/share/nginx/html

# # Expose port 80 to the outside world
# EXPOSE 80

# # Command to run NGINX
# CMD ["nginx", "-g", "daemon off;"]


# Use a Node.js base image
FROM node:16

# Set the working directory
WORKDIR /app/frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies

RUN npm install

# Copy the client source code
COPY . .

# Build the frontend
RUN npm run build

# Expose port if needed (if your frontend serves content directly)
# EXPOSE 3000

# Command to run the frontend (if needed)
CMD ["npm","run","dev"]
