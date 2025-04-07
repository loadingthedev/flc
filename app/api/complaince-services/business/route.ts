import { NextRequest, NextResponse } from "next/server";
import ComplianceBusiness from "../../../lib/compliance-services/business";
import { connectToDatabase } from "../../../models/mongodb";
export const dynamic = "force-dynamic";

export async function GET() {
  await connectToDatabase();
  try {
    const services = await ComplianceBusiness.find();
    return NextResponse.json(services, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}

// POST: Add new business compliance
export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const data = await req.json();
    const newCompliance = new ComplianceBusiness(data);
    await newCompliance.save();
    return NextResponse.json(
      { message: "Compliance data saved" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Error saving data" }, { status: 500 });
  }
}

// PUT: Update compliance by ID
export async function PUT(req: NextRequest) {
  await connectToDatabase();
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop(); // get the ID from URL
    const data = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID not provided" }, { status: 400 });
    }

    await ComplianceBusiness.findByIdAndUpdate(id, data);
    return NextResponse.json(
      { message: "Compliance updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating compliance" },
      { status: 500 }
    );
  }
}

// DELETE: Delete compliance by ID
export async function DELETE(req: NextRequest) {
  await connectToDatabase();
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop(); // get the ID from URL

    if (!id) {
      return NextResponse.json({ error: "ID not provided" }, { status: 400 });
    }

    await ComplianceBusiness.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Compliance deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting compliance" },
      { status: 500 }
    );
  }
}
