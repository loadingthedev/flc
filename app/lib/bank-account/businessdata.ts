import mongoose, { Document, Schema } from "mongoose";

interface IBusiness extends Document {
  title: string;
  content: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
}

const BusinessSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  sections: [
    {
      heading: { type: String, required: true },
      paragraphs: [{ type: String, required: true }],
    },
  ],
});

export default mongoose.models.Business ||
  mongoose.model<IBusiness>("Business", BusinessSchema);
