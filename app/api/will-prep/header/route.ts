import { connectToDatabase } from "@/app/models/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Willheader from "../../../lib/will-preparation/header";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectToDatabase();
    const willheader = await Willheader.findOne();
    return NextResponse.json({ willheader });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  await connectToDatabase();
  const body = await req.json();
  const created = await Willheader.create(body);
  return NextResponse.json(created);
}

export async function PUT(req: NextRequest) {
  await connectToDatabase();
  const body = await req.json();
  const updated = await Willheader.findOneAndUpdate({}, body, {
    new: true,
    upsert: true,
  });
  return NextResponse.json(updated);
}

export async function DELETE() {
  await connectToDatabase();
  const deleted = await Willheader.deleteMany({});
  return NextResponse.json({ message: "Deleted", result: deleted });
}
