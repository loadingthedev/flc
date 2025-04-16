import mongoose from "mongoose";

const IndividualServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const VirtualReceptionistheaderSchema = new mongoose.Schema({
  intro: { type: String, required: true },
  heading: { type: String, required: true },
  services: { type: [IndividualServiceSchema], default: [] },
});

export const VirtualReceptionistheader =
  mongoose.models.VirtualReceptionistheader ||
  mongoose.model("VirtualReceptionistheader", VirtualReceptionistheaderSchema);
