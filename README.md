# Job Portal

A full-stack job app where you can browse, search, add, delete and view details of the particular job.
Built with React frontend, Express/Node backend, MongoDB database and JWT-based authentication.

---

## Demo Link

[Live Demo](https://job-app-frontend-rh9j.vercel.app/login)

---

## Quick Start

```
git clone https://github.com/Subhransu894/Job-app-frontend.git
cd <your-repo>
npm install
npm run dev  # or `npm start`/`yarn dev`
```

---

## Technolgies
- React JS
- React Router
- React Router Dom
- Node JS
- Express 
- MongoDB
- JWT

---

## Demo Video
Watch a walkthrough (5-7 minutes) of all major features of this app:
[Loom Video](https://drive.google.com/file/d/1ldPuKq1WFvtR9fMnlNGOOTD5kdh47VpN/view?usp=drive_link)

---

## Features
**Home**
- Display a list of all the jobs.
- Search by heading or title name.
- Post a job nav header opens a form.

**Job Details**
- View full job post details (company name, location, salary, job type, salary, qualification)

**Authentication**
- User signup and login with JWT.
- Protected Routes for delete/create jobs.

---

## API Reference

### **GET /api/jobs**<br>
List all jobs<br>
Sample Response:<br>
```
[{_id,title,company name,location,salary,description,jobtype,qualification},...]
```
### **GET api/jobs/:id**<br>
Get details for one job<br>
Sample Response:
```
{_id,title,company name,location,salary,description,jobtype,qualification}
```

### **POST api/jobs**<br>
Create a new job<br>
Sample Response:
```
{_id,title,company name,location,salary,description,jobtype,qualification}
```

### **DELETE api/job/:id**<br>
Delete a job<br>
Sample Response:<br>
```
{_id,title,company name,location,salary,description,jobtype,qualification}
```

### **POST api/auth/register**<br>
Register a new user
Sample Response:
```
{userId,token}
```

---

## Contact
For bugs and feature request, please reach out to subhransusekhar790@gmail.com