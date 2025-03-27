import { NextResponse } from "next/server";
import Hero from "../../../lib/accounting-service/Hero";
import { connectToDatabase } from "../../../models/mongodb";

// Force dynamic rendering to prevent caching
export const dynamic = "force-dynamic";

// GET: Fetch hero data
export async function GET() {
  try {
    await connectToDatabase();
    const heroData = await Hero.findOne();
    return NextResponse.json(heroData || {});
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

// PUT: Update hero data
export async function PUT(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();
    let heroData = await Hero.findOne();

    if (!heroData) {
      heroData = new Hero(body);
    } else {
      Object.assign(heroData, body);
    }

    await heroData.save();

    return NextResponse.json({ message: "Updated successfully", heroData });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update data" },
      { status: 500 }
    );
  }
}
