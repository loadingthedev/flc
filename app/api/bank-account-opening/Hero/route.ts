import mongoose from "mongoose"; // Import mongoose for ObjectId
import { NextResponse } from "next/server";
import Hero from "../../../lib/accounting-service/Hero";
import { connectToDatabase } from "../../../models/mongodb";

export const dynamic = "force-dynamic";

const HERO_ID = "67e82e84766394f0465b8b15";

export async function GET() {
  try {
    await connectToDatabase();

    // Convert string ID to ObjectId
    const heroData = await Hero.findById(new mongoose.Types.ObjectId(HERO_ID));

    if (!heroData) {
      return NextResponse.json({ error: "Hero not found" }, { status: 404 });
    }

    return NextResponse.json(heroData);
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();

    // Convert string ID to ObjectId
    let heroData = await Hero.findById(new mongoose.Types.ObjectId(HERO_ID));

    if (!heroData) {
      return NextResponse.json({ error: "Hero not found" }, { status: 404 });
    }

    Object.assign(heroData, body);
    await heroData.save();

    return NextResponse.json({ message: "Updated successfully", heroData });
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json(
      { error: "Failed to update data" },
      { status: 500 }
    );
  }
}
