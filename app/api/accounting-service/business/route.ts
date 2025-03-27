import { NextResponse } from "next/server";
import AccountingService from "../../../lib/accounting-service/businessdata";
import { connectToDatabase } from "../../../models/mongodb";

// Get accounting service data
export async function GET() {
  try {
    await connectToDatabase();
    const accountingService = await AccountingService.findOne();
    return NextResponse.json({ accountingService });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

// Create a new accounting service entry
export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const newAccountingService = await AccountingService.create(body);
    return NextResponse.json({ newAccountingService }, { status: 201 });
  } catch (error) {
    console.error("Error creating data:", error);
    return NextResponse.json(
      { error: "Failed to create data" },
      { status: 500 }
    );
  }
}

// Update accounting service data
export async function PUT(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const { id, ...updateData } = body;

    const updatedAccountingService = await AccountingService.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!updatedAccountingService) {
      return NextResponse.json({ error: "Data not found" }, { status: 404 });
    }

    return NextResponse.json({ updatedAccountingService });
  } catch (error) {
    console.error("Error updating data:", error);
    return NextResponse.json(
      { error: "Failed to update data" },
      { status: 500 }
    );
  }
}

// Delete accounting service data
export async function DELETE(request: Request) {
  try {
    await connectToDatabase();
    const { id } = await request.json();

    const deletedAccountingService =
      await AccountingService.findByIdAndDelete(id);
    if (!deletedAccountingService) {
      return NextResponse.json({ error: "Data not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error("Error deleting data:", error);
    return NextResponse.json(
      { error: "Failed to delete data" },
      { status: 500 }
    );
  }
}
