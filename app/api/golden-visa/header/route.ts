import { NextResponse } from "next/server";
import GoldenHeaderData from "../../../lib/golden-visa/header";
import { connectToDatabase } from "../../../models/mongodb";

// GET method: Fetch the header data
export async function GET() {
  try {
    await connectToDatabase();
    const header = await GoldenHeaderData.findOne();

    if (!header) {
      return NextResponse.json(
        { error: "Header data not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(header, { status: 200 });
  } catch (error) {
    console.error("Error fetching header data:", error);
    return NextResponse.json(
      { error: "Error occurred while fetching the header data" },
      { status: 500 }
    );
  }
}

// PUT method: Update the header data
export async function PUT(req: Request) {
  try {
    await connectToDatabase();

    const updatedData = await req.json();
    const result = await GoldenHeaderData.findOneAndUpdate({}, updatedData, {
      upsert: true,
      new: true,
    });

    return NextResponse.json(
      { message: "Data updated successfully", data: result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating header data:", error);
    return NextResponse.json(
      { error: "Error occurred while updating the header data" },
      { status: 500 }
    );
  }
}
