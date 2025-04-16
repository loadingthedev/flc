import mongoose, { Document, Schema } from "mongoose";

interface Service {
  title: string;
  description: string;
}

interface MailManagement extends Document {
  intro: {
    text: string;
  };
  heading: string;
  services: Service[];
}

const serviceSchema = new Schema<Service>({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const mailManagementSchema = new Schema<MailManagement>({
  intro: {
    text: { type: String, required: true },
  },
  heading: { type: String, required: true },
  services: { type: [serviceSchema], required: true },
});

const MailManagementheader =
  mongoose.models.MailManagementheader ||
  mongoose.model<MailManagement>("MailManagementheader", mailManagementSchema);

export default MailManagementheader;
