import Event from "../../db/models/event.model.mjs";
import { validateEvent } from "../helpers/validations.mjs";

export const getAllEvents = async (req, res) => {
  const events = await Event.find();
  res.status(200).json({ events, message: "Get all events" });
};

export const createEvent = async (req, res) => {
  const { error } = validateEvent(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const event = await Event.create(req.body);
  res.status(200).json({ event, message: "Create event" });
};
