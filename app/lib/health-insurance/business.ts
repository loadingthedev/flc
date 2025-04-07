import { Document, model, models, Schema } from "mongoose";

interface Section {
  id: string;
  title: string;
  content: string[];
}

interface HealthInsuranceData extends Document {
  title: string;
  content: string[];
  sections: Section[];
}

const SectionSchema = new Schema<Section>({
  id: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: [String], required: true },
});

const HealthInsuranceSchema = new Schema<HealthInsuranceData>({
  title: { type: String, required: true },
  content: { type: [String], required: true },
  sections: { type: [SectionSchema], required: true },
});

export default models.HealthInsurancebusiness ||
  model<HealthInsuranceData>("HealthInsurancebusiness", HealthInsuranceSchema);
