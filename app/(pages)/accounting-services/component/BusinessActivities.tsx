"use client";
import { useEffect, useState } from "react";
import Contact from "../../shared/Contact";

interface Section {
  id: string;
  title: string;
  content: string[];
}

interface BusinessData {
  title: string;
  content: string[];
  sections: Section[];
}

const Business = () => {
  const [data, setData] = useState<BusinessData | null>(null);

  useEffect(() => {
    fetch("/api/accounting-service/business")
      .then((response) => response.json())
      .then((data: BusinessData) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-start my-16">
        <div className="w-full md:w-1/2 h-full overflow-y-auto">
          <div className="p-4 md:ml-12 text-justify ">
            <div>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-8 text-justify">
                {data.title}
              </h2>
              {data.content?.map((paragraph, index) => (
                <p className="mb-2" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
            {data.sections?.map((section, index) => (
              <div key={index} id={section.id}>
                <h2 className="text-xl font-bold text-primary mt-8 mb-4">
                  {section.title}
                </h2>
                {section.content.map((paragraph, index) => (
                  <p className="mb-2" key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <Contact title="Get Business Accounting Services " />
      </div>
    </div>
  );
};

export default Business;
