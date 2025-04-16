import mongoose from "mongoose";

const SectionSchema = new mongoose.Schema({
  heading: String,
  content: [String],
  list: [String],
  subsections: [
    {
      subheading: String,
      content: [String],
    },
  ],
});

const ArticleSchema = new mongoose.Schema({
  title: String,
  sections: [SectionSchema],
});

export default mongoose.models.Virtualreceptionistbusiness ||
  mongoose.model("Virtualreceptionistbusiness", ArticleSchema);
