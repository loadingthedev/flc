import { connectToDatabase } from "@/app/models/mongodb";
import { NextResponse } from "next/server";
import HealthInsurancebusiness from "../../../lib/health-insurance/business";

export const dynamic = "force-dynamic";

// GET: Fetch one record
export async function GET() {
  try {
    await connectToDatabase();
    const healthInsurancebusiness = await HealthInsurancebusiness.findOne();
    return NextResponse.json({ healthInsurancebusiness });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

// POST: Add a new record
export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const newHealthInsuranceData = await req.json();
    const newRecord = new HealthInsurancebusiness(newHealthInsuranceData);
    await newRecord.save();
    return NextResponse.json({ newRecord }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add data" }, { status: 500 });
  }
}

// PUT: Update an existing record
export async function PUT(req: Request) {
  try {
    await connectToDatabase();
    const updatedData = await req.json();
    const { _id, ...updateFields } = updatedData;
    const updatedRecord = await HealthInsurancebusiness.findByIdAndUpdate(
      _id,
      updateFields,
      { new: true }
    );
    return NextResponse.json({ updatedRecord });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update data" },
      { status: 500 }
    );
  }
}

// DELETE: Delete a record
export async function DELETE(req: Request) {
  try {
    await connectToDatabase();
    const { id } = await req.json();
    await HealthInsurancebusiness.findByIdAndDelete(id);
    return NextResponse.json({ message: "Record deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete data" },
      { status: 500 }
    );
  }
}
