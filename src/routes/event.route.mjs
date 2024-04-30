import express from "express";
const router = express.Router();
import { getAllEvents } from "../controllers/event.controller.mjs";

router.get("/", getAllEvents);

export default router;
