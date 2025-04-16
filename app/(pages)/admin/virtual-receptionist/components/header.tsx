"use client";

import { useEffect, useState } from "react";

interface VirtualReceptionistHeader {
  _id?: string;
  intro: string;
  heading: string;
  services: {
    title: string;
    description: string;
  }[];
}

const Header = () => {
  const [data, setData] = useState<VirtualReceptionistHeader | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] =
    useState<VirtualReceptionistHeader | null>(null);

  useEffect(() => {
    fetch("/api/virtual-receptionist/header")
      .then((res) => res.json())
      .then((response) => {
        console.log("Fetched data:", response);
        setData(response.virtualReceptionistheader);
        setEditedData(response.virtualReceptionistheader);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number,
    field?: "title" | "description"
  ) => {
    if (!editedData) return;

    if (typeof index === "number" && field) {
      const updatedServices = [...editedData.services];
      updatedServices[index] = {
        ...updatedServices[index],
        [field]: e.target.value,
      };
      setEditedData({ ...editedData, services: updatedServices });
    } else {
      const { name, value } = e.target;
      setEditedData({ ...editedData, [name]: value });
    }
  };

  const saveChanges = async () => {
    if (!editedData) return;

    try {
      const res = await fetch("/api/virtual-receptionist/header", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedData),
      });
      const result = await res.json();
      if (result.success) {
        setData(result.data);
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Error saving changes:", error);
    }
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
    if (!isEditing) setEditedData(data); // Reset edited data to the current state
  };

  if (!data || !editedData) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <details>
        <summary className="text-2xl font-bold mb-4 cursor-pointer text-primary hover:underline focus:outline-none ">
          Header Section
        </summary>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Virtual Receptionist Header</h1>
          <button
            onClick={toggleEditing}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
        </div>

        {isEditing ? (
          <textarea
            name="intro"
            value={editedData.intro}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        ) : (
          <p
            className="text-md md:text-lg md:mt-16 mt-8 text-center"
            style={{
              textAlign: "justify",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {data.intro}
          </p>
        )}

        <div className="max-w-8xl mx-auto md:mt-4 mt-12 py-12">
          {isEditing ? (
            <input
              name="heading"
              value={editedData.heading}
              onChange={handleInputChange}
              className="border p-2 w-full text-4xl font-extrabold md:mb-12 flex md:justify-start justify-center text-primary mb-8"
            />
          ) : (
            <h2 className="text-4xl font-extrabold md:mb-12 flex md:justify-start justify-center text-primary mb-8">
              {data.heading}
            </h2>
          )}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {editedData.services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col justify-center bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto"
              >
                {isEditing ? (
                  <input
                    value={service.title}
                    placeholder="Service Title"
                    onChange={(e) => handleInputChange(e, index, "title")}
                    className="border p-2 w-full text-lg font-bold mt-4 mb-4"
                  />
                ) : (
                  <h2 className="text-lg font-bold mt-4 mb-4">
                    {service.title}
                  </h2>
                )}

                {isEditing ? (
                  <textarea
                    value={service.description}
                    placeholder="Service Description"
                    onChange={(e) => handleInputChange(e, index, "description")}
                    className="border p-2 w-full"
                  />
                ) : (
                  <p>{service.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {isEditing && (
          <div className="flex justify-end mt-4">
            <button
              onClick={saveChanges}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
          </div>
        )}
      </details>
    </div>
  );
};

export default Header;
