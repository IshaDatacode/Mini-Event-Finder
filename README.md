# Mini-Event-Finder
Event discovery app

# Overview
Mini-Event-Finder is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js).
It allows users to create, view, and discover local events based on their location.

# Features
Create new events with title, description, date, location, maxParticipants, currentParticipants

# View all upcoming events
Fetch user’s current location automatically
Backend API built with Express and MongoDB
Responsive UI using Tailwind CSS
State management with Redux Toolkit

# Tech Stack
Frontend: React + Vite, TypeScript, Tailwind CSS, Redux Toolkit
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Other Tools: Axios, dotenv, Vite Env Variables

# Setup Instructions
Clone the repository
git clone https://github.com/IshaDatacode/Mini-Event-Finder.git

cd Mini-Event-Finder

Install dependencies
For backend:
cd backend
npm install

For frontend:
cd frontend
npm install

Create environment files
Create .env files in both backend and frontend folders using the example below.

Backend .env:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/Event_Finder

Frontend .env:
VITE_API_BASE_URL=http://localhost:5000

Running the Project
To start the backend:
npm run dev
To start the frontend:
npm run dev
Frontend will run at: http://localhost:5173
Backend will run at: http://localhost:5000

# Folder Structure
Mini-Event-Finder/
│
├── backend/
│ ├── models/
│ ├── middlewares/
│ ├── database/
│ ├── routes/
│ ├── controllers/
│ ├── app.js
│ └── .env.example
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── screens/
│ │ ├── operations/
│ │ ├── routes/
│ │ ├── App.tsx/
│ │ ├── main.tsx/
│ └── .env.example
│
└── README.txt

# Learnings
Managing API state using Redux Toolkit
Implementing location-based event filtering with GeoJSON
Working with environment variables in Vite
Building reusable and responsive UI components with Tailwind CSS

# Future Improvements
Add user authentication with JWT
Implement event search and filters
Show nearby events on an interactive map
Add image upload and event category support

# Author
Isha Vaishnav
GitHub: https://github.com/IshaDatacode
LinkedIn: https://www.linkedin.com/in/isha-vaishnav-b08704262/