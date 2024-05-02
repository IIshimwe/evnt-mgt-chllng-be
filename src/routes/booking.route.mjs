import { createBooking, getBookings } from "../controllers/book.controller.mjs";
import express from "express";
const router = express.Router();

router.get("/", getBookings);
router.post("/", createBooking);

export default router;
