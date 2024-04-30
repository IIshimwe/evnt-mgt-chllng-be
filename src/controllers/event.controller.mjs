import Event from "../../db/models/event.model.mjs";

export const getAllEvents = async (req, res) => {
  const events = await Event.find();
  res.status(200).json({ events, message: "Get all events" });
};
