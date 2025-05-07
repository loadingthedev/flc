import mongoose from "mongoose";

const ParagraphSchema = new mongoose.Schema(
  {
    title: String,
    paragraphs: [String],
  },
  { _id: true }
); // Make sure the subdocument has an _id field

const BusinessContentSchema = new mongoose.Schema({
  sections: [ParagraphSchema], // Sections is an array of ParagraphSchema subdocuments
});

export default mongoose.models.MailManagementBusiness ||
  mongoose.model("MailManagementBusiness", BusinessContentSchema);
