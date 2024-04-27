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
  bookedBy: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export default model("Event", eventSchema);

// import { required } from "joi";
// import mongoose, { Schema, model } from "mongoose";

// const Event = model(
//   "Events",
//   new Schema({
//     title: {
//       type: String,
//       maxlength: 255,
//       required: true,
//     },
//     date: {
//       type: Date,
//       required: true,
//     },
//     location: {
//       type: String,
//       required: true,
//     },
//     capacity: {
//       type: { Number, default: 10 },
//     },
//     bookings: [{
//         type: mongoose.
//     }]
//   })
// );
