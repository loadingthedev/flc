"use client";
import { useEffect, useState } from "react";

interface IPService {
  title: string;
  description: string;
  image: string;
}

interface ServiceData {
  title: string;
  description: string;
  assets: string[];
  services: IPService[];
}

const Header = () => {
  const [data, setData] = useState<ServiceData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/trademark/header");
        const result = await response.json();
        setData(result.trademarkheader);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) return <div className="text-center p-8">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold md:mb-12 flex md:justify-start justify-start  text-primary mb-8 mt-24">
        {data.title}
      </h2>

      <p className="text-md md:text-lg md:mt-16 mt-8 text-center text-justify flex justify-start">
        {data.description}
      </p>

      <ul className="list-disc ml-6 mt-4 text-md">
        {data.assets.map((asset, i) => (
          <li key={i}>{asset}</li>
        ))}
      </ul>

      <div className="max-w-8xl mx-auto md:mt-4 mt-12 py-12">
        <ul>
          {data.services.map((service, index) => (
            <li key={index} className="flex items-center mb-8">
              <img
                src={service.image}
                alt={service.title}
                className="w-24 h-24"
              />
              <div className="ml-4">
                <h2 className="text-2xl font-bold">{service.title}</h2>
                <p className="mb-4">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
