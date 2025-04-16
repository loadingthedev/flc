import { connectToDatabase } from "@/app/models/mongodb";
import { NextResponse } from "next/server";
import MainManagementBusiness from "../../../lib/mail-management/business";
// GET: Fetch the Mail Management data
export async function GET() {
  try {
    await connectToDatabase();
    const mailManagementData = await MainManagementBusiness.findOne();
    return NextResponse.json({ MainManagementBusiness: mailManagementData });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
