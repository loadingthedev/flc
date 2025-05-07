import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const RequirementSchema = new mongoose.Schema({
  category: { type: String, required: true },
  items: [{ type: String, required: true }],
});

const DataSchema = new mongoose.Schema({
  services: [ServiceSchema],
  requirements: [RequirementSchema],
});

export default mongoose.models.GoldenHeaderData ||
  mongoose.model("GoldenHeaderData", DataSchema);
