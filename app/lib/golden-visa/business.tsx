import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema({
  type: { type: String, required: true }, // e.g., "paragraph", "header"
  level: { type: Number }, // For headers (e.g., h1, h2)
  text: { type: String, required: true },
});

const BusinessSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: [ContentSchema],
});

export default mongoose.models.GoldenVisaBusiness ||
  mongoose.model("GoldenVisaBusiness", BusinessSchema);
