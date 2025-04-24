import mongoose from "mongoose";

const TradeMarkheaderSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  assets: [{ type: String }],
  services: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
    },
  ],
});

export default mongoose.models.TradeMarkheader ||
  mongoose.model("TradeMarkheader", TradeMarkheaderSchema);
