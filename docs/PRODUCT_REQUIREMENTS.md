# 📄 Product Requirements Document – UniTask

## 1. Overview

**UniTask** is a web-based assignment and task tracking system built specifically for college students. It streamlines academic task management by using the **University Serial Number (USN)** as a unique identifier.

## 2. Objectives

- Provide a centralized dashboard for students to manage assignments and deadlines.
- Allow class representatives (CRs) or teachers to post and manage assignments.
- Enable semester- and department-specific tracking of academic tasks.

## 3. Target Users

- Students (with USNs)
- Class Representatives (CRs)
- Teachers/Admins

## 4. Key Features

- USN-based login system
- Task dashboard with Kanban view
- Admin panel for CRs/teachers
- Assignment upload and submission tracking
- Semester-wise task filtering
- Notifications/reminders

## 5. Functional Requirements

| Feature               | Description |
|----------------------|-------------|
| Authentication       | Students login with USN and shared password |
| Dashboard            | View assignments by status: To Start, In Progress, Completed, Submitted, Done |
| Task Movement        | Students drag and drop tasks to change status |
| Admin Controls       | CR/teacher can create, update, verify tasks |
| File Upload          | Students can upload completed assignments |
| Notifications        | Deadline alerts, task updates, submission status |
| Filtering            | Based on semester and department |

## 6. Non-Functional Requirements

- Should support 100+ concurrent users
- Should load dashboard under 2s on a 4G connection
- Works across all modern browsers and mobile devices

## 7. Tech Stack

- **Frontend:** React, Tailwind CSS, Zustand/Redux
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas
- **Hosting:** Vercel/Netlify (frontend), Render/Cyclic (backend)

