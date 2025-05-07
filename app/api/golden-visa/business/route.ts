import { connectToDatabase } from "@/app/models/mongodb";
import { NextResponse } from "next/server";
import GoldenVisaBusiness from "../../../lib/golden-visa/business";

export const dynamic = "force-dynamic";

// GET: Fetch one record
export async function GET() {
  try {
    await connectToDatabase();
    const goldenVisaBusiness = await GoldenVisaBusiness.findOne();
    return NextResponse.json({ goldenVisaBusiness });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

// POST: Add new data
export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const newData = await req.json();
    const createdData = await GoldenVisaBusiness.create(newData);
    return NextResponse.json({ createdData });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create new data" },
      { status: 500 }
    );
  }
}

// PUT: Update existing data
export async function PUT(req: Request) {
  try {
    await connectToDatabase();
    const { id, updates } = await req.json();
    const updatedData = await GoldenVisaBusiness.findByIdAndUpdate(
      id,
      updates,
      { new: true }
    );
    return NextResponse.json({ updatedData });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update data" },
      { status: 500 }
    );
  }
}

// DELETE: Delete existing data
export async function DELETE(req: Request) {
  try {
    await connectToDatabase();
    const { id } = await req.json();
    await GoldenVisaBusiness.findByIdAndDelete(id);
    return NextResponse.json({ message: "Data deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete data" },
      { status: 500 }
    );
  }
}
