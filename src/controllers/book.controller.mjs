import Booking from "../../db/models/booking.model.mjs";
import { User } from "../../db/models/user.model.mjs";
import Event from "../../db/models/event.model.mjs";

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBooking = async (req, res) => {
  const user = await User.findById(req.body.user);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const event = await Event.findById(req.body.event);
  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }
  const booking = new Booking({
    user: user._id,
    event: event._id,
  });

  try {
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
