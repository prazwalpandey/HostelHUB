# # Use the official Node.js 14 image
# FROM node:14

# # Set the working directory in the container
# WORKDIR /app/backend

# # Copy package.json and package-lock.json to the container
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the backend code
# COPY . .

# # Expose port 5000
# EXPOSE 5000

# # Command to run the backend server
# CMD ["npm", "start"]

# Use a Node.js base image
FROM node:16

# Set the working directory
WORKDIR /app/backend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the server source code
COPY . .

# Expose port (assuming your backend runs on port 5000)
EXPOSE 5000

# Command to run the backend
CMD ["npm", "start"]
