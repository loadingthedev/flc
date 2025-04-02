import mongoose, { Model, Schema } from "mongoose";

interface IServiceInfo {
  title: string;
  description: string;
  icon: string;
}

interface IHeaderData {
  introText: string;
  mustKnow: string[];
  services: IServiceInfo[];
}

const ServiceInfoSchema: Schema<IServiceInfo> = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
});

const HeaderDataSchema: Schema<IHeaderData> = new Schema({
  introText: { type: String, required: true },
  mustKnow: { type: [String], required: true },
  services: { type: [ServiceInfoSchema], required: true },
});

const BankHeaderData: Model<IHeaderData> =
  mongoose.models.BankHeaderData ||
  mongoose.model<IHeaderData>("BankHeaderData", HeaderDataSchema);

export default BankHeaderData;
