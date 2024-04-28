import { auth } from "../controllers/auth.controller.mjs";
import express from "express";
const router = express.Router();

router.post("/", auth);
export default router;
