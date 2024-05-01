import express from "express";
import "dotenv/config";
import { dbConnection } from "../db/config/connection.mjs";
import users from "./routes/user.route.mjs";
import auth from "./routes/auth.route.mjs";
import events from "./routes/event.route.mjs";
import booking from "./routes/booking.route.mjs";
const app = express();

app.use(express.json());
app.use("/api/v1/auth", auth);
app.use("/api/v1/users", users);
app.use("/api/v1/events", events);
app.use("/api/v1/bookings", booking);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening to PORT: ${PORT}`));
