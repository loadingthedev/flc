import { NextResponse } from "next/server";

// Define types
interface Section {
  id: string;
  title: string;
  content: string[];
}

interface BusinessData {
  title: string;
  content: string[];
  sections: Section[];
}

// Dummy data
let businessData: BusinessData = {
  title: "The Ultimate Guide to Business Accounting Services in Dubai",
  content: [
    "",
    "Are your accounting practices compliant with UAE accounting standards     How accurate are your business financial records and statement Are your accounting practices compliant with UAE accounting standards? Do you file your VAT and other taxes correctly?",
    "What are the key financial metrics you should be tracking?",
    "How can you optimize your tax liabilities?",
    "What are the benefits of outsourcing your accounting services?",
  ],
  sections: [
    {
      id: "benefits",
      title: "Accounting and Bookkeeping Policies in Dubai",
      content: [
        "The UAE has its own set of GAAP accounting principles.",
        "Businesses must maintain accurate and up-to-date financial records.",
        "Compliance with local tax regulations is mandatory.",
        "Regular audits are required to ensure financial accuracy.",
      ],
    },
    {
      id: "services",
      title: "Types of Accounting Services Available",
      content: [
        "Bookkeeping and financial reporting.",
        "Tax preparation and planning.",
        "Payroll processing and management.",
        "Financial consulting and advisory services.",
      ],
    },
    {
      id: "advantages",
      title: "Advantages of Professional Accounting Services",
      content: [
        "Improved financial accuracy and compliance.",
        "Time and cost savings.",
        "Access to expert financial advice.",
        "Enhanced decision-making capabilities.",
      ],
    },
    {
      id: "faq",
      title: "Frequently Asked Questions",
      content: [
        "What is the cost of accounting services in Dubai?",
        "How do I choose the right accounting firm?",
        "What are the common accounting challenges faced by businesses?",
        "How can accounting services help in business growth?",
      ],
    },
  ],
};

// Get business data
export async function GET(): Promise<NextResponse> {
  return NextResponse.json(businessData);
}

// Create business data
export async function POST(req: Request): Promise<NextResponse> {
  const newBusinessData: BusinessData = await req.json();
  businessData = newBusinessData;
  return NextResponse.json(businessData, { status: 201 });
}

// Update business data
export async function PUT(req: Request): Promise<NextResponse> {
  const updatedBusinessData: BusinessData = await req.json();
  businessData = updatedBusinessData;
  return NextResponse.json(businessData);
}

// Delete business data
export async function DELETE(): Promise<NextResponse> {
  businessData = {
    title: "",
    content: [],
    sections: [],
  };
  return NextResponse.json(null, { status: 204 });
}
