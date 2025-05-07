"use client";
import React, { useEffect, useState } from "react";

const BusinessEditor = () => {
  // Define the data structure for the content
  interface ContentItem {
    type: "paragraph" | "header" | "list";
    text?: string;
    level?: number;
    items?: Array<
      | {
          title?: string;
          description?: string[];
          region?: string;
          benefits?: string[];
        }
      | string
    >;
  }

  interface BusinessData {
    title: string;
    content: ContentItem[];
  }

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<BusinessData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the data from the API
    fetch("/api/golden-visa/business")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data.goldenVisaBusiness); // Ensure the structure matches this path
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Show loading or error messages
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return <div>No data available</div>;

  // Render the fetched data
  return (
    <div className="max-w-6xl mx-auto md:mt-4 mt-12 py-12">
      <h2 className="text-4xl font-extrabold mb-8">{data.title}</h2>
      {data.content.map((item, index) => {
        if (item.type === "paragraph") {
          // Render paragraph content
          return (
            <p key={index} className="mb-4">
              {item.text}
            </p>
          );
        } else if (item.type === "header") {
          // Render header content
          return React.createElement(
            `h${item.level || 2}`,
            { key: index, className: "text-4xl font-extrabold mt-8" },
            item.text
          );
        } else if (item.type === "list") {
          // Render list content
          return (
            <ul key={index} className="list-disc ml-6 mb-4">
              {item.items?.map((listItem, listIndex) => {
                if (typeof listItem === "string") {
                  // Render plain string items
                  return <li key={listIndex}>{listItem}</li>;
                } else if (listItem.title) {
                  // Render list items with title and description
                  return (
                    <li key={listIndex} className="mb-2">
                      <strong>{listItem.title}</strong>
                      {listItem.description && (
                        <ul className="list-disc ml-6">
                          {listItem.description.map((desc, descIndex) => (
                            <li key={descIndex}>{desc}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                } else if (listItem.region) {
                  // Render region-specific benefits
                  return (
                    <li key={listIndex} className="mb-2">
                      <strong>{listItem.region}</strong>
                      {listItem.benefits && (
                        <ul className="list-disc ml-6">
                          {listItem.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex}>{benefit}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          );
        }
        return null;
      })}
    </div>
  );
};

export default BusinessEditor;
