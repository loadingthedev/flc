import { connectToDatabase } from "@/app/models/mongodb";
import { NextResponse } from "next/server";
import HealthInsuranceheader from "../../../lib/health-insurance/header";

export const dynamic = "force-dynamic";

// GET: Fetch one record
export async function GET() {
  try {
    await connectToDatabase();
    const healthInsuranceheader = await HealthInsuranceheader.findOne();
    return NextResponse.json({ healthInsuranceheader });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

// POST: Add new record
export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const newData = await HealthInsuranceheader.create(body);
    return NextResponse.json(newData, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create data" },
      { status: 500 }
    );
  }
}

// PUT: Update existing record
export async function PUT(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const updatedData = await HealthInsuranceheader.findOneAndUpdate(
      {}, // Assuming only one document
      body,
      { new: true }
    );

    if (!updatedData) {
      return NextResponse.json(
        { error: "No document found to update" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedData);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update data" },
      { status: 500 }
    );
  }
}

// PATCH: Add a new service to the services array
export async function PATCH(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const updatedDoc = await HealthInsuranceheader.findOneAndUpdate(
      {},
      { $push: { services: body } },
      { new: true }
    );

    if (!updatedDoc) {
      return NextResponse.json(
        { error: "No document found to update" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Service added successfully", updatedDoc },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add service" },
      { status: 500 }
    );
  }
}

// DELETE: Delete all data
export async function DELETE() {
  try {
    await connectToDatabase();
    const deleted = await HealthInsuranceheader.deleteMany(); // or deleteOne() if just one
    return NextResponse.json({ message: "Deleted successfully", deleted });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete data" },
      { status: 500 }
    );
  }
}
