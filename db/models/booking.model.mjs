import { Schema, model } from "mongoose";

const bookingSchema = new Schema({
  userId: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  eventId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
  numberOfTickets: {
    type: Number,
    max: 10,
  },
  bookedDate: {
    type: Date,
    default: Date.now,
  },
});

export default model("Booking", bookingSchema);
