import { Schema, model, models } from "mongoose";

const ServiceSchema = new Schema({
  healthInsurance: {
    description: { type: String, required: true },
  },
  touristVisaServices: {
    title: { type: String, required: true },
    services: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
        points: { type: [String], default: [] },
        image: { type: String, required: true },
      },
    ],
  },
});

export default models.Touristvisaheader ||
  model("Touristvisaheader", ServiceSchema);
