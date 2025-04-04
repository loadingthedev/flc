import mongoose, { Document, Schema } from "mongoose";

export interface IComplianceBusiness extends Document {
  title: string;
  description: string;
  sections: {
    title: string;
    content: string[];
    list?: string[];
  }[];
}

const ComplianceSchema = new Schema<IComplianceBusiness>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  sections: [
    {
      title: { type: String, required: true },
      content: { type: [String], required: true },
      list: { type: [String], required: false },
    },
  ],
});

export default mongoose.models.ComplianceBusiness ||
  mongoose.model<IComplianceBusiness>("ComplianceBusiness", ComplianceSchema);
