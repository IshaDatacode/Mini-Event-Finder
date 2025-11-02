import express from "express";
import dotenv from "dotenv";
import cors from "cors"

import databaseConnection from "./database/DatabaseConnection.js";
import EventRoutes from "./routes/events.routes.js"

dotenv.config()
databaseConnection()

const app = express();

//middleware
app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:5173", // your Vite frontend URL
    credentials: true,
  })
);

//routes
app.use("/api", EventRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})