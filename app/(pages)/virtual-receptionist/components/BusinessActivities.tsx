"use client";
import { useEffect, useState } from "react";
import Contact from "../../shared/Contact";

interface Article {
  title: string;
  intro: string[];
  sections: {
    heading: string;
    paragraphs: string[]; // updated this
    list?: string[];
    subsections?: { subheading: string; content: string[] }[];
  }[];
}

const Business = () => {
  const [article, setData] = useState<Article | null>(null);

  useEffect(() => {
    fetch("/api/virtual-receptionist/business")
      .then((res) => res.json())
      .then((response) => {
        console.log("Fetched data:", response);
        setData(response.virtualreceptionistbusiness);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-start my-16">
        <div className="w-full md:w-1/2 h-full overflow-y-auto p-4">
          {article ? (
            <>
              <h2 className="text-3xl font-bold text-primary mt-8 mb-8">
                {article.title}
              </h2>

              {/* Render Intro */}
              {article.intro?.map((para, idx) => (
                <p key={`intro-${idx}`} className="mb-4">
                  {para}
                </p>
              ))}

              {/* Render Sections */}
              {article.sections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-3xl font-bold text-primary mt-8">
                    {section.heading}
                  </h3>

                  {/* ✅ Use section.paragraphs instead of content */}
                  {section.paragraphs?.map((para, idx) => (
                    <p key={idx} className="mb-4">
                      {para}
                    </p>
                  ))}

                  {section.list && section.list.length > 0 && (
                    <ul className="list-disc list-inside">
                      {section.list.map((item, i) => (
                        <li key={i} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.subsections &&
                    section.subsections.map((sub, i) => (
                      <div key={i}>
                        <h4 className="text-2xl font-semibold text-primary mt-6">
                          {sub.subheading}
                        </h4>
                        {sub.content.map((p, j) => (
                          <p key={j} className="mb-4">
                            {p}
                          </p>
                        ))}
                      </div>
                    ))}
                </div>
              ))}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <Contact title="Get Telephony Services Today" />
      </div>
    </div>
  );
};

export default Business;
