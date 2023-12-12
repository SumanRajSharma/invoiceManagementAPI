# Use a Node.js base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the files
COPY . .

EXPOSE 8080

# Specify the command to run the app
CMD [ "node", "app.js" ]