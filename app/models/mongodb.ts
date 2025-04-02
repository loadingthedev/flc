import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

// Prevent multiple connections in development
let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  if (cached.conn) return cached.conn; // Return existing connection

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in .env.local");
  }

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "flc",
    });

  cached.conn = await cached.promise;
  return cached.conn;
}
