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
});

export default model("Booking", bookingSchema);
