FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files & install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the app code
COPY . .

# Expose app port
EXPOSE 3000

# Run the app
CMD ["node", "app/server.js"]


