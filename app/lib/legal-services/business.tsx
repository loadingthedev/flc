import mongoose from "mongoose";

const SectionSchema = new mongoose.Schema({
  heading: String,
  paragraphs: [String],
  list: [String],
});

const LegalServiceSchema = new mongoose.Schema({
  title: String,
  sections: [SectionSchema],
});

export const LegalServicebusiness =
  mongoose.models.LegalServicebusiness ||
  mongoose.model("LegalServicebusiness", LegalServiceSchema);
