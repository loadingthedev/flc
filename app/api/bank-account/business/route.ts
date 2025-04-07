import { NextResponse } from "next/server";
import Business from "../../../lib/bank-account/businessdata";
import { connectToDatabase } from "../../../models/mongodb";
export const dynamic = "force-dynamic";
// Get accounting service data
export async function GET() {
  try {
    await connectToDatabase();
    const businessData = await Business.findOne();
    if (!businessData) {
      return NextResponse.json({ error: "No data found" }, { status: 404 });
    }
    return NextResponse.json({ businessData });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

//rest services for admin panel is not implemented yet
