"use client";

import { useEffect, useState } from "react";

interface Service {
  title: string;
  description: string;
}

interface MailManagement {
  intro: {
    text: string;
  };
  heading: string;
  services: Service[];
}

const MailManagementComponent = () => {
  const [data, setData] = useState<MailManagement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/mail-management/header");
      if (!res.ok) {
        console.error("Failed to fetch data");
        return;
      }
      const json = await res.json();
      setData(json.MailManagementheader);
    };
    fetchData();
  }, []);

  if (!data) return <div className="text-center mt-10">Loading...</div>;

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
        {data.intro.text}
      </p>
      <div className="max-w-7xl mx-auto md:mt-4 mt-12 py-12">
        <h2 className="text-4xl font-extrabold md:mb-12 flex md:justify-start justify-center text-primary mb-8">
          {data.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {data.services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto"
            >
              <h2 className="text-lg font-bold mt-4 mb-4">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MailManagementComponent;
