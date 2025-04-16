"use client";

import { useEffect, useState } from "react";

interface Service {
  healthInsurance: {
    description: string;
  };
  touristVisaServices: {
    title: string;
    services: {
      title: string;
      description: string;
      points: string[];
      image: string;
    }[];
  };
}

const Header = () => {
  const [data, setData] = useState<Service | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/tourist-visa-services/header");
        const result = await response.json();
        setData(result.touristvisaheader);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p
        className="text-md md:text-lg md:mt-16 mt-8 text-center"
        style={{
          textAlign: "justify",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {data.healthInsurance.description}
      </p>

      <div className="max-w-8xl mx-auto md:mt-4 mt-12 py-12">
        <h2 className="text-4xl font-extrabold md:mb-12 flex md:justify-start justify-center text-primary mb-8">
          {data.touristVisaServices.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {data.touristVisaServices.services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center mb-2 border-b-2 pb-4 bg-muted-foreground w-128 h-128">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <h2 className="text-lg font-bold mt-4">{service.title}</h2>
              <p className="text-justify px-4">{service.description}</p>
              {service.points.length > 0 && (
                <ul className="list-disc list-inside text-justify mt-4">
                  {service.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
