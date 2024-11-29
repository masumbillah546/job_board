# Job Board

This project is a **Job Management System** built using **Next.js**. It provides a REST API to perform CRUD operations on job data and includes functionalities like viewing, filtering, and managing job listings based on various categories.

---

## Features

### 2. **Theme Changing**
Added a theme toggle (dark/light mode) with smooth transitions.

### 2. **Home Page**
A hero section with a job search bar and a carousel of featured jobs
(autoplay with pause on hover).

### 3. **Job Listing**
   - Provides a list of available jobs with details such as:
     - Job title
     - Company name
     - Location
     - Salary range
     - Job type (Full-time, Part-time, Freelance)
     - Experience level

### 4. **Categories**
   - Jobs are categorized for better filtering:
     - **Tech**: Software engineering, IT, etc.
     - **Creative**: Design, content creation, etc.
     - **Healthcare**: Nursing, clinical roles, etc.
     - **Education**: Teaching, training, etc.
     - Many more categories (20 total).

### 5. **CRUD Operations**
   - **Create**: Add new jobs to the system.
   - **Read**: Retrieve job details and listings.
   - **Update**: Modify existing job entries.
   - **Delete**: Remove jobs from the system.

### 6. **Filter Jobs**
   - Filter jobs by:
     - Category
     - Location
     - Job type
     - Experience level

### 7. **View Job Details**
   - Detailed page for each job listing, displaying:
     - Description
     - Requirements
     - Company information

---

## API Endpoints

### 1. **Job Operations**
   - `GET /api/jobs` - Retrieve all jobs.
   - `GET /api/jobs/:id` - Retrieve a single job by ID.
   - `POST /api/jobs` - Add a new job (protected route).
   - `PUT /api/jobs/:id` - Update job details (protected route).
   - `DELETE /api/jobs/:id` - Delete a job (protected route).

### 2. **Categories**
   - `GET /api/categories` - Retrieve all job categories.

---

## Technologies Used

- **Next.js**: Framework for building the web application and API.
- **React Bootstrap**: For designing user-friendly forms and components.
- **Middleware**: For securing private routes.
- **JSON**: For managing job and category data.

---

## How to Run the Project
 git clone [https://github.com/your-repo/job-management-api.git](https://github.com/masumbillah546/job_board.git)
  cd job-board
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/job-management-api.git
   cd job-management-api
