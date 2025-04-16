"use client";

import { useEffect, useState } from "react";
import Contact from "../../shared/Contact";

type Section = {
  _id: string;
  title: string;
  paragraphs: string[];
};

type MailManagementBusiness = {
  _id: string;
  sections: Section[];
};

const Business = () => {
  const [data, setData] = useState<MailManagementBusiness | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/mail-management/business");
        const json = await res.json();
        setData(json.MainManagementBusiness);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="justify-center mb-4 mt-12"></div>
      <div className="flex flex-col md:flex-row items-start my-16">
        <div className="w-full md:w-1/2 h-full overflow-y-auto">
          <div className="p-8">
            {data?.sections.map((section) => (
              <div key={section._id} className="mb-8">
                <h2 className="text-3xl font-bold text-primary mt-8 mb-4">
                  {section.title}
                </h2>
                {section.paragraphs.map((para, idx) => (
                  <p key={idx} className="mb-4">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Contact
          title="Get Mail Management Services Today

"
        />
      </div>
    </div>
  );
};

export default Business;
