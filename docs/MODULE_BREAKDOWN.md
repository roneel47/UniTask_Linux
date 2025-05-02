# 🧩 UniTask – Module Breakdown

> This document outlines the complete breakdown of UniTask into functional modules with descriptions, requirements, and protocols.

---

## 📌 Modules Overview

| Module            | Description                                  |
|-------------------|----------------------------------------------|
| Auth Module       | USN-based login and role handling            |
| Dashboard Module  | Shows assignment Kanban board                |
| Admin Module      | Allows CRs/teachers to manage assignments    |
| Assignment Module | Handles creation, updates, and submissions   |
| Upload Module     | Manages file uploads for each assignment     |
| Notification Module| Manages alerts for upcoming deadlines       |
| Shared Notes      | Resource sharing for notes & previous papers |

---

## 🔐 1. Auth Module

**Description:**  
Authenticate users by USN and shared password. Handle student/admin roles.

**Endpoints:**  
- `POST /auth/login`  
- `POST /auth/register` (admin-only)

**Conditions & Protocols:**  
- Must check USN pattern (e.g., 1rg22cs066)  
- JWT token issued on login  
- Admins tagged with a flag in DB

---

## 🏠 2. Dashboard Module

**Description:**  
Student dashboard with Kanban-style task board.

**Features:**  
- Filter by semester/department  
- Drag & drop tasks between statuses

**Statuses Flow:**  
`To Be Started → In Progress → Completed → Submitted → Done`

**Protocols:**  
- Only CR/teacher can mark final "Done"  
- Tasks updated in real-time (polling or sockets)

---

## 🧑‍🏫 3. Admin Module

**Description:**  
CRs and teachers can assign tasks to groups of USNs.

**Endpoints:**  
- `POST /assignments`  
- `PUT /assignments/:id`  
- `GET /students/status`  
- `PUT /verify/:id`

**Protocols:**  
- Role check middleware  
- Auto-populate assignments to matched USNs (e.g., 1rg22cs0xx)

---

## 📋 4. Assignment Module

**Description:**  
Manages student-specific tasks.

**Endpoints:**  
- `GET /assignments/my`  
- `PATCH /assignments/:id/status`  
- `GET /assignments/:id`

**Protocols:**  
- Only students can move to Submitted  
- Once submitted, file cannot be changed unless admin unlocks

---

## 📂 5. Upload Module

**Description:**  
Handles PDF/image uploads per assignment.

**Requirements:**  
- Limit size to 10MB  
- File types: PDF, JPG, PNG  
- One upload per assignment

**Endpoints:**  
- `POST /upload/:assignmentId`  
- `GET /upload/:assignmentId`

---

## 🔔 6. Notification Module

**Description:**  
Handles push/email/inline alerts.

**Triggers:**  
- Assignment Created  
- Task Due Tomorrow  
- Submission Confirmed  
- Task Verified

---

## 📘 7. Shared Notes Module

**Description:**  
Students can upload public resources.

**Endpoints:**  
- `POST /notes`  
- `GET /notes`  
- `DELETE /notes/:id` (admin only)

**Conditions:**  
- File size < 10MB  
- Files tagged by semester/subject

---

## ✅ Status Flow Summary

```text
1. Admin posts assignment →  
2. All students receive it under "To Be Started" →  
3. Students move to "In Progress" → "Completed" → "Submitted" →  
4. Admin reviews and updates to "Done"
