import { connectToDatabase } from "@/app/models/mongodb";
import { NextResponse } from "next/server";
import Virtualreceptionistbusiness from "../../../lib/virtual-receptionist/business";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectToDatabase();
    const virtualreceptionistbusiness =
      await Virtualreceptionistbusiness.findOne();
    return NextResponse.json({ virtualreceptionistbusiness });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
