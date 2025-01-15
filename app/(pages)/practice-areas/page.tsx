"use client";
import { useState } from "react";
import Cta from "../shared/Cta";
import Heading from "../shared/Heading";
import Search from "../shared/Search";
import PracticeAreaTable from "./component/PracticeCard";

// Define the types for the practice areas and descriptions
type PracticeArea = {
  description: string;
  image: string;
};

const practiceAreaDescriptions: { [key: string]: PracticeArea } = {
  "Alternate Dispute Resolution": {
    description:
      "Our expert mediators and arbitrators help resolve conflicts efficiently without litigation.",
    image:
      "images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3",
  },
  "Appellate Law": {
    description:
      "Skilled advocacy for appeals at all court levels with proven track record.",
    image:
      "images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3",
  },
  "Banking & Finance": {
    description:
      "Comprehensive financial legal services for institutions and individuals.",
    image:
      "images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3",
  },
  "Corporate Law": {
    description:
      "Strategic business counsel from formation to complex transactions.",
    image:
      "images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3",
  },
  "Employment Law": {
    description:
      "Protecting both employer and employee rights in the modern workplace.",
    image:
      "images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3",
  },
  "Environmental Law": {
    description:
      "Navigating complex environmental regulations and sustainability issues.",
    image:
      "images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3",
  },
  "Family Law": {
    description:
      "Sensitive handling of domestic matters with your best interests at heart.",
    image:
      "images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3",
  },
  "Immigration Law": {
    description:
      "Expert guidance through complex immigration procedures and policies.",
    image:
      "images.unsplash.com/photo-1569974498991-d37c6d760f5a?ixlib=rb-4.0.3",
  },
  "Intellectual Property": {
    description:
      "Protecting your innovations, brands, and creative works in the digital age.",
    image:
      "images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3",
  },
  "Real Estate Law": {
    description:
      "Complete legal support for all property transactions and disputes.",
    image: "images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3",
  },
};

const PracticeAreas = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }
    const filtered = Object.keys(practiceAreaDescriptions).filter((area) =>
      area.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setSuggestions([]);
    const index = Object.keys(practiceAreaDescriptions).indexOf(suggestion);
    if (index !== -1) {
      setActiveTab(index);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="   max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Heading
          title="PRACTICE AREAS"
          subtitle="PRACTICAL. VERSATILE. COST-EFFECTIVE."
          paragraph="In each of our practice areas we help clients reach their goals in a streamlined, responsive and collaborative manner to yield great results. As a full-service law firm, we deliver legal counsel across a wide range of specialty areas and industries."
          subparagraph=""
        />
        <Search
          handleSearch={(query) => console.log(query)}
          handleExpertiseChange={(area) => console.log(area)}
        />
        <PracticeAreaTable />
        <Cta />
      </div>
    </div>
  );
};

export default PracticeAreas;
