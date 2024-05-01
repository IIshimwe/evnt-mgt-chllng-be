import { getBookings } from "../controllers/book.controller.mjs";
import express from "express";
const router = express.Router();

router.get("/", getBookings);

export default router;
