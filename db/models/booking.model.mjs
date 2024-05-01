import { Schema, model } from "mongoose";

const bookingSchema = new Schema({
  bookingId: {
    type: String,
    required: true,
  },
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
    type: number,
    max: 10,
  },
  bookedDate: {
    type: Date,
    default: Date.now,
  },
});

export default model("Booking", bookingSchema);
