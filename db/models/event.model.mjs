import { Schema, model } from "mongoose";

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  slots: {
    type: Number,
    default: 8,
  },
});

export default model("Event", eventSchema);
