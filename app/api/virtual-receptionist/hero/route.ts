import { NextResponse } from "next/server";
import Hero from "../../../lib/shared-hero/Hero";
import { connectToDatabase } from "../../../models/mongodb";

export const dynamic = "force-dynamic";

const HERO_ID = "67fd6851c7c44c7b1e7cddbc";

export async function GET() {
  try {
    await connectToDatabase();
    const heroData = await Hero.findById(HERO_ID);

    if (!heroData) {
      return NextResponse.json({ error: "Hero not found" }, { status: 404 });
    }

    return NextResponse.json(heroData);
  } catch (error) {
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
    let heroData = await Hero.findById(HERO_ID);

    if (!heroData) {
      return NextResponse.json({ error: "Hero not found" }, { status: 404 });
    }

    Object.assign(heroData, body);
    await heroData.save();

    return NextResponse.json({ message: "Updated successfully", heroData });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update data" },
      { status: 500 }
    );
  }
}
