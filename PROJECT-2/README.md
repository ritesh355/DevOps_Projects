# 🚀 Node.js + MongoDB with Docker & Docker Compose

This project demonstrates how to containerize a **Node.js + MongoDB application** using Docker and Docker Compose.  
It’s part of my **100 Days of DevOps Journey (Day 26)**.

---
## 🗂️ Project Structure

```
node-mongo-app/
├── app/
│   ├── server.js
│   └── ...other files
├── Dockerfile
├── docker-compose.yml
├── package.json
```

---

## 🛠️ Technologies Used

- **Node.js** (Express.js for web server)
- **MongoDB** (NoSQL database)
- **Docker** (Containerization)
- **Docker Compose** (Service orchestration)

---

## 🐳 Docker Setup

### Dockerfile (multi-stage)
- Uses `node:18-alpine` for a small image
- Installs only production dependencies
- Copies app files and exposes port **3000**

### docker-compose.yml
- **web**: Node.js container running Express app
- **mongo**: MongoDB container with persistent volume
- Services communicate over Docker network

---

## ▶️ How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/ritesh355/node-mongo-app.git
   cd node-mongo-app
   ```
2.  Build and start containers:
    ```bash
    docker-compose up --build
    ```
3.  Open in browser:
   ```bash
    http://localhost:3000
   ```
4. Stop containers:
   ```bash
   docker-compose down
   ```

---

## For more detail
go to my hashnode blog click here
[hashnode](https://ritesh-devops.hashnode.dev/day-26-dockerfile-docker-compose-nodejs-mongodb)



    
