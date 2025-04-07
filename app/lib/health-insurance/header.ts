// models/HealthInsurance.ts
import mongoose from "mongoose";

const featureSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});

const ctaSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const healthInsuranceSchema = new mongoose.Schema({
  intro: String,
  heading: String,
  features: [featureSchema],
  cta: ctaSchema,
});

const HealthInsurance =
  mongoose.models.HealthInsuranceheader ||
  mongoose.model("HealthInsuranceheader", healthInsuranceSchema);

export default HealthInsurance;
