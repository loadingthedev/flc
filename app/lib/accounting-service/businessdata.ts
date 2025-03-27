import { Document, model, models, Schema } from "mongoose";

interface Section {
  id: string;
  title: string;
  content: string[];
}

interface AccountingService extends Document {
  title: string;
  content: string[];
  sections: Section[];
}

const SectionSchema = new Schema<Section>({
  id: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: [String], required: true },
});

const AccountingServiceSchema = new Schema<AccountingService>({
  title: { type: String, required: true },
  content: { type: [String], required: true },
  sections: { type: [SectionSchema], required: true },
});

export default models.AccountingService ||
  model<AccountingService>("AccountingService", AccountingServiceSchema);
