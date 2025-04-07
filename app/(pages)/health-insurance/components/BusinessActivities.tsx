"use client";
import { useEffect, useState } from "react";
import Contact from "../../shared/Contact";

interface Section {
  id: string;
  title: string;
  content: string[];
}

interface HealthInsuranceData {
  _id: string;
  title: string;
  content: string[];
  sections: Section[];
}

const Business = () => {
  const [data, setData] = useState<HealthInsuranceData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/health-insurance/business")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data.healthInsurancebusiness);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data available.</div>;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="justify-center mb-4 mt-12">
        <div className="flex justify-center"></div>
      </div>
      <div className="flex flex-col md:flex-row items-start my-16">
        <div className="w-full md:w-1/2 h-full overflow-y-auto">
          <div className="p-4">
            <div>
              <h2 className="text-3xl font-bold text-primary mt-8 mb-8 list-disc">
                {data.title}
              </h2>
              {data.content.map((paragraph, index) => (
                <p className="mb-4" key={index}>
                  {paragraph.includes("<li>") ? (
                    <ul className="list-disc pl-5">
                      {paragraph
                        .split("<li>")
                        .map(
                          (item, idx) =>
                            item.trim() && <li key={idx}>{item}</li>
                        )}
                    </ul>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>
            {data.sections.map((section) => (
              <div key={section.id} id={section.id}>
                <h2 className="text-2xl font-bold text-primary mt-8 list-disc">
                  {section.title}
                </h2>
                {section.content.map((paragraph, index) => (
                  <p className="mb-4" key={index}>
                    {paragraph.includes("<li>") ? (
                      <ul className="list-disc pl-5">
                        {paragraph
                          .split("<li>")
                          .map(
                            (item, idx) =>
                              item.trim() && <li key={idx}>{item}</li>
                          )}
                      </ul>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Contact title="Get Health Insurance Services Today" />
      </div>
    </div>
  );
};

export default Business;
