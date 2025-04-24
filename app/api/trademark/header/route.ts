import { connectToDatabase } from "@/app/models/mongodb";
import { NextRequest, NextResponse } from "next/server";
import TradeMarkheader from "../../../lib/trademark/header";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectToDatabase();
    const trademarkheader = await TradeMarkheader.findOne();
    return NextResponse.json({ trademarkheader });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  await connectToDatabase();

  const id = req.nextUrl.searchParams.get("id");
  const body = await req.json();

  if (!id)
    return NextResponse.json(
      { success: false, message: "Missing ID" },
      { status: 400 }
    );

  const updated = await TradeMarkheader.findByIdAndUpdate(id, body, {
    new: true,
  });

  return NextResponse.json({ success: true, updated });
}
