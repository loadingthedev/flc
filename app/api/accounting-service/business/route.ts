import { NextResponse } from "next/server";
import Accounting from "../../../lib/accounting-service/businessdata";
import { connectToDatabase } from "../../../models/mongodb";

// Get accounting service data
export async function GET() {
  try {
    await connectToDatabase();
    const accounting = await Accounting.findOne().lean();
    if (!accounting) {
      return NextResponse.json({ error: "No data found" }, { status: 404 });
    }
    return NextResponse.json({ accounting });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

// Create a new accounting service entry
export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    if (!body.title || !body.content || !body.sections) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newAccountingService = await Accounting.create(body);
    return NextResponse.json({ newAccountingService }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

// Update accounting service data
export async function PUT(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const { _id, ...updateData } = body;

    if (!_id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const updatedAccountingService = await Accounting.findByIdAndUpdate(
      _id,
      updateData,
      { new: true }
    ).lean();

    if (!updatedAccountingService) {
      return NextResponse.json({ error: "Data not found" }, { status: 404 });
    }

    return NextResponse.json({ updatedAccountingService });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

// Delete accounting service data
export async function DELETE(request: Request) {
  try {
    await connectToDatabase();
    const { _id } = await request.json();

    if (!_id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const deletedAccountingService = await Accounting.findByIdAndDelete(_id);
    if (!deletedAccountingService) {
      return NextResponse.json({ error: "Data not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
