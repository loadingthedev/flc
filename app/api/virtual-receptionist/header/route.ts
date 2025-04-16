import { connectToDatabase } from "@/app/models/mongodb";
import { NextResponse } from "next/server";
import { VirtualReceptionistheader } from "../../../lib/virtual-receptionist/header";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectToDatabase();
    const virtualReceptionistheader = await VirtualReceptionistheader.findOne();
    return NextResponse.json({ virtualReceptionistheader });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectToDatabase();
    const newHeader = await VirtualReceptionistheader.create(body);
    return NextResponse.json({ success: true, data: newHeader });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create header" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    await connectToDatabase();

    const existingHeader = await VirtualReceptionistheader.findOne();

    let updatedHeader;

    if (existingHeader) {
      updatedHeader = await VirtualReceptionistheader.findByIdAndUpdate(
        existingHeader._id,
        body,
        { new: true }
      );
    } else {
      updatedHeader = await VirtualReceptionistheader.create(body);
    }

    return NextResponse.json({ success: true, data: updatedHeader });
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json(
      { error: "Failed to update header" },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    await connectToDatabase();
    await VirtualReceptionistheader.deleteOne();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete header" },
      { status: 500 }
    );
  }
}
