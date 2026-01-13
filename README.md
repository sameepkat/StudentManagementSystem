# Student Management System

A full-stack web application for managing student information and academic records. This system enables educational institutions to efficiently track student data, manage exam results (internal and final), and provide students with easy access to their academic performance.

## Features

- **Student Authentication** - Secure login system for students to access their information
- **Student Information Management** - Comprehensive student profiles including roll numbers, registration details, contact information
- **Exam Results Management** - Track and display both internal and final examination results
- **Semester-wise Results** - Organized result viewing by semester with detailed subject-wise marks
- **SGPA Calculation** - Automatic calculation and display of semester grade point averages
- **Responsive Dashboard** - Clean, intuitive interface for viewing student details and results
- **RESTful API** - Well-structured backend API for data management
- **Dark Mode Support** - Toggle between light and dark themes for better user experience

## Tech Stack

### Frontend
- **React 18** - UI library for building interactive interfaces
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **React Router v7** - Client-side routing
- **TanStack Query** (React Query) - Data fetching and caching
- **Tailwind CSS 4** - Utility-first CSS framework

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **TypeScript** - Type-safe server development
- **Bun** - Fast JavaScript runtime for development
- **Sequelize** - ORM for database management
- **MariaDB** - Relational database
- **CORS** - Cross-origin resource sharing

## Project Structure

```
StudentManagementSystem/
├── apps/
│   ├── client/          # React frontend application
│   │   ├── src/
│   │   │   ├── components/  # React components
│   │   │   ├── App.tsx      # Main application component
│   │   │   └── main.tsx     # Application entry point
│   │   └── package.json
│   └── server/          # Express backend application
│       ├── src/
│       │   ├── config/      # Configuration files
│       │   ├── controllers/ # Route controllers
│       │   ├── db/          # Database connection
│       │   ├── models/      # Sequelize models
│       │   ├── routes/      # API routes
│       │   └── main.ts      # Server entry point
│       └── package.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- Bun (for server development)
- MariaDB database
- npm or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sameepkat/StudentManagementSystem.git
cd StudentManagementSystem
```

2. Install dependencies:
```bash
npm install
```

3. Set up the client:
```bash
cd apps/client
npm install
```

4. Set up the server:
```bash
cd apps/server
npm install
```

5. Configure environment variables:

Create a `.env` file in `apps/server/src/`:
```env
PORT=8000
DB=mariadb://username:password@localhost:3306/database_name
```

6. Start the development servers:

**Backend** (from `apps/server/`):
```bash
bun run dev
```

**Frontend** (from `apps/client/`):
```bash
npm run dev
```

The client will run on `http://localhost:5173` and the server on `http://localhost:8000`.

## API Endpoints

### Student Routes

- `GET /student/loginList` - Get list of student login credentials
- `POST /student/register` - Register a new student
- `GET /student/studentList` - Get all student information

### Result Routes

- `GET /result/first/:examType` - Get first semester results
  - `:examType` can be `internal` or `final`

## Database Models

### Student Login
- username (String, unique)
- Name (String)
- password (String)

### Student Info
- RollNo (Primary Key)
- Name
- ExamRollNo
- PuRegNo
- Email
- Address
- PhNo
- Sex

### Result Models
- Roll Number
- Exam Roll Number
- Name
- Subject Marks (Basic Engineering Drawing, Calculus I, Digital Logic, Discrete Structures, PST, Programming in C, Computer Workshop)
- SGPA (for final results)
- PuRegNo (for internal results)

## Development

### Build for Production

**Client:**
```bash
cd apps/client
npm run build
```

**Server:**
```bash
cd apps/server
npm run build
```

### Linting

```bash
cd apps/client
npm run lint
```

## License

This project is available for educational purposes.