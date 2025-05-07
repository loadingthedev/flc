import { connectToDatabase } from "@/app/models/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import MailManagementBusiness from "../../../lib/mail-management/business";

// GET: Fetch the Mail Management data
export async function GET() {
  try {
    await connectToDatabase();
    const mailManagementData = await MailManagementBusiness.findOne();
    return NextResponse.json({ MainManagementBusiness: mailManagementData });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    await connectToDatabase();

    const { sections } = req.body; // assuming sections is an array of sections

    try {
      // Save new business content
      const newContent = new MailManagementBusiness({
        sections,
      });

      const savedContent = await newContent.save();
      return res.status(201).json(savedContent);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to save content" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

// PUT: Update a section (title or paragraphs)
export async function handlePut(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "PUT") {
    await connectToDatabase();

    const { id, sectionId, updatedData } = req.body; // sectionId to identify which section to update, updatedData contains the updated values

    try {
      const content = await MailManagementBusiness.findById(id);

      if (!content) {
        return res.status(404).json({ error: "Content not found" });
      }

      // Find the section to update
      const section = content.sections.id(sectionId);
      if (!section) {
        return res.status(404).json({ error: "Section not found" });
      }

      // Update the section
      section.title = updatedData.title || section.title;
      section.paragraphs = updatedData.paragraphs || section.paragraphs;

      await content.save();

      return res.status(200).json(content);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to update content" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json(
      { error: "Failed to delete section" },
      { status: 500 }
    );
  }
}
