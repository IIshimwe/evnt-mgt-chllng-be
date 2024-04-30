import moment from "moment";
import _ from "lodash";
import Event from "../../db/models/event.model.mjs";
import { validateEvent } from "../helpers/validations.mjs";

export const getAllEvents = async (req, res) => {
  const events = await Event.find();
  res.status(200).json({ events, message: "Get all events" });
};

export const createEvent = async (req, res) => {
  const { error } = validateEvent(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let event = await Event.findOne({ title: req.body.title });
  if (event)
    return res.status(400).send("Event with the given title already exists");

  event = await Event.create(req.body);
  res.status(200).json({ event, message: "Create event" });
};

export const getSingleEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) return res.status(404).send("No such event found.");

  res.status(200).send(event);
};

export const updateEvent = async (req, res) => {
  const { error } = validateEvent(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ event, message: "Update event" });
};

export const deleteEvent = async (req, res) => {
  const event = await Event.findByIdAndDelete(req.params.id);
  res.status(200).json({ event, message: "Delete event" });
};
