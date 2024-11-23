"use client";
import { motion } from "framer-motion";
import { ChangeEvent, useEffect, useState } from "react";
import { FiMail, FiPhone, FiSearch } from "react-icons/fi";

interface Attorney {
  id: number;
  name: string;
  country: string;
  expertise: string;
  description: string;
  email: string;
  mobile: string;
  image: string;
}

const AttorneyList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedExpertise, setSelectedExpertise] = useState<string>("");
  const [filteredAttorneys, setFilteredAttorneys] = useState<Attorney[]>([]);

  const attorneys: Attorney[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "United States",
      expertise: "Corporate Law",
      description:
        "Specializing in Corporate Law and International Business Transactions",
      email: "sarah.johnson@legalfirm.com",
      mobile: "+1 (555) 123-4567",
      image: "images.unsplash.com/photo-1573496799652-408c2ac9fe98",
    },
    {
      id: 2,
      name: "David Chen",
      country: "Singapore",
      expertise: "Maritime Law",
      description: "Expert in Maritime Law and International Trade Disputes",
      email: "david.chen@legalfirm.com",
      mobile: "+65 9876 5432",
      image: "images.unsplash.com/photo-1556157382-97eda2d62296",
    },
    {
      id: 3,
      name: "Emma Thompson",
      country: "United Kingdom",
      expertise: "Patent Law",
      description: "Specialized in Intellectual Property and Patent Law",
      email: "emma.thompson@legalfirm.com",
      mobile: "+44 20 7123 4567",
      image: "images.unsplash.com/photo-1580489944761-15a19d654956",
    },
  ];

  const expertiseOptions: string[] = Array.from(
    new Set(attorneys.map((attorney) => attorney.expertise))
  );

  const handleSearch = () => {
    const filtered = attorneys.filter((attorney) => {
      const matchesSearch =
        attorney.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        attorney.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        attorney.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesExpertise =
        !selectedExpertise || attorney.expertise === selectedExpertise;

      return matchesSearch && matchesExpertise;
    });
    setFilteredAttorneys(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [searchQuery, selectedExpertise]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16 space-y-6"
        >
          <h1 className="text-7xl font-extrabold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
            ATTORNEYS
          </h1>
          <h2 className="text-4xl font-bold text-gray-800 tracking-wide">
            FLC A LEADING VIRTUAL LAW FIRM
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Connect with Top-Tier Attorneys Worldwide
          </p>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
            FLC is composed of talented and experienced attorneys who hail from
            premier global law firms. Lawyers who join our team are part of a
            new generation of attorneys who believe it’s time to change the old,
            inefficient ways of practicing law to focus on what is most
            important: delivering greater value to our clients.
          </p>
        </motion.div>

        <div className="mb-12 max-w-8xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 backdrop-blur-xl bg-white/40 p-6 rounded-2xl shadow-xl border border-white/50">
            {/* Search Input */}
            <div className="relative flex-1">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search by name, country, or Jurisdiction..."
                className="w-full pl-12 pr-4 py-3 text-base border-2 border-gray-100 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white/90 transition-all duration-300"
                value={searchQuery}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(e.target.value)
                }
                aria-label="Search attorneys"
              />
            </div>

            {/* Dropdown */}
            <div className="relative" style={{ flex: "0 0 25%" }}>
              <select
                value={selectedExpertise}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setSelectedExpertise(e.target.value)
                }
                className="w-full px-4 py-3 text-base border-2 border-gray-100 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white/90 appearance-none transition-all duration-300"
                aria-label="Select expertise"
              >
                <option value="">Select Expertise</option>
                {expertiseOptions.map((expertise) => (
                  <option key={expertise} value={expertise}>
                    {expertise}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 text-base rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
              aria-label="Search"
            >
              Search
            </button>
          </div>
        </div>

        {filteredAttorneys.length === 0 ? (
          <div className="text-center text-gray-500 py-12 bg-white/60 rounded-3xl shadow-xl border border-white/50">
            No attorneys found matching your search criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
            {filteredAttorneys.map((attorney) => (
              <motion.div
                key={attorney.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-white/50"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img
                      src={`https://${attorney.image}`}
                      alt={attorney.name}
                      className="w-full h-64 md:h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1507679799987-c73779587ccf";
                      }}
                    />
                  </div>
                  <div className="p-10 md:w-2/3 space-y-6">
                    <h3 className="text-3xl font-bold text-gray-800 tracking-wide">
                      {attorney.name}
                    </h3>
                    <div className="flex items-center space-x-3">
                      <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-xl text-sm font-semibold tracking-wide">
                        {attorney.country}
                      </span>
                      <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-xl text-sm font-semibold tracking-wide">
                        {attorney.expertise}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {attorney.description}
                    </p>
                    <div className="space-y-4 pt-4">
                      <a
                        href={`mailto:${attorney.email}`}
                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
                        aria-label={`Email ${attorney.name}`}
                      >
                        <FiMail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                        {attorney.email}
                      </a>
                      <a
                        href={`tel:${attorney.mobile}`}
                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
                        aria-label={`Call ${attorney.name}`}
                      >
                        <FiPhone className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                        {attorney.mobile}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AttorneyList;
