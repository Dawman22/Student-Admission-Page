# University Admission Portal

## Project Overview

The **University Admission Portal** is a responsive React application for collecting student admission applications through a clear and user-friendly interface.

The project presents available courses, allows an applicant to enter personal details, performs basic form validation, and displays a confirmation summary after a successful submission.

## Project Motivation

The purpose of this project is to demonstrate how a modern admission form can be organized into reusable React components instead of being built as one large page. It focuses on making the application process simple for students while providing a clean digital experience for an admissions office.

This project demonstrates:

- Functional React components
- Reusable components and props
- Controlled form inputs
- State management with `useState`
- Event handling and form submission
- Basic client-side validation
- Responsive design for desktop and mobile screens
- Interactive hover and pressed button states
- Scroll-based parallax motion

## Main Features

### Course Information

The course section uses a reusable `CourseCard` component. Each card displays the course name, duration, eligibility requirements, and a short description.

Three sample courses are included:

1. Computer Science
2. Business Administration
3. Mass Communication

### Admission Form

Applicants can submit their name, email, phone number, date of birth, selected course, and current address. The form checks required fields and validates the email and phone number before submission.

### Application Confirmation

After a valid submission, the form is replaced by an application confirmation section displaying:

- `Application Submitted Successfully`
- Applicant name
- Email
- Phone number
- Date of birth
- Address
- Selected course

The applicant can also choose to submit another application.

## Technology Used

- **React** for the user interface and component structure
- **Vite** for development and production builds
- **JavaScript (JSX)** for application logic
- **CSS** for layout, responsive design, colors, animation, and interactions
- **Google Fonts** using DM Sans and Space Grotesk

No backend or database is used. The application is fully frontend-based, and submitted data is held in React state during the current page session.

## Component Structure

```text
App
├── Header
├── CourseSection
│   └── CourseCard
├── AdmissionForm
│   └── Field
└── ApplicationDetails
```

## Design Direction

The interface uses a professional navy, teal, white, and cool-neutral color palette. Course cards use a consistent visual language, while the Submit Application button uses a dark-blue outline by default and fills with dark blue when hovered or pressed.

The page also includes subtle course-card hover effects and scroll-based parallax movement to make the interface more engaging without distracting from the admission workflow.

## Developer

**Dawman Comfield Laskor** the developer of this project.

This project was developed as part of final-year student practical work to demonstrate knowledge of React components, reusable UI design, form handling, state, events, and basic validation.

## Running the Project

Open PowerShell and run:

```powershell
cd "D:\Student Admission Page"
npm.cmd install
npm.cmd run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## Production Build

To create a production-ready build:

```powershell
npm.cmd run build
```

The generated production files are placed in the `dist` folder.

## Project Status

The application is complete as a frontend demonstration. A future version could connect the form to a backend API, store applications in a database, add authentication, and provide an admissions-office dashboard.
