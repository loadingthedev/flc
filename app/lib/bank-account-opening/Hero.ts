import mongoose, { Document, Schema } from "mongoose";

interface Hero extends Document {
  title?: string;
  description?: string;
  subtitle?: string;
  buttonText?: string;
}

const HeroSchema = new Schema<Hero>({
  title: { type: String, required: false },
  description: { type: String, required: false },
  subtitle: { type: String, required: false },
  buttonText: { type: String, required: false },
});

const Hero = mongoose.models.Hero || mongoose.model<Hero>("Hero", HeroSchema);

export default Hero;
