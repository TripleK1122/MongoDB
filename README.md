# 🏋️‍♂️ Workout Tracker API  
Node.js + Express + MongoDB + JWT Authentication

A simple REST API that allows users to register, log in, and manage workout logs securely.  
Built with MongoDB Atlas, JWT auth, and a clean MVC structure — perfect as a mid-level backend/DevOps portfolio project.

---

## 🚀 Features

### 🔐 Authentication
- User registration  
- User login  
- JWT-based authentication  
- Secure password hashing with bcrypt  
- Protected routes with middleware  

### 🗄️ Workout Management
- Create a workout  
- Get all workouts for the authenticated user  

### 🧰 Tech Stack
- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **JWT**
- **bcryptjs**
- **dotenv**

---

## 📁 Project Structure

project/
│── src/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ ├── authController.js
│ │ └── workoutController.js
│ ├── middleware/
│ │ └── auth.js
│ ├── models/
│ │ ├── User.js
│ │ └── Workout.js
│ ├── routes/
│ │ ├── auth.js
│ │ └── workouts.js
│ ├── app.js
│ └── server.js
│── .env (ignored)
│── .gitignore
│── package.json
└── README.md



---

## 🔧 Installation

### 1. Clone the repository

```bash
git clone https://github.com/TripleK1122/MongoDB.git
cd MongoDB
2. Install dependencies

npm install
3. Create .env file


MONGO_URI=your-mongodb-uri
MONGO_DB_NAME=workout_tracker
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d
PORT=5001
NODE_ENV=development
4. Start the server

npm run dev
Server runs on:


http://localhost:5001
🔐 API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login + get JWT token

Workout Routes (Protected)
Header required:
Authorization: Bearer <token>

Method	Endpoint	Description
POST	/api/workouts	Create a new workout
GET	/api/workouts	Get all workouts for the user

🧪 Example Requests
Register

POST /api/auth/register
{
  "email": "test@example.com",
  "password": "123456"
}
Login Response

{
  "_id": "6925...",
  "email": "test@example.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
Create Workout
Headers:

Authorization: Bearer <token>
Body:


{
  "type": "Chest Day",
  "notes": "Bench press 80kg"
}
🛡️ Security
.env is ignored from Git and safe

Passwords hashed with bcrypt

JWT tokens signed + expiring

MongoDB Atlas credentials hidden locally
