import mongoose from "mongoose";

const IndividualServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const LegalServiceHeaderSchema = new mongoose.Schema({
  intro: { type: String, required: true },
  heading: { type: String, required: true },
  services: { type: [IndividualServiceSchema], default: [] },
});

export const LegalServiceheader =
  mongoose.models.LegalServiceheader ||
  mongoose.model("LegalServiceheader", LegalServiceHeaderSchema);
