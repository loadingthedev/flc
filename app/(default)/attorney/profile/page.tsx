"use client";
import { useState } from "react";
import {
  FaAward,
  FaBriefcase,
  FaEnvelope,
  FaGraduationCap,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const LawyerProfile = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  const lawyer = {
    name: "Sarah Johnson",
    role: "Senior Partner - Corporate Law",
    email: "sarah.johnson@legalfirm.com",
    phone: "+1 (555) 123-4567",
    bio: "Specialized in corporate law with over 15 years of experience handling complex business transactions and mergers & acquisitions.",
    profileImage:
      "images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
    coverImage:
      "images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
    expertise: [
      "Corporate Law",
      "Mergers & Acquisitions",
      "Business Transactions",
      "Contract Negotiations",
    ],
    education: [
      "Harvard Law School, J.D.",
      "Yale University, B.A. in Economics",
    ],
    awards: [
      "Best Corporate Lawyer 2023",
      "Legal Excellence Award 2022",
      "Top 40 Under 40 Lawyers",
    ],
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${lawyer.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${lawyer.phone}`;
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="relative w-full h-96">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
          <h1 className="text-5xl font-extrabold mb-4 text-[#2563eb] mb-2">
            {lawyer.name}
          </h1>
          <p className="text-2xl mb-8 text-black">{lawyer.role}</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleEmailClick}
              className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
              aria-label="Send email"
            >
              <FaEnvelope className="mr-2" />
              Email Me
            </button>
            <button
              onClick={handlePhoneClick}
              className="flex items-center px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-lg"
              aria-label="Call phone number"
            >
              <FaPhone className="mr-2" />
              Call Now
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-black/30 rounded-lg transition-all duration-300 group-hover:bg-black/40"></div>
            <img
              src={`https://${lawyer.profileImage}`}
              alt={lawyer.name}
              className={`w-36 h-48 sm:w-48 sm:h-64 rounded-lg border-4 border-white shadow-lg transform transition-all duration-300 ${isHovered ? "scale-105" : ""} group-hover:shadow-2xl object-cover`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto pt-12 pb-12 px-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="px-6 mt-8 mb-8">
            <div className="text-center">
              <div className="mt-10 flex justify-center space-x-8">
                {["Biography", "Expertise", " BLOG/PRESS/MEDIA"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-lg font-medium transition-all duration-300 border-b-2 ${activeTab === tab ? "text-blue-600 border-blue-600" : "text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-300"}`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="mt-8 max-w-3xl mx-auto">
                {activeTab === "about" && (
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {lawyer.bio}
                  </p>
                )}
                {activeTab === "expertise" && (
                  <div className="grid grid-cols-2 gap-4">
                    {lawyer.expertise.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 bg-gray-50 rounded-lg"
                      >
                        <FaBriefcase className="text-blue-600 mr-3" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === "education" && (
                  <div className="space-y-4">
                    {lawyer.education.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 bg-gray-50 rounded-lg"
                      >
                        <FaGraduationCap className="text-blue-600 mr-3" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === "awards" && (
                  <div className="space-y-4">
                    {lawyer.awards.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 bg-gray-50 rounded-lg"
                      >
                        <FaAward className="text-blue-600 mr-3" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-10 flex justify-center space-x-6">
                <a
                  href={lawyer.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transform hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href={lawyer.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
                  aria-label="Twitter profile"
                >
                  <FaTwitter size={28} />
                </a>
                <a
                  href={lawyer.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-500 transform hover:scale-110 transition-all duration-300"
                  aria-label="Instagram profile"
                >
                  <FaInstagram size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerProfile;
