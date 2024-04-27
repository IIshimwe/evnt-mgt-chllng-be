import express from "express";
const router = express.Router();
import { createUser } from "../controllers/user.controller.mjs";

router.post("/", createUser);

export default router;
