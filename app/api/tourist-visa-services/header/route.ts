import { connectToDatabase } from "@/app/models/mongodb";
import { NextResponse } from "next/server";
import Touristvisaheader from "../../../lib/tourist-visa/header";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectToDatabase();
    const touristvisaheader = await Touristvisaheader.findOne();
    return NextResponse.json({ touristvisaheader });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const createdHeader = await Touristvisaheader.create(body);
    return NextResponse.json(createdHeader);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create data" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const updatedHeader = await Touristvisaheader.findOneAndUpdate({}, body, {
      new: true,
    });
    return NextResponse.json(updatedHeader);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update data" },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    await connectToDatabase();
    const deleted = await Touristvisaheader.deleteMany();
    return NextResponse.json({
      success: true,
      deletedCount: deleted.deletedCount,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete data" },
      { status: 500 }
    );
  }
}
