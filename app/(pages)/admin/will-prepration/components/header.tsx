"use client";

import { useEffect, useState } from "react";

interface WllItem {
  title: string;
  description: string;
  image: string;
}

interface WllHeader {
  intro: string;
  heading: string;
  wills: WllItem[];
}

const Header = () => {
  const [data, setData] = useState<WllHeader | null>(null);
  const [editing, setEditing] = useState({
    intro: false,
    heading: false,
    wills: [] as boolean[],
  });

  useEffect(() => {
    fetch("/api/will-prep/header")
      .then((res) => res.json())
      .then((response) => {
        setData(response.wllheader);
        setEditing({
          intro: false,
          heading: false,
          wills: new Array(response.wllheader?.wills.length || 0).fill(false),
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSave = async () => {
    if (!data) return;
    const res = await fetch("/api/will-prep/header", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const updated = await res.json();
    setData(updated);
    alert("Changes saved successfully.");
  };

  const updateWillsField = (
    index: number,
    field: keyof WllItem,
    value: string
  ) => {
    if (!data) return;
    const updatedWills = [...data.wills];
    updatedWills[index] = { ...updatedWills[index], [field]: value };
    setData({ ...data, wills: updatedWills });
  };

  if (!data) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <details>
        <summary className="text-2xl font-bold mb-4 cursor-pointer text-primary hover:underline focus:outline-none ">
          Header Section
        </summary>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="text-md md:text-lg mt-8 text-justify">
            {editing.intro ? (
              <textarea
                className="w-full p-2 border rounded"
                value={data.intro}
                onChange={(e) => setData({ ...data, intro: e.target.value })}
                onBlur={() => setEditing({ ...editing, intro: false })}
              />
            ) : (
              <p onClick={() => setEditing({ ...editing, intro: true })}>
                {data.intro}
              </p>
            )}
          </div>

          {/* Heading */}
          <div className="md:mt-4 mt-12 py-12">
            {editing.heading ? (
              <input
                className="text-4xl font-extrabold text-primary mb-8 w-full"
                value={data.heading}
                onChange={(e) => setData({ ...data, heading: e.target.value })}
                onBlur={() => setEditing({ ...editing, heading: false })}
              />
            ) : (
              <h2
                className="text-4xl font-extrabold text-primary mb-8 cursor-pointer"
                onClick={() => setEditing({ ...editing, heading: true })}
              >
                {data.heading}
              </h2>
            )}

            {/* Will Items */}
            <ul>
              {data.wills.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col sm:flex-row items-start sm:items-center mb-8"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 mb-4 sm:mb-0"
                  />
                  <div className="ml-4 w-full">
                    <input
                      className="text-2xl font-bold w-full mb-2 border-b"
                      value={item.title}
                      onChange={(e) =>
                        updateWillsField(index, "title", e.target.value)
                      }
                    />
                    <textarea
                      className="w-full mb-2 border p-2"
                      value={item.description}
                      onChange={(e) =>
                        updateWillsField(index, "description", e.target.value)
                      }
                    />
                    <input
                      className="w-full mb-2 border p-1"
                      placeholder="Image URL"
                      value={item.image}
                      onChange={(e) =>
                        updateWillsField(index, "image", e.target.value)
                      }
                    />
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Save All Changes
              </button>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
};

export default Header;
