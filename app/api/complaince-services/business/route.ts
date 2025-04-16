import { connectToDatabase } from "@/app/models/mongodb";
import { NextResponse } from "next/server";
import ComplianceServicesBusiness from "../../../lib/compliance-services/business";

export const dynamic = "force-dynamic";

// GET: Fetch one record
export async function GET() {
  try {
    await connectToDatabase();
    const complianceServicesBusiness =
      await ComplianceServicesBusiness.findOne();
    return NextResponse.json({ complianceServicesBusiness });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
