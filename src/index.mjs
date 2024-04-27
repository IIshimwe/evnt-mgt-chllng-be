import express from "express";
import "dotenv/config";
import { dbConnection } from "../db/config/connection.mjs";
import users from "./routes/user.route.mjs";
const app = express();

app.use(express.json());
app.use("/api/v1/users", users);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening to PORT: ${PORT}`));
