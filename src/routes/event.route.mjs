import express from "express";
const router = express.Router();
import { createEvent, getAllEvents } from "../controllers/event.controller.mjs";

router.get("/", getAllEvents);
router.post("/", createEvent);
export default router;
