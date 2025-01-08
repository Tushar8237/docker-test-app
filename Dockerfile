# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /myapp

# Copy only package.json and package-lock.json first to leverage caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the application listens on
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
