import express from "express";
import dotenv from "dotenv";

import databaseConnection from "./database/DatabaseConnection.js";
import EventRoutes from "./routes/events.routes.js"

dotenv.config()
databaseConnection()

const app = express();

//middleware
app.use(express.json())

//routes
app.use("/api", EventRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})