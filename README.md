# AgileFlow – Cloud‑Native Project & Client Management Platform

![GitHub stars](https://img.shields.io/github/stars/CodeReb00t/Shedly?style=social)
![npm](https://img.shields.io/npm/dw/dbackend)  
[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://main.dbadtie57oyg2.amplifyapp.com/)

---

## 🧠 Overview

AgileFlow is a modern, cloud‑native dashboard that empowers teams and freelancers to run Agile workflows end‑to‑end. Track tasks, manage clients, visualize timelines, and collaborate in real‑time—backed by a scalable AWS architecture.

---

## 🚀 Key Features

- **Agile Task Boards** – Create sprints, labels, priorities, and drag‑and‑drop status columns.  
- **Client & Team Management** – Role‑based access, activity feeds, and project‑client associations.  
- **Gantt Chart Visualization** – Auto‑generated timelines to track dependencies and deadlines.  
- **Real‑Time Collaboration** – WebSocket‑powered updates across all users.  
- **Full AWS Integration** – EC2, RDS, S3, API Gateway, Cognito, and Amplify.  
- **Secure Authentication** – JWT tokens issued by AWS Cognito.

---

## 🛠️ Tech Stack

| Layer       | Technologies                                              |
|-------------|-----------------------------------------------------------|
| Frontend    | Next.js · Tailwind CSS · Redux Toolkit · Material UI     |
| Backend     | Node.js · Express.js · Prisma ORM · PostgreSQL            |
| Infrastructure | AWS EC2 · RDS · S3 · API Gateway · Cognito · Amplify  |

---

## 📦 Installation & Setup

```bash
# 1. Clone the repo
$ git clone https://github.com/CodeReb00t/Shedly.git
$ cd Shedly

# 2. Backend setup
$ cd server
$ npm install
$ npm run dev
$ cp .env.example .env
# → Edit .env with your PostgreSQL and AWS credentials
$ npm run dev
# You should see:
# > Server listening on http://localhost:8000

# 3. Frontend setup
$ cd ../client
$ npm install
$ npm run dev
# You should see:
# > Local: http://localhost:3000
