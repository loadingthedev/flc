import { NextResponse } from "next/server";
import Business from "../../../lib/bank-account/businessdata";
import { connectToDatabase } from "../../../models/mongodb";

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

// Update accounting service data
interface RequestWithJson {
  json: () => Promise<Record<string, unknown>>;
}

interface BusinessData {
  [key: string]: unknown;
}

export async function PUT(req: RequestWithJson): Promise<Response> {
  try {
    await connectToDatabase();
    const data: Record<string, unknown> = await req.json();
    const updatedBusinessData: BusinessData | null =
      await Business.findOneAndUpdate({}, data, { new: true });
    if (!updatedBusinessData) {
      return NextResponse.json({ error: "No data found" }, { status: 404 });
    }
    return NextResponse.json({ businessData: updatedBusinessData });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

// Delete accounting service data
export async function DELETE() {
  try {
    await connectToDatabase();
    const deletedBusinessData = await Business.findOneAndDelete();
    if (!deletedBusinessData) {
      return NextResponse.json({ error: "No data found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

// Add a new section to the business data
export async function POST(req: RequestWithJson): Promise<Response> {
  try {
    await connectToDatabase();
    const newSection: Record<string, unknown> = await req.json();
    const businessData = await Business.findOne();
    if (!businessData) {
      return NextResponse.json({ error: "No data found" }, { status: 404 });
    }
    businessData.sections.push(newSection);
    await businessData.save();
    return NextResponse.json({ businessData });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

// Delete a specific section from the business data
export async function DELETESection(req: RequestWithJson): Promise<Response> {
  try {
    await connectToDatabase();
    const { sectionId } = await req.json();
    const businessData = await Business.findOne();
    if (!businessData) {
      return NextResponse.json({ error: "No data found" }, { status: 404 });
    }
    businessData.sections = businessData.sections.filter(
      (section: { _id: string }) => section._id !== sectionId
    );
    await businessData.save();
    return NextResponse.json({ businessData });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
