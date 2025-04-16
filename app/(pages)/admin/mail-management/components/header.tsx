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
  const [loading, setLoading] = useState<boolean>(false);
  const [editingIntro, setEditingIntro] = useState<boolean>(false);
  const [editedIntroText, setEditedIntroText] = useState<string>("");
  const [editingHeading, setEditingHeading] = useState<boolean>(false);
  const [editedHeading, setEditedHeading] = useState<string>("");

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("/api/mail-management/header");
      if (!res.ok) {
        console.error("Failed to fetch data");
        setLoading(false);
        return;
      }
      const json = await res.json();
      setData(json.MailManagementheader);
      setEditedIntroText(json.MailManagementheader.intro.text);
      setEditedHeading(json.MailManagementheader.heading); // Set heading data
      setLoading(false);
    };
    fetchData();
  }, []);

  // Save the updated content to the backend
  const updateBackend = async (updatedData: MailManagement) => {
    const res = await fetch("/api/mail-management/header", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    if (res.ok) {
      setData(updatedData);
    } else {
      console.error("Failed to update data");
    }
  };

  const handleServiceChange = (
    index: number,
    key: keyof Service,
    value: string
  ) => {
    if (!data) return;
    const updatedServices = [...data.services];
    updatedServices[index][key] = value;

    const updatedData = { ...data, services: updatedServices };
    setData(updatedData);
  };

  const handleSaveService = (index: number) => {
    if (!data) return;
    updateBackend(data);
  };

  const handleDeleteService = (index: number) => {
    if (!data) return;
    const updatedServices = data.services.filter((_, i) => i !== index);
    const updatedData = { ...data, services: updatedServices };
    updateBackend(updatedData);
  };

  const handleAddNewService = () => {
    if (!data) return;
    const updatedData = {
      ...data,
      services: [...data.services, { title: "", description: "" }],
    };
    setData(updatedData);
  };

  const handleIntroSave = () => {
    if (!data) return;
    const updatedData = {
      ...data,
      intro: { text: editedIntroText },
    };
    updateBackend(updatedData);
    setEditingIntro(false);
  };

  const handleHeadingSave = () => {
    if (!data) return;
    const updatedData = {
      ...data,
      heading: editedHeading,
    };
    updateBackend(updatedData);
    setEditingHeading(false);
  };

  if (loading || !data)
    return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6 ">
      <details>
        <summary className="text-2xl font-bold mb-4 cursor-pointer text-primary hover:underline focus:outline-none ">
          Header Section
        </summary>
        <div className="mt-10 text-center">
          {editingIntro ? (
            <div className="flex flex-col items-center gap-4">
              <textarea
                className="border p-2 w-full md:w-2/3 rounded"
                rows={4}
                value={editedIntroText}
                onChange={(e) => setEditedIntroText(e.target.value)}
              />
              <button
                onClick={handleIntroSave}
                className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
              >
                Save Intro
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-4">
              <p className="text-md md:text-lg text-justify max-w-2xl">
                {data.intro.text}
              </p>
              <button
                onClick={() => setEditingIntro(true)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Edit Intro
              </button>
            </div>
          )}
        </div>

        {/* Heading Section */}
        <div className="flex items-center justify-between flex-wrap md:mb-12 mb-8">
          {editingHeading ? (
            <div className="w-full flex flex-col md:flex-row gap-4 items-center">
              <input
                className="border p-2 rounded w-full md:w-auto flex-1"
                value={editedHeading}
                onChange={(e) => setEditedHeading(e.target.value)}
              />
              <button
                onClick={handleHeadingSave}
                className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
              >
                Save Heading
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4 w-full">
              <h2 className="text-4xl font-extrabold text-primary">
                {data.heading}
              </h2>
              <button
                onClick={() => setEditingHeading(true)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Edit Heading
              </button>
            </div>
          )}
        </div>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto md:mt-4 mt-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
            {data.services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col justify-between bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto"
              >
                <input
                  className="border p-2 mb-2 rounded w-full"
                  placeholder="Title"
                  value={service.title}
                  onChange={(e) =>
                    handleServiceChange(index, "title", e.target.value)
                  }
                />
                <textarea
                  className="border p-2 rounded w-full mb-2"
                  placeholder="Description"
                  rows={3}
                  value={service.description}
                  onChange={(e) =>
                    handleServiceChange(index, "description", e.target.value)
                  }
                ></textarea>

                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleSaveService(index)}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => handleDeleteService(index)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add New Service Button */}
          <div className="text-center mt-12">
            <button
              onClick={handleAddNewService}
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
            >
              + Add New Service
            </button>
          </div>
        </div>
      </details>
    </div>
  );
};

export default MailManagementComponent;
