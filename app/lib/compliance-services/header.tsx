import mongoose, { Document, Schema } from "mongoose";

interface ICompliance extends Document {
  intro: { type: String; required: true }; // Storing the intro text

  services: {
    title: string;
    description: string;
    icon: string;
  }[];
}

const ComplianceSchema = new Schema<ICompliance>({
  intro: { type: String, required: true }, // Storing the intro text
  services: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      icon: { type: String, required: true }, // Store icon name (e.g., "FiFolder")
    },
  ],
});

export default mongoose.models.Compliance ||
  mongoose.model<ICompliance>("Compliance", ComplianceSchema);
