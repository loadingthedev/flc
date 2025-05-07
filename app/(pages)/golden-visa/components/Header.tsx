"use client";
import { useEffect, useState } from "react";

interface Service {
  title: string;
  description: string;
  image: string;
}

interface Requirement {
  category: string;
  items: string[];
}

interface Data {
  introText: string;
  mustKnowText: string;
  services: Service[];
  requirements: Requirement[];
}

const Header = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/golden-visa/header");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p
        className="text-md md:text-md md:mt-16 mt-8 text-center"
        style={{
          textAlign: "justify",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {data.introText}
      </p>

      <p className="mt-12 text-3xl font-bold">MUST KNOW</p>

      <p className="text-md md:text-md md:mt-8 mt-8 text-start bg-muted-foreground p-4">
        {data.mustKnowText}
      </p>

      <div className="max-w-8xl mx-auto md:mt-4 mt-12 py-12">
        <h2 className="text-4xl font-extrabold md:mb-12 flex md:justify-start justify-center text-primary mb-8">
          Our Golden Visa UAE Services
        </h2>

        <div className="flex flex-col gap-12">
          {data.services.map((service, index) => (
            <div
              key={index}
              className="flex flex-row justify-center items-start gap-8"
            >
              <div className="flex items-center mb-2 pb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-48 h-48 rounded-full mb-4 p-4"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl text-muted-foreground font-bold mt-4">
                  {service.title}
                </h2>
                <p className="text-justify mt-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 max-w-7xl mx-auto">
        {data.requirements.map((requirement, index) => (
          <div key={index} className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 bg-muted-foreground p-4">
              {requirement.category}
            </h3>
            <ul className="px-8 text-justify">
              {requirement.items.map((item, idx) => (
                <li key={idx} className="list-disc mb-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
