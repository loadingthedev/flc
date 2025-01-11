"use client";
import { useState } from "react";
import {
  FaBalanceScale,
  FaHandshake,
  FaRegClock,
  FaShieldAlt,
} from "react-icons/fa";
import AttorneyCardList from "../component/AttorneyCardList";

const PracticeAreaDetail = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const characteristics = [
    {
      id: 1,
      title: "Cost-effectiveness",
      description:
        "Significantly lower costs compared to traditional litigation",
      icon: <FaBalanceScale className="w-8 h-8 text-primary" />,
    },
    {
      id: 2,
      title: "Confidentiality",
      description: "Private proceedings that protect sensitive information",
      icon: <FaShieldAlt className="w-8 h-8 text-primary" />,
    },
    {
      id: 3,
      title: "Speed of Resolution",
      description: "Faster resolution compared to court proceedings",
      icon: <FaRegClock className="w-8 h-8 text-primary" />,
    },
    {
      id: 4,
      title: "Flexibility in Processes",
      description: "Customizable procedures to suit specific needs",
      icon: <FaHandshake className="w-8 h-8 text-primary" />,
    },
  ];

  const attorneys = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Senior Mediator",
      image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98",
      expertise: "Commercial Mediation",
      experience: "15+ years",
      linkedin: "#",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Arbitration Specialist",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
      expertise: "International Arbitration",
      experience: "12+ years",
      linkedin: "#",
    },
  ];

  const navigationLinks = [
    { id: "overview", label: "Overview" },
    { id: "characteristics", label: "Characteristics" },
    { id: "attorneys", label: "Attorneys" },
    { id: "why-choose", label: "Why Choose ADR" },
  ];

  interface NavigationLink {
    id: string;
    label: string;
  }

  interface Characteristic {
    id: number;
    title: string;
    description: string;
    icon: JSX.Element;
  }

  interface Attorney {
    id: number;
    name: string;
    position: string;
    image: string;
    expertise: string;
    experience: string;
    linkedin: string;
  }

  const scrollToSection = (sectionId: string): void => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-8xl mx-auto px-4 py-20 sm:px-6 lg:px-8 py-12 bg-[#e1dfde]">
      {/* Title Section with Navigation Links */}
      <div className="text-center relative bg-primary py-8  mb-8">
        <h1 className="text-4xl font-heading font-bold text-white mb-6">
          Alternate Dispute Resolution
        </h1>
        <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
        {/* Navigation Links moved inside the title box */}
        <div className="flex justify-center space-x-6 px-4">
          {navigationLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                activeSection === link.id
                  ? "bg-white text-primary"
                  : "text-white hover:bg-white/20"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        {/* Description Section */}
        <div id="overview" className="max-w-4xl mx-auto py-20 text-justify">
          <p className="text-body text-foreground leading-relaxed mb-8">
            Alternate Dispute Resolution (ADR) represents a sophisticated
            approach to resolving conflicts outside the traditional court
            system. Our practice encompasses various methods including
            mediation, arbitration, and negotiation, providing clients with
            efficient and effective solutions to complex disputes. Through these
            processes, parties can achieve mutually beneficial outcomes while
            maintaining business relationships and minimizing costs.
          </p>
          <p className="text-body text-foreground leading-relaxed">
            We specialize in facilitating constructive dialogue between parties,
            ensuring that all stakeholders have the opportunity to voice their
            concerns and work towards amicable resolutions. Our expert mediators
            and arbitrators bring years of experience in handling diverse cases
            across various industries.
          </p>
        </div>

        {/* Characteristics Section */}
        <div
          id="characteristics"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 py-20"
        >
          {characteristics.map((characteristic) => (
            <div
              key={characteristic.id}
              className="bg-card p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
              role="article"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{characteristic.icon}</div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {characteristic.title}
                  </h3>
                  <p className="text-body text-foreground/80">
                    {characteristic.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expert Attorneys Section */}
        <div id="attorneys" className="py-12">
          <AttorneyCardList />
        </div>

        {/* Additional Information */}
        <div id="why-choose" className="bg-secondary p-8 rounded-md py-20">
          <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
            Why Choose ADR?
          </h2>
          <p className="text-body text-foreground/90">
            Our ADR services provide a pragmatic and cost-effective alternative
            to traditional litigation. With our expert guidance, clients can
            navigate complex disputes while maintaining control over the process
            and outcome. We pride ourselves on delivering solutions that
            prioritize efficiency, confidentiality, and mutual satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreaDetail;
