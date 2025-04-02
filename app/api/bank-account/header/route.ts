import { NextResponse } from "next/server";
import BankHeaderData from "../../../lib/bank-account/header";
import { connectToDatabase } from "../../../models/mongodb";
export const dynamic = "force-dynamic";

// Connect to MongoDB
export async function GET() {
  try {
    await connectToDatabase();
    const bankHeaderData = await BankHeaderData.findOne();
    return NextResponse.json({ bankHeaderData });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

// POST request to add new bank header data
export async function POST(req: Request) {
  try {
    const { introText, mustKnow, services } = await req.json();
    await connectToDatabase();
    const newBankHeaderData = new BankHeaderData({
      introText,
      mustKnow,
      services,
    });
    await newBankHeaderData.save();
    return NextResponse.json(newBankHeaderData, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add bank header data" },
      { status: 500 }
    );
  }
}

// PUT request to update bank header data
export async function PUT(req: Request) {
  try {
    const { id, introText, mustKnow, services } = await req.json();
    await connectToDatabase();

    const updatedBankHeaderData = await BankHeaderData.findByIdAndUpdate(
      id,
      { introText, mustKnow, services },
      { new: true }
    );

    if (!updatedBankHeaderData) {
      return NextResponse.json(
        { error: "Bank header data not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Bank header data updated successfully",
      updatedBankHeaderData,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update bank header data" },
      { status: 500 }
    );
  }
}

// DELETE request to remove bank header data
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await connectToDatabase();

    const deletedBankHeaderData = await BankHeaderData.findByIdAndDelete(id);

    if (!deletedBankHeaderData) {
      return NextResponse.json(
        { error: "Bank header data not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Bank header data deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete bank header data" },
      { status: 500 }
    );
  }
}
