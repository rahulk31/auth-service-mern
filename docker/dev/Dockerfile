# Base image
FROM node:22

# Set working directory in container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory of container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port - PORT Binding of machine and container
EXPOSE 5501

# Start the application
CMD ["npm", "run", "dev"]