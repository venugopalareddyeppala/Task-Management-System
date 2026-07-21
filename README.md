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

A modern <b>Full-Stack Task Management System</b> built with <b>React.js</b>, <b>Node.js</b>, <b>Express.js</b>, and <b>MongoDB</b> that enables users to efficiently manage daily tasks through a responsive web interface.

</p>

---

# 📖 Table of Contents

- [Project Overview](#-project-overview)
- [Objectives](#-objectives)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [System Architecture](#-system-architecture)
- [Application Workflow](#-application-workflow)
- [Project Structure](#-project-structure)
- [Installation Guide](#-installation-guide)
- [Environment Variables](#-environment-variables)
- [Running the Application](#-running-the-application)
- [REST API Documentation](#-rest-api-documentation)
- [Database Design](#-database-design)
- [Screenshots](#-screenshots)
- [AWS EC2 Deployment](#-aws-ec2-deployment)
- [GoDaddy Domain Configuration](#-godaddy-domain-configuration)
- [Production Deployment](#-production-deployment)
- [Troubleshooting](#-troubleshooting)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [Author](#-author)
- [License](#-license)

---

# 📖 Project Overview

The **Task Management System** is a full-stack web application developed using **React.js**, **Node.js**, **Express.js**, and **MongoDB**. The application enables users to manage daily tasks by performing **Create, Read, Update, and Delete (CRUD)** operations through a responsive and user-friendly interface.

The frontend communicates with the backend using **REST APIs**, while the backend stores and retrieves task data from **MongoDB**.

The project follows a **client-server architecture**, where React handles the user interface, Express.js manages API requests, and MongoDB serves as the database layer. This architecture ensures scalability, maintainability, and efficient data management.

This application demonstrates modern full-stack development practices including:

- Component-based UI development
- RESTful API architecture
- Database integration with MongoDB
- Client-server communication using Axios
- Responsive web design
- Modular project structure
- Full CRUD implementation

---

# 🎯 Objectives

The primary objectives of this project are:

- Develop a responsive frontend using **React.js**.
- Build a RESTful backend using **Node.js** and **Express.js**.
- Store application data in **MongoDB**.
- Perform complete **CRUD** operations on tasks.
- Connect frontend and backend through **REST APIs**.
- Implement modular and maintainable project architecture.
- Practice version control using **Git** and **GitHub**.
- Deploy the application on **AWS EC2**.
- Configure production deployment using **PM2** and **Nginx**.
- Connect a custom domain using **GoDaddy DNS**.

---

# ✨ Key Features

### 📋 Task Management

- Create new tasks
- View all tasks
- Edit existing tasks
- Delete tasks
- Update task status
- Manage task priorities
- Set due dates

---

### 📊 Dashboard

- View task statistics
- Pending task count
- Completed task count
- Priority-based task management
- Responsive dashboard layout

---

### 🎨 User Interface

- Clean Bootstrap UI
- Responsive Design
- Mobile Friendly
- Reusable React Components
- Easy Navigation
- User-friendly Forms

---

### ⚙ Backend Features

- RESTful API
- CRUD Operations
- MongoDB Integration
- Express Routing
- MVC Architecture
- Environment Variable Support
- Error Handling

---

# 🛠 Technology Stack

## Frontend Technologies

| Technology | Description |
|------------|-------------|
| React.js | JavaScript library for building user interfaces |
| React Router DOM | Client-side routing |
| Axios | API communication |
| Bootstrap 5 | Responsive UI framework |
| HTML5 | Web page structure |
| CSS3 | Styling |

---

## Backend Technologies

| Technology | Description |
|------------|-------------|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| Mongoose | MongoDB Object Modeling |
| MongoDB | NoSQL Database |
| CORS | Cross-Origin Resource Sharing |
| dotenv | Environment configuration |

---

## Development Tools

| Tool | Purpose |
|------|---------|
| Git | Version Control |
| GitHub | Source Code Hosting |
| VS Code | Code Editor |
| Postman | API Testing |
| MongoDB Compass | Database Management |
| AWS EC2 | Cloud Deployment |
| PM2 | Process Manager |
| Nginx | Reverse Proxy |

---

# 📚 Technology Overview

## React.js

React.js is an open-source JavaScript library developed by **Meta** for building interactive and reusable user interfaces. It follows a component-based architecture and uses the Virtual DOM to efficiently update the user interface.

### Advantages

- Component-based architecture
- Fast rendering using Virtual DOM
- Easy state management with Hooks
- Single Page Application (SPA)
- Reusable UI components

---

## Node.js

Node.js is an open-source JavaScript runtime environment that executes JavaScript code on the server side. It enables developers to build scalable and high-performance backend applications using JavaScript.

### Advantages

- Fast execution
- Event-driven architecture
- Non-blocking I/O
- Highly scalable
- JavaScript for both frontend and backend

---

## Express.js

Express.js is a lightweight framework built on Node.js that simplifies backend development through routing, middleware support, and REST API creation.

### Advantages

- Simple routing
- Middleware support
- REST API development
- Lightweight
- High performance

---

## REST API

REST (Representational State Transfer) is an architectural style used for communication between frontend and backend using standard HTTP methods.

### HTTP Methods

| Method | Purpose |
|---------|----------|
| GET | Retrieve task data |
| POST | Create new task |
| PUT | Update existing task |
| DELETE | Delete task |

---

## MongoDB

MongoDB is a NoSQL document-oriented database that stores data in flexible JSON-like documents. It integrates seamlessly with Node.js applications using Mongoose.

### Advantages

- Flexible schema
- High performance
- Horizontal scalability
- Easy Mongoose integration
- JSON document storage

---
