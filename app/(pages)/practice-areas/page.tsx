"use client";
import { ChangeEvent, MouseEvent, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Cta from "../shared/Cta";
import Heading from "../shared/Heading";

// Define the types for the practice areas and descriptions
type PracticeArea = {
  description: string;
  image: string;
};

const practiceAreas: string[] = [
  "Alternate Dispute Resolution",
  "Appellate Law",
  "Banking & Finance",
  "Corporate Law",
  "Employment Law",
  "Environmental Law",
  "Family Law",
  "Immigration Law",
  "Intellectual Property",
  "Real Estate Law",
];

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
    const filtered = practiceAreas.filter((area) =>
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
    const index = practiceAreas.indexOf(suggestion);
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
        />

        <div className="mb-8 max-w-3xl mx-auto relative z-10 items-start">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, country, or description..."
                className="w-[500px] pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(e.target.value)
                }
                aria-label="Search attorneys"
              />
            </div>

            <div className="relative flex-1">
              <select
                className="w-[200px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                aria-label="Select expertise"
              >
                <option value="">Select Expertise</option>
                {practiceAreas.map((expertise) => (
                  <option key={expertise} value={expertise}>
                    {expertise}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={(e: MouseEvent<HTMLButtonElement>) =>
                handleSearch(searchQuery)
              }
              className="bg-blue-600 text-white px-8 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Search"
            >
              Search
            </button>
          </div>
        </div>

        <div className="mt-16">
          <div className="border-b border-gray-200">
            <div className="flex flex-wrap -mb-px justify-center">
              {practiceAreas.map((area, index) => (
                <button
                  key={index}
                  className={`mr-4 inline-block p-4 rounded-t-lg hover:text-blue-600 hover:border-blue-600 transition-all duration-200 text-lg font-medium ${
                    activeTab === index
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 border-b-2 border-transparent"
                  }`}
                  onClick={() => handleTabClick(index)}
                  role="tab"
                  aria-selected={activeTab === index}
                  aria-controls={`panel-${index}`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className={`py-12 ${activeTab === index ? "block" : "hidden"}`}
              role="tabpanel"
              id={`panel-${index}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h4 className="text-3xl font-bold text-gray-900 mb-6">
                    {area}
                  </h4>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {practiceAreaDescriptions[area].description}
                  </p>
                  <button className="inline-flex items-center text-blue-600 font-brandon hover:text-blue-700 transition-colors duration-200">
                    Learn More <FaArrowRight className="ml-2" />
                  </button>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={`https://${practiceAreaDescriptions[area].image}`}
                    alt={area}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Cta />
      </div>
    </div>
  );
};

export default PracticeAreas;
