# Workout Tracker API

A production-ready REST API for tracking workouts, built with **Node.js**, **Express**, **MongoDB**, and fully containerized using **Docker**.  
Automatic deployment to **AWS EC2** is handled via **GitHub Actions CI/CD**.

---

## 🚀 Tech Stack

- Node.js / Express  
- MongoDB Atlas  
- JWT Authentication  
- Docker & Docker Compose  
- GitHub Actions (CI/CD)  
- AWS EC2 (Ubuntu)

---

## 📁 Project Structure

├── src
│ ├── config
│ ├── controllers
│ ├── middleware
│ ├── models
│ ├── routes
│ ├── app.js
│ └── server.js
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
└── README.md

yaml
Копировать код

---

## ⚙️ Local Setup

### 1. Install dependencies
```bash
npm install
2. Create .env file

PORT=5001
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
3. Start server

npm start
API will run at:


http://localhost:5001
🐳 Running with Docker
Build and start containers

docker-compose up --build -d
Check running containers

docker ps
API will run at:


http://localhost:5001
🔐 Authentication (JWT)
Register
POST /api/auth/register

Login
POST /api/auth/login

Send JWT token in headers for protected routes:


Authorization: Bearer <token>
🔄 CI/CD — GitHub Actions → AWS EC2
This repository includes an automated deployment pipeline.

When code is pushed to main:

GitHub Actions connects to EC2 via SSH

Pulls the latest code

Stops existing Docker containers

Rebuilds images

Starts the updated stack

Workflow file: .github/workflows/deploy.yml

☁️ Production URL

Once deployed, the API is available at:

http://<EC2_PUBLIC_IP>:5001


