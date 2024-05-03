import express from "express";
const router = express.Router();
import { createBooking, getBookings } from "../controllers/book.controller.mjs";
import { auth } from "../middlewares/auth.middleware.mjs";

router.get("/", auth, getBookings);
router.post("/", auth, createBooking);

export default router;
