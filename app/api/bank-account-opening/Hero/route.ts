import { NextResponse } from "next/server";
import Header from "../../../lib/bank-account-opening/Hero";
import { connectToDatabase } from "../../../models/mongodb";

// GET: Fetch Header data
export async function GET() {
  try {
    await connectToDatabase();
    const HeroData = await Header.findOne();
    return NextResponse.json(HeroData || {});
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

// PUT: Update Header data
export async function PUT(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();
    let HeroData = await Header.findOne();

    if (!HeroData) {
      HeroData = new Header(body);
    } else {
      Object.assign(HeroData, body);
    }

    await HeroData.save();

    return NextResponse.json({ message: "Updated successfully", HeroData });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update data" },
      { status: 500 }
    );
  }
}
