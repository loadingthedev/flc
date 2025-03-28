"use client";
import { useEffect, useState } from "react";
import {
  FaBookOpen,
  FaCalculator,
  FaCameraRetro,
  FaDollarSign,
  FaPercentage,
} from "react-icons/fa";

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface ApiResponse {
  headerContent: { text: string };
  services: Service[];
}

const iconMap: { [key: string]: JSX.Element } = {
  FaBookOpen: <FaBookOpen className="text-5xl mr-4 text-primary" />,
  FaCalculator: <FaCalculator className="text-5xl mr-4 text-primary" />,
  FaCameraRetro: <FaCameraRetro className="text-5xl mr-4 text-primary" />,
  FaDollarSign: <FaDollarSign className="text-5xl mr-4 text-primary" />,
  FaPercentage: <FaPercentage className="text-5xl mr-4 text-primary" />,
};

const Header = () => {
  const [headerContent, setHeaderContent] = useState<string>("");
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch("/api/accounting-service/header")
      .then((response) => response.json())
      .then((data: ApiResponse) => {
        if (data.headerContent?.text) {
          setHeaderContent(data.headerContent.text);
        }
        if (data.services) {
          setServices(data.services);
        }
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p
        className="text-md md:text-lg md:mt-16 mt-8 text-center"
        style={{ textAlign: "justify" }}
      >
        {headerContent}
      </p>
      <div className="max-w-8xl mx-auto md:mt-4 mt-12 py-12">
        <h2 className="text-4xl font-extrabold md:mb-12 flex md:justify-start justify-center text-primary mb-8">
          Our Accounting Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-center bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto"
            >
              <div className="flex items-center mb-2">
                {iconMap[service.icon] || (
                  <FaBookOpen className="text-5xl mr-4 text-primary" />
                )}
                <h2 className="text-2xl font-bold">{service.title}</h2>
              </div>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
