import express from "express";

import { createEvent, getAllEvents, getEventById } from "../controllers/Events.controller.js";

const router = express.Router();

router.post("/events", createEvent)
router.get("/events", getAllEvents)
router.get("/events/:id", getEventById)

export default router;
