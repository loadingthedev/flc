import { connectToDatabase } from "@/app/models/mongodb";
import { NextResponse } from "next/server";
import MailManagementheader from "../../../lib/mail-management/header";

// GET: Fetch the Mail Management data
export async function GET() {
  try {
    await connectToDatabase();
    const mailManagementData = await MailManagementheader.findOne();
    return NextResponse.json({ MailManagementheader: mailManagementData });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

// PUT: Update the Mail Management data
export async function PUT(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const result = await MailManagementheader.replaceOne({}, body, {
      upsert: true,
    });

    const updated = await MailManagementheader.findOne(); // Fetch updated doc
    return NextResponse.json({ MailManagementheader: updated });
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json(
      { error: "Failed to update data" },
      { status: 500 }
    );
  }
}
