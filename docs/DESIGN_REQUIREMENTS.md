# 🎨 Design Requirements Document – UniTask

## 1. System Design Goals

- Modular, maintainable architecture
- Clean UI/UX optimized for students
- Scalable backend with secure APIs

## 2. Pages/Views

### 🔐 Login Page
- USN input
- Shared password
- Role-based redirection (student/admin)

### 🧾 Sign Up Page (Optional)
- USN, Name, Email, Semester, Dept
- Initially disabled; accounts added by admin only

### 🏠 Dashboard (Student View)
- Display assignments in Kanban format
- Filter by semester, department
- Upload assignment files
- Track progress from "To Be Started" → "In Progress" → "Completed" → "Submitted"

### 📋 Admin Panel
- Post new assignments
- View all students' statuses
- Mark final status as "Done"
- Verify uploaded files

### 🔔 Notification Center
- Alerts for due tasks
- Submission confirmations

### 📁 Shared Resources Page
- Notes, previous year papers, etc.
- Uploaded by students or admins

## 3. Components

- Header/Navbar
- Kanban Columns
- Assignment Cards
- File Upload Field
- Notification Badge
- Role-based Protected Routes

## 4. UI/UX Guidelines

- Use Tailwind CSS for layout
- Responsive design for mobile and desktop
- Color scheme: Blue/Gray/White (Academic theme)

## 5. Deployment

- Frontend: Vercel/Netlify
- Backend: Render/Cyclic
- CI/CD: GitHub Actions (optional)

