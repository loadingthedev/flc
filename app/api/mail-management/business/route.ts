import { connectToDatabase } from "@/app/models/mongodb";
import { NextRequest, NextResponse } from "next/server";
import MailManagementBusiness from "../../../lib/mail-management/business";

// GET: Fetch the Mail Management data
export async function GET() {
  try {
    await connectToDatabase();
    const mailManagementData = await MailManagementBusiness.findOne();
    if (!mailManagementData) {
      return NextResponse.json({ error: "Data not found" }, { status: 404 });
    }
    return NextResponse.json({ mailManagementData }, { status: 200 });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

// POST: Add new Mail Management content
export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const { sections } = await req.json(); // Assuming sections is an array of sections

    const newContent = new MailManagementBusiness({ sections });
    const savedContent = await newContent.save();

    return NextResponse.json(savedContent, { status: 201 });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { error: "Failed to save content" },
      { status: 500 }
    );
  }
}

// PUT: Update a section (title or paragraphs)
export async function PUT(req: NextRequest) {
  try {
    await connectToDatabase();
    const { id, sectionId, updatedData } = await req.json();

    const content = await MailManagementBusiness.findById(id);
    if (!content) {
      return NextResponse.json({ error: "Content not found" }, { status: 404 });
    }

    // Find the section to update
    const section = content.sections.id(sectionId);
    if (!section) {
      return NextResponse.json({ error: "Section not found" }, { status: 404 });
    }

    // Update the section
    section.title = updatedData.title || section.title;
    section.paragraphs = updatedData.paragraphs || section.paragraphs;

    await content.save();

    return NextResponse.json(content, { status: 200 });
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json(
      { error: "Failed to update content" },
      { status: 500 }
    );
  }
}

// DELETE: Remove a section by its ID
export async function DELETE(req: NextRequest) {
  try {
    await connectToDatabase();
    const { sectionId } = await req.json();

    const doc = await MailManagementBusiness.findOne();
    if (!doc) {
      return NextResponse.json(
        { error: "Document not found" },
        { status: 404 }
      );
    }

    const section = doc.sections.id(sectionId);
    if (!section) {
      return NextResponse.json({ error: "Section not found" }, { status: 404 });
    }

    section.remove();
    await doc.save();

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json(
      { error: "Failed to delete section" },
      { status: 500 }
    );
  }
}
