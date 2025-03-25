import { NextResponse } from "next/server";
import { HeaderContent, Service } from "../../../lib/accounting-service/header";
import { connectToDatabase } from "../../../models/mongodb";

// Connect to MongoDB
export async function GET() {
  try {
    await connectToDatabase();
    const headerContent = await HeaderContent.findOne();
    const services = await Service.find();
    return NextResponse.json({ headerContent, services });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

// POST request to add a new service
export async function POST(req: Request) {
  try {
    const { title, description, icon } = await req.json();
    await connectToDatabase();
    const newService = new Service({ title, description, icon });
    await newService.save();
    return NextResponse.json(newService, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add service" },
      { status: 500 }
    );
  }
}

// PUT request to update a service and  header content
export async function PUT(req: Request) {
  try {
    const { text, id, title, description, icon } = await req.json();
    await connectToDatabase();

    const headerContent = await HeaderContent.findOneAndUpdate(
      {},
      { text },
      { new: true, upsert: true }
    );

    const updatedService = await Service.findByIdAndUpdate(
      id,
      { title, description, icon },
      { new: true }
    );

    if (!updatedService) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Header content updated successfully",
      headerContent,
      updatedService,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update service" },
      { status: 500 }
    );
  }
}

// DELETE request to remove a service
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await connectToDatabase();

    const deletedService = await Service.findByIdAndDelete(id);

    if (!deletedService) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Service deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete service" },
      { status: 500 }
    );
  }
}
