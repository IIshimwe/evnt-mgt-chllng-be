import express from "express";
const router = express.Router();
import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getSingleEvent,
  updateEvent,
} from "../controllers/event.controller.mjs";
import { auth } from "../middlewares/auth.middleware.mjs";
import { admin } from "../middlewares/admin.middleware.mjs";

router.get("/", getAllEvents);
router.post("/", [auth, admin], createEvent);
router.get("/:id", getSingleEvent);
router.put("/:id", [auth, admin], updateEvent);
router.delete("/:id", [auth, admin], deleteEvent);

export default router;
