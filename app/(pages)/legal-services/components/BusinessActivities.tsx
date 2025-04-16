"use client";

import { useEffect, useState } from "react";
import Contact from "../../shared/Contact";

interface Section {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

interface LegalService {
  title: string;
  sections: Section[];
}

const Business = () => {
  const [data, setData] = useState<LegalService | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/legal-services/business");
      if (!res.ok) {
        console.error("Failed to fetch data");
        return;
      }
      const json = await res.json();
      setData(json.legalservicebusiness);
    };
    fetchData();
  }, []);

  if (!data) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="justify-center mb-4 mt-12"></div>
      <div className="flex flex-col md:flex-row items-start my-16">
        <div className="w-full md:w-1/2 h-full overflow-y-auto">
          <div className="p-8">
            {/* <h1 className="text-3xl font-bold text-primary mb-6">
              {data.title}
            </h1> */}
            {data.sections?.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  {section.heading}
                </h2>
                {section.paragraphs.map((para, i) => (
                  <p key={i} className="mb-3">
                    {para}
                  </p>
                ))}
                {section.list && (
                  <ul className="list-disc list-inside">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        <Contact title="Get the legal Service Consultation Today" />
      </div>
    </div>
  );
};

export default Business;
