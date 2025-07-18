# College Management System

Welcome to the College Management System (CMS)!  
CMS is a simple, web-based platform that helps colleges manage everything in one place. Whether you’re a student, teacher, placement officer, or admin, CMS makes your daily tasks easier and keeps everyone connected.

---

## What is CMS?

CMS is built using the MERN stack (MongoDB, Express.js, React, Node.js). It brings together all the important features a college needs—like tracking grades, managing courses, handling placements, and more—so you don’t have to juggle between different tools.

---

## Main Features

CMS is divided into four main modules, each designed for a specific group:

### For Students
- **Manage Courses:** See your courses, download materials, and check assignments.
- **Submit Projects:** Upload your projects and get feedback.
- **Track Progress:** View your grades and attendance.
- **Skill Profile:** Build your profile for placements.
- **Reminders:** Set goals and get deadline reminders.
- **Placement Info:** Stay updated on placement events.

### For Tutors
- **Update Curriculum:** Edit course content and assignments.
- **Grade Assignments:** Give grades and feedback online.
- **Monitor Students:** Track student progress and help when needed.
- **Communicate:** Send messages and share materials.

### For Placement Officers
- **Sort Students:** Organize students by skills and projects.
- **Verify Skills:** Check and approve student projects.
- **Match Jobs:** Connect students to suitable job roles.
- **Notify:** Inform students about placement drives and workshops.

### For Admins
- **Manage System:** Control user roles and system settings.
- **User Access:** Add, update, or remove users.
- **Support:** Help with account issues.
- **Reports:** Generate useful analytics and reports.

---

## How to Get Started

1. **Clone the project:**
   ```bash
   git clone <repository_url>
   ```

2. **Install dependencies:**
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in both `backend` and `frontend` using the `.env.sample` as a guide.

4. **Create the admin account:**
   ```bash
   cd backend
   npm run seed
   ```
   - **Admin Login ID:** `123456`
   - **Admin Password:** `admin123`

5. **Start the backend:**
   ```bash
   cd backend
   npm start
   ```

6. **Start the frontend:**
   ```bash
   cd ../frontend
   npm start
   ```

---

You’re ready to go! Log in as admin to add students, tutors, and more. If you need help, check the documentation or reach out. Enjoy managing your college with CMS!