import { Document, model, models, Schema, Types } from "mongoose";

interface Section {
  _id: Types.ObjectId;
  title: string;
  content: string[];
}

interface Accounting extends Document {
  title: string;
  content: string[];
  sections: Section[];
}

const SectionSchema = new Schema<Section>({
  // _id: { type: Schema.Types.ObjectId, auto: true },
  title: { type: String, required: true },
  content: { type: [String], required: true },
});

const AccountingSchema = new Schema<Accounting>({
  title: { type: String, required: true },
  content: { type: [String], required: true },
  sections: { type: [SectionSchema], required: true },
});

export default models.Accounting ||
  model<Accounting>("Accounting", AccountingSchema);
