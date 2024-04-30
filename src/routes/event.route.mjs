import express from "express";
const router = express.Router();
import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getSingleEvent,
  updateEvent,
} from "../controllers/event.controller.mjs";

router.get("/", getAllEvents);
router.post("/", createEvent);
router.get("/:id", getSingleEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export default router;
