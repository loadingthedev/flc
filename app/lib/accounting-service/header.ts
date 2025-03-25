import mongoose, { Document, Schema } from "mongoose";

// Define TypeScript interfaces for the schemas
interface IHeaderContent extends Document {
  text: string;
}

interface IService extends Document {
  _id: mongoose.Types.ObjectId;
  title: string;
  description: string;
  icon: string;
}

// Define Mongoose schemas
const headerContentSchema: Schema = new Schema({
  text: { type: String, required: true },
});

const serviceSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
});

// Define Mongoose models
const HeaderContent =
  mongoose.models.HeaderContent ||
  mongoose.model<IHeaderContent>("HeaderContent", headerContentSchema);
const Service =
  mongoose.models.Service || mongoose.model<IService>("Service", serviceSchema);

export { HeaderContent, Service };
