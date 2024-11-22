"use client";
import { useEffect, useState } from "react";
import {
  FaArrowUp,
  FaBriefcase,
  FaEnvelope,
  FaHandshake,
  FaLink,
  FaPhoneAlt,
} from "react-icons/fa";

const ClientPartnerSection = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [activeTab, setActiveTab] = useState("clients");
  const [searchTerm, setSearchTerm] = useState("");

  const clients = [
    {
      id: 1,
      name: "Tech Solutions Inc",
      imageUrl: "images.unsplash.com/photo-1560179707-f14e90ef3623",
      website: "#",
      industry: "Technology",
    },
    {
      id: 2,
      name: "Global Systems Ltd",
      imageUrl: "images.unsplash.com/photo-1516387938699-a93567ec168e",
      website: "#",
      industry: "IT Services",
    },
    {
      id: 3,
      name: "Digital Innovations",
      imageUrl: "images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      website: "#",
      industry: "Digital Solutions",
    },
    {
      id: 4,
      name: "Smart Analytics",
      imageUrl: "images.unsplash.com/photo-1460925895917-afdab827c52f",
      website: "#",
      industry: "Data Analytics",
    },
    {
      id: 5,
      name: "Future Technologies",
      imageUrl: "images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      website: "#",
      industry: "Innovation",
    },
    {
      id: 6,
      name: "Cloud Solutions",
      imageUrl: "images.unsplash.com/photo-1497366811353-6870744d04b2",
      website: "#",
      industry: "Cloud Computing",
    },
  ];

  const partners = [
    {
      id: 1,
      name: "Strategic Solutions Partners",
      type: "Strategic Partner",
      description: "Leading provider of enterprise solutions",
      contact: "contact@strategic.com",
      phone: "+1 234 567 8900",
      website: "#",
      logo: "images.unsplash.com/photo-1560179707-f14e90ef3623",
    },
    {
      id: 2,
      name: "Innovation Tech Partners",
      type: "Technology Partner",
      description: "Innovative technology solutions provider",
      contact: "info@innovationtech.com",
      phone: "+1 234 567 8901",
      website: "#",
      logo: "images.unsplash.com/photo-1516387938699-a93567ec168e",
    },
    {
      id: 3,
      name: "Global Distribution Network",
      type: "Distribution Partner",
      description: "Worldwide distribution and logistics",
      contact: "partnership@globaldist.com",
      phone: "+1 234 567 8902",
      website: "#",
      logo: "images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPartners = partners.filter(
    (partner) =>
      partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50">
      <div className="mb-12 text-center">
        <h2 className="text-5xl font-bold mb-6 text-gray-800 animate-fade-in">
          Our Network
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Connecting with the best in the industry
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab("clients")}
            className={`px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 ${
              activeTab === "clients"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200"
            }`}
          >
            <FaBriefcase className="inline-block mr-2" />
            Our Clients
          </button>
          <button
            onClick={() => setActiveTab("partners")}
            className={`px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 ${
              activeTab === "partners"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200"
            }`}
          >
            <FaHandshake className="inline-block mr-2" />
            Our Partners
          </button>
        </div>
      </div>

      <div className="transition-all duration-300 overflow-hidden">
        {activeTab === "clients" ? (
          <div className="animate-marquee whitespace-nowrap">
            <div className="inline-flex gap-8">
              {[...filteredClients, ...filteredClients].map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="group relative overflow-hidden rounded-xl shadow-xl transition-all duration-300 hover:scale-105 bg-white min-w-[300px]"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={`https://${client.imageUrl}`}
                      alt={client.name}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <h3 className="text-2xl font-bold mb-2">{client.name}</h3>
                      <p className="text-blue-300 mb-4">{client.industry}</p>
                      <a
                        href={client.website}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLink className="mr-2" /> Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="animate-marquee whitespace-nowrap">
            <div className="inline-flex gap-8">
              {[...filteredPartners, ...filteredPartners].map(
                (partner, index) => (
                  <div
                    key={`${partner.id}-${index}`}
                    className="bg-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[400px]"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <img
                        src={`https://${partner.logo}`}
                        alt={partner.name}
                        className="w-16 h-16 object-cover rounded-full"
                      />
                      <span className="px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                        {partner.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {partner.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{partner.description}</p>
                    <div className="space-y-4">
                      <a
                        href={`mailto:${partner.contact}`}
                        className="flex items-center text-gray-600 hover:text-blue-600"
                      >
                        <FaEnvelope className="mr-2" /> {partner.contact}
                      </a>
                      <a
                        href={`tel:${partner.phone}`}
                        className="flex items-center text-gray-600 hover:text-blue-600"
                      >
                        <FaPhoneAlt className="mr-2" /> {partner.phone}
                      </a>
                      <a
                        href={partner.website}
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLink className="mr-2" /> Visit Website
                      </a>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ClientPartnerSection;
