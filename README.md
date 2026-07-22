# 📋 Task Management System

<p align="center">

![React](https://img.shields.io/badge/React.js-Frontend-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express.js-API-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

</p>

<p align="center">

## 📖 Project Overview

The **Task Management System** is a full-stack web application built using **React.js**, **Node.js**, **Express.js**, and **MongoDB**. It allows users to create, view, update, and delete tasks through a simple and responsive user interface. The frontend communicates with the backend using REST APIs, while MongoDB stores all task-related data.

---

# 🛠️ Technologies Used

## Frontend
- React.js
- Bootstrap 5
- Axios
- HTML5
- CSS3

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- CORS

## Tools
- Git
- GitHub
- Visual Studio Code
- Postman

---

# 🚀 Installation Steps

The project can be installed in two environments:

- 💻 Local Installation
- ☁️ AWS EC2 Installation

---

# 💻 Method 1: Local Installation

## Step 1: Install Git

Download Git:

https://git-scm.com/downloads

Verify:

```bash
git --version
```

---

## Step 2: Install Node.js & npm

Download Node.js (LTS):

https://nodejs.org/

Verify:

```bash
node -v

npm -v
```

---

## Step 3: Install MongoDB

Download MongoDB Community Server:

https://www.mongodb.com/try/download/community

Verify:

```bash
mongod --version
```
---

## Step 4: Clone the Repository

```bash
git clone https://github.com/venugopalareddyeppala/Task-Management-System.git

cd Task-Management-System
```
---

# 🌍 Configure Environment Variables

> **Note:** If the project already contains `.env` files in the `backend` and `frontend` folders, you can skip this step.

### Backend (.env)

Create a `.env` file inside the **backend** folder and add:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/taskmanager
```

### Frontend (.env)

Create a `.env` file inside the **frontend** folder and add:

```env
REACT_APP_API_URL=http://localhost:5000/api/tasks
```

---

## Step 8: Install Backend Dependencies

```bash
cd Task-Management-System

cd backend

npm install
```
---
## Start Backend

```bash
npm run dev
```

Expected Output

```text
Server running on port 5000

MongoDB Connected Successfully
```
---

## Step 9: Install Frontend Dependencies

Open another terminal.

```bash
cd Task-Management-System

cd frontend

npm install
```
---

## Start Frontend

Open a new terminal.

```bash
npm start
```

Expected Output

```text
Compiled Successfully!

Local: http://localhost:3000
```
---

# 🌐 Access the Application

| Service | URL |
|---------|-----|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:5000/api/tasks |

---
---

# ☁️ Method 2: AWS EC2 Installation

## Step 1: Connect to EC2

```bash
ssh -i your-key.pem ubuntu@<EC2-PUBLIC-IP>
```
---

## Step 2: Update the System

```bash
sudo apt update -y

sudo apt upgrade -y
```
---

## Step 3: Install Git

```bash
sudo apt install git -y
```

Verify:

```bash
git --version
```
---

## Step 4: Install npm

```bash
sudo apt install npm -y
```
---

## Step 5: Install Node.js

```bash
sudo apt install nodejs -y
```

Verify:

```bash
node -v

npm -v
```

Expected Output

```text
v18.19.1
9.2.0
```
---

## Step 6: Install MongoDB

Install required packages:

```bash
sudo apt install -y gnupg curl
```

Import MongoDB GPG Key:

```bash
curl -fsSL https://pgp.mongodb.com/server-8.0.asc | \
gpg --dearmor -o /usr/share/keyrings/mongodb-server-8.0.gpg
```

Create MongoDB Repository:

```bash
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | \
sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
```

Update Package List:

```bash
sudo apt update
```

Install MongoDB:

```bash
sudo apt install mongodb-org -y
```

Start MongoDB:

```bash
sudo systemctl start mongod
```

Enable MongoDB:

```bash
sudo systemctl enable mongod
```

Check Status:

```bash
sudo systemctl status mongod
```

Verify Version:

```bash
mongod --version
```
---

## Step 7: Clone the Repository

```bash
git clone https://github.com/venugopalareddyeppala/Task-Management-System.git

cd Task-Management-System
```
---
# 🌍 Configure Environment Variables

> **Note:** This project already contains the required `.env` files. No additional configuration is required.
---

## Step 8: Install Backend Dependencies

```bash
cd Task-Management-System

cd backend

npm install
```
---
## Start Backend

```bash
npm run dev
```

Expected Output

```text
Server running on port 5000

MongoDB Connected Successfully
```
---

## Step 9: Install Frontend Dependencies

Open another terminal.

```bash
cd Task-Management-System

cd frontend

npm install
```
---

## Start Frontend

Open a new terminal.

```bash
npm start
```

Expected Output

```text
Compiled Successfully!

Local: http://<EC2-PUBLIC-IP>:3000
```
---

# 🌐 Access the Application

| Service | URL |
|---------|-----|
| Frontend | http://EC2-PUBLIC-IP:3000 |
| Backend API | http://EC2-PUBLIC-IP:5000/api/tasks |

---

# ✨ Features Implemented

- Create new tasks
- View all tasks
- Edit existing tasks
- Delete tasks
- Update task status
- RESTful API integration
- MongoDB database connectivity
- Responsive user interface
- Component-based React architecture
- Axios-based frontend and backend communication
- Express.js routing and controller-based architecture

---

# 📂 Project Structure

```text
Task-Management-System/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── .env
│   └── package.json
│
├── .gitignore
└── README.md
```

---

# 👨‍💻 Author

**Venu Gopala Reddy Eppala**

- GitHub: https://github.com/venugopalareddyeppala
- LinkedIn: https://www.linkedin.com/in/venu-gopala-reddy-eppala

---
Made with ❤️ by <b>Venu Gopala Reddy Eppala</b>
</p>
