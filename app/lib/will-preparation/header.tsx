import mongoose from "mongoose";

const WillSchema = new mongoose.Schema({
  intro: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  wills: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
  ],
});

export default mongoose.models.Willheader ||
  mongoose.model("Willheader", WillSchema);
