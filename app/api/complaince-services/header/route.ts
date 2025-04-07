import { NextResponse } from "next/server";
import Compliance from "../../../lib/compliance-services/header";
import { connectToDatabase } from "../../../models/mongodb";
export const dynamic = "force-dynamic";

// Fetch all compliance services
export async function GET() {
  await connectToDatabase();

  try {
    const services = await Compliance.find();
    return NextResponse.json(services, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}

// Add a new compliance service
export async function POST(req: Request) {
  await connectToDatabase();

  try {
    const body = await req.json();
    const newService = new Compliance(body);
    await newService.save();
    return NextResponse.json(
      { message: "Service added successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error adding service" },
      { status: 500 }
    );
  }
}

// Update compliance services
export async function PUT(req: Request) {
  await connectToDatabase();

  try {
    const body = await req.json();
    const { _id, intro, services } = body;

    if (!_id) {
      return NextResponse.json(
        { error: "Missing document ID" },
        { status: 400 }
      );
    }

    const updatedService = await Compliance.findByIdAndUpdate(
      _id,
      { intro, services },
      { new: true }
    );

    if (!updatedService) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Service updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating service" },
      { status: 500 }
    );
  }
}
