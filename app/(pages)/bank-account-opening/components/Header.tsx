"use client";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FaBookOpen, FaDonate } from "react-icons/fa";

interface ServiceInfo {
  title: string;
  description: string;
  icon: string;
}

interface HeaderData {
  introText: string;
  mustKnow: string[];
  services: ServiceInfo[];
}

const Header = () => {
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/bank-account/header");
        const result = await response.json();

        if (result && result.bankHeaderData) {
          setHeaderData(result.bankHeaderData);
        } else {
          console.error("Invalid API Response Structure:", result);
        }
      } catch (error) {
        console.error("Error fetching header data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("Rendering Component with Data:", headerData);

  if (loading) return <div>Loading...</div>;
  if (!headerData) return <div>Failed to load data.</div>;

  const iconMap: Record<string, IconType> = {
    FaBookOpen,
    FaDonate,
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-md md:text-xl md:mt-16 mt-8 text-justify">
          {headerData.introText}
        </p>

        <div className="max-w-8xl mx-auto md:mt-4 mt-10 py-12">
          <h2 className="text-4xl font-extrabold md:mb-12 flex md:justify-start justify-center mb-8">
            Must Know
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {headerData.mustKnow.map((item, index) => (
              <div
                key={index}
                className="flex justify-center bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto md:py-0 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto py-12">
          <h2 className="md:text-4xl text-2xl font-extrabold flex md:justify-start justify-center mb-4">
            Our Bank Account Opening in UAE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {headerData.services.map((service, index) => {
            const IconComponent =
              iconMap[service.icon as keyof typeof iconMap] || FaBookOpen;

            return (
              <div
                key={index}
                className="bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto items-center justify-center"
              >
                <div className="flex items-center">
                  <IconComponent className="text-6xl mr-4 text-primary" />
                  <h2 className="text-3xl">{service.title}</h2>
                </div>
                <p className="text-md md:mt-6">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
