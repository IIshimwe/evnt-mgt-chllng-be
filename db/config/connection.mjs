import mongoose from "mongoose";

export const dbConnection = mongoose
  .connect("mongodb://localhost/etite")
  .then(() => console.log("Database connected successfully..."))
  .catch((err) => console.log(err.message));
