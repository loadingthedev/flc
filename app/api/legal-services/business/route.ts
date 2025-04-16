import { connectToDatabase } from "@/app/models/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { LegalServicebusiness } from "../../../lib/legal-services/business";

export const dynamic = "force-dynamic";

// GET: Fetch one record
export async function GET() {
  try {
    await connectToDatabase();
    const legalservicebusiness = await LegalServicebusiness.findOne();
    return NextResponse.json({ legalservicebusiness });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

// POST: Create new
export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const created = await LegalServicebusiness.create(body);
    return NextResponse.json(created);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create service" },
      { status: 500 }
    );
  }
}

// PUT: Update existing
export async function PUT(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json();

    if (!body._id) {
      return NextResponse.json({ error: "ID required" }, { status: 400 });
    }

    const updated = await LegalServicebusiness.findByIdAndUpdate(
      body._id,
      body,
      { new: true }
    );

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update service" },
      { status: 500 }
    );
  }
}

// DELETE: Remove
export async function DELETE(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json();
    await LegalServicebusiness.findByIdAndDelete(body._id);
    return NextResponse.json({ message: "Deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete service" },
      { status: 500 }
    );
  }
}
