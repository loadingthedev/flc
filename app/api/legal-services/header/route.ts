import { connectToDatabase } from "@/app/models/mongodb";
import { NextResponse } from "next/server";
import { LegalServiceheader } from "../../../lib/legal-services/header";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectToDatabase();
    const legalServiceheader = await LegalServiceheader.findOne();
    return NextResponse.json({ legalServiceheader });
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
    const newHeader = await LegalServiceheader.create(body);
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

    const existingHeader = await LegalServiceheader.findOne();

    let updatedHeader;

    if (existingHeader) {
      updatedHeader = await LegalServiceheader.findByIdAndUpdate(
        existingHeader._id,
        body,
        { new: true }
      );
    } else {
      updatedHeader = await LegalServiceheader.create(body);
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
    await LegalServiceheader.deleteOne(); // deletes first found document
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete header" },
      { status: 500 }
    );
  }
}
