# 📘 UniTask – USN-Based Assignment & Task Tracker

> A smart task management system for university students, designed around University Serial Numbers (USNs). UniTask allows class representatives (CRs) to post assignments, while students can track, update, and submit them—via a Kanban-style interface.

---

## 🚀 Features

- 🔐 **USN-based Login** with role-based access (Student / Admin)
- 📋 **Assignment Management** with deadlines
- 🧠 **Kanban Dashboard** to manage task status
- 📁 **File Uploads** for assignments & notes
- 🔔 **Notifications** for deadlines & updates
- 🗃️ **Shared Notes** section for collaboration
- 📊 **Admin Panel** for CRs/teachers to manage tasks

---

## 🛠️ Tech Stack

### 🔷 Frontend
- **React + Vite**
- **Tailwind CSS**
- **Zustand / Redux** (State Management)
- **Axios**

### 🔶 Backend
- **Node.js + Express**
- **MongoDB Atlas**
- **Mongoose**
- **JWT** (for Authentication)

### 🚀 Deployment
- **Frontend**: Vercel / Netlify
- **Backend**: Render / Cyclic
- **Database**: MongoDB Atlas

---

## 🗂️ Project Structure
```
UniTask/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── App.jsx
├── docs/
│ ├── PRODUCT_REQUIREMENTS.md
│ ├── DESIGN_REQUIREMENTS.md
│ └── MODULE_BREAKDOWN.md
├── .env
├── README.md
```

---

## 🧩 Modules

UniTask is organized into modular components. Read more in:

- 📄 [`PRODUCT_REQUIREMENTS.md`](docs/PRODUCT_REQUIREMENTS.md)
- 📄 [`DESIGN_REQUIREMENTS.md`](docs/DESIGN_REQUIREMENTS.md)
- 📄 [`MODULE_BREAKDOWN.md`](docs/MODULE_BREAKDOWN.md)

---

## 💡 Pages

| Page           | Description                              |
|----------------|------------------------------------------|
| `/login`       | Login using USN + shared password        |
| `/dashboard`   | Student’s Kanban task board              |
| `/admin`       | Admin panel for managing assignments     |
| `/upload`      | Upload assignment documents              |
| `/notifications` | View deadline and status alerts        |
| `/resources`   | View shared notes and files              |

---

## 🔧 Setup Instructions

### 📦 Backend
```
cd backend
npm install
# Create a .env file with MONGO_URI and JWT_SECRET
npm start
```
---

### 🔒 Roles & Permissions
- Role	Permissions
- Admin	Post assignments, view progress, mark 'Done'
- Student	View/update tasks, upload files

## 🎓 Target Audience
- Primary: 6th Semester CSE students
- USN Range: 1rg22cs001 – 1rg22cs098
- Expandable to other departments: ECE, Mech, etc.

## 📜 License
This project is licensed under the MIT License.

## 🤝 Contributions
Pull requests welcome! Feel free to fork the project and make improvements.

👨‍💻 Developed By
Roneel V
3rd Year CSE, Bangalore
USN: 1rg22cs066

