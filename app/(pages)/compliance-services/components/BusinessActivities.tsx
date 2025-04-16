"use client";
import { useEffect, useState } from "react";
import Contact from "../../shared/Contact";

interface ComplianceSection {
  title: string;
  content: string[];
  list?: string[];
}

interface BusinessCompliance {
  title: string;
  description: string;
  sections: ComplianceSection[];
}

const Business = () => {
  const [data, setData] = useState<BusinessCompliance | null>(null);

  useEffect(() => {
    fetch("/api/complaince-services/business")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);
        setData(data.complianceServicesBusiness);
      })
      .catch((err) => console.error("Error fetching data", err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="justify-center mb-4 mt-12"></div>
      <div className="flex flex-col md:flex-row items-start my-16">
        <div className="w-full md:w-1/2 h-full overflow-y-auto">
          <h2 className="text-3xl font-bold text-primary mt-8 mb-8">
            {data.title}
          </h2>
          <p className="mb-4">{data.description}</p>

          {data.sections.map((section, index) => (
            <div key={index} className="mt-8">
              <h3 className="text-3xl font-bold text-primary mb-8">
                {section.title}
              </h3>
              {section.content.map((paragraph, i) => (
                <p key={i} className="mb-4">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="list-disc pl-5 mb-4">
                  {section.list.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>{" "}
        <Contact title="Get Business Accounting Services Today" />
      </div>
    </div>
  );
};

export default Business;
