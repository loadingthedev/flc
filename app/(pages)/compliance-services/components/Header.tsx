"use client";
import { useEffect, useState } from "react";
import { FiDollarSign, FiFolder } from "react-icons/fi";
// import { ComplianceData } from "@/types"; // Import the type

export interface ComplianceService {
  title: string;
  description: string;
  icon: string;
}

export interface ComplianceData {
  _id: string;
  intro: string;
  services: ComplianceService[];
}

const icons: { [key: string]: JSX.Element } = {
  FiFolder: (
    <FiFolder className="w-20 h-20 md:w-40 md:h-40 p-4 text-white border-2 border-solid border-primary bg-primary mx-auto" />
  ),
  FiDollarSign: (
    <FiDollarSign className="w-20 h-20 md:w-40 md:h-40 p-4 text-white border-2 border-solid border-primary bg-primary mx-auto" />
  ),
};

const Header = () => {
  const [complianceData, setComplianceData] = useState<ComplianceData | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/complaince-services/header");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data: ComplianceData[] = await response.json();
        setComplianceData(data[0]);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center mt-12">Loading...</p>;
  if (error) return <p className="text-center mt-12 text-red-500">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      {/* Intro Text */}
      <p className="mt-12 text-lg textalign-justify md:px-8 mb-8">
        {complianceData?.intro}
      </p>

      <h2 className="text-xl md:text-4xl font-bold text-primary text-center mt-16 mb-12">
        Our Mandatory Compliance Services
      </h2>

      <div className="px-4 md:px-6 flex flex-col md:flex-row p-4 mb-4 ml-4 space-y-8 md:space-y-0 md:space-x-8">
        {complianceData?.services.map((service, index) => (
          <div
            key={index}
            className="flex-1 text-center bg-gray-100 p-6 rounded-lg shadow-lg"
          >
            {icons[service.icon] || <FiFolder />} {/* Default icon */}
            <h3 className="text-2xl mt-4 md:text-3xl font-bold text-primary">
              {service.title}
            </h3>
            <p className="mt-4 text-justify">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
