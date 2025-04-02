"use client";
import { useEffect, useState } from "react";
import Contact from "../../shared/Contact";

interface Section {
  heading: string;
  paragraphs: string[];
}

interface BusinessData {
  _id: string;
  title: string;
  content: string;
  sections: Section[];
}

const Business = () => {
  const [data, setData] = useState<BusinessData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/bank-account/business")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        setData(data.businessData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-lg font-bold">Loading....</div>;
  }

  if (!data) {
    return <div className="text-center text-red-500">Error fetching data</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-4">
      <div className="flex flex-col md:flex-row items-start ">
        <div className="w-full md:w-1/2 h-full overflow-y-auto">
          <div className="p-4 md:ml-12 text-justify">
            <h2 className="text-2xl font-bold text-primary mt-6 mb-8">
              {data.title}
            </h2>
            <p className="mb-4">{data.content}</p>

            {data.sections.map((section, index) => (
              <div key={index} id={section.heading}>
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p className="mb-2" key={pIndex}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <Contact title="Get Business Accounting Services" />
      </div>
    </div>
  );
};

export default Business;
