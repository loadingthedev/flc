import mongoose from "mongoose";

const ParagraphSchema = new mongoose.Schema({
  title: String,
  paragraphs: [String],
});

const BusinessContentSchema = new mongoose.Schema({
  sections: [ParagraphSchema],
});

export default mongoose.models.MailManagementBusiness ||
  mongoose.model("MailManagementBusiness", BusinessContentSchema);
