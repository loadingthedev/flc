"use client";
import { useEffect, useState } from "react";

interface Service {
  title: string;
  description: string;
  image: string;
}

interface Requirement {
  category: string;
  items: string[];
}

interface Data {
  introText: string;
  mustKnowText: string;
  services: Service[];
  requirements: Requirement[];
}

const Header = () => {
  const [data, setData] = useState<Data | null>(null);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [updatedData, setUpdatedData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/golden-visa/header");
        const result = await response.json();
        setData(result);
        setUpdatedData(result); // Copy the data for editing
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (field: string) => {
    setEditingField(field);
  };

  const handleInputChange = (field: string, value: string) => {
    if (updatedData) {
      setUpdatedData({ ...updatedData, [field]: value });
    }
  };

  const handleSave = async () => {
    if (updatedData) {
      try {
        const response = await fetch("/api/golden-visa/header", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        });

        if (response.ok) {
          setData(updatedData);
          setEditingField(null);
          alert("Data updated successfully!");
        } else {
          throw new Error("Failed to update data");
        }
      } catch (error) {
        console.error("Error updating data:", error);
        alert("Failed to save changes.");
      }
    }
  };

  if (!data || !updatedData) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-4">
      <details>
        <summary className="text-2xl font-bold mb-4 cursor-pointer text-primary hover:underline focus:outline-none ">
          Header Section
        </summary>
        <div>
          {editingField === "introText" ? (
            <textarea
              value={updatedData.introText}
              onChange={(e) => handleInputChange("introText", e.target.value)}
              className="w-full p-2 border rounded"
            />
          ) : (
            <p
              className="text-md md:text-md md:mt-16 mt-8 text-center"
              style={{
                textAlign: "justify",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {data.introText}
            </p>
          )}
          <button
            onClick={() =>
              editingField === "introText"
                ? handleSave()
                : handleEdit("introText")
            }
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          >
            {editingField === "introText" ? "Save" : "Edit"}
          </button>
        </div>

        {/* Must Know Text */}
        <div>
          <p className="mt-12 text-3xl font-bold">MUST KNOW</p>
          {editingField === "mustKnowText" ? (
            <textarea
              value={updatedData.mustKnowText}
              onChange={(e) =>
                handleInputChange("mustKnowText", e.target.value)
              }
              className="w-full p-2 border rounded"
            />
          ) : (
            <p className="text-md md:text-md md:mt-8 mt-8 text-start bg-muted-foreground p-4">
              {data.mustKnowText}
            </p>
          )}
          <button
            onClick={() =>
              editingField === "mustKnowText"
                ? handleSave()
                : handleEdit("mustKnowText")
            }
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          >
            {editingField === "mustKnowText" ? "Save" : "Edit"}
          </button>
        </div>

        {/* Services */}
        <div className="max-w-8xl mx-auto md:mt-4 mt-12 py-12">
          <h2 className="text-4xl font-extrabold md:mb-12 flex md:justify-start justify-center text-primary mb-8">
            Our Golden Visa UAE Services
          </h2>

          <div className="flex flex-col gap-12">
            {updatedData.services.map((service, index) => (
              <div
                key={index}
                className="flex flex-row justify-center items-start gap-8"
              >
                <div className="flex items-center mb-2 pb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-48 h-48 rounded-full mb-4 p-4"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  {editingField === `service-${index}` ? (
                    <>
                      <input
                        type="text"
                        value={service.title}
                        onChange={(e) => {
                          const updatedServices = [...updatedData.services];
                          updatedServices[index].title = e.target.value;
                          setUpdatedData({
                            ...updatedData,
                            services: updatedServices,
                          });
                        }}
                        className="w-full p-2 border rounded mb-2"
                      />
                      <textarea
                        value={service.description}
                        onChange={(e) => {
                          const updatedServices = [...updatedData.services];
                          updatedServices[index].description = e.target.value;
                          setUpdatedData({
                            ...updatedData,
                            services: updatedServices,
                          });
                        }}
                        className="w-full p-2 border rounded"
                      />
                    </>
                  ) : (
                    <>
                      <h2 className="text-3xl text-muted-foreground font-bold mt-4">
                        {service.title}
                      </h2>
                      <p className="text-justify mt-4">{service.description}</p>
                    </>
                  )}
                  <button
                    onClick={() =>
                      editingField === `service-${index}`
                        ? handleSave()
                        : handleEdit(`service-${index}`)
                    }
                    className="mt-2 w-20 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                  >
                    {editingField === `service-${index}` ? "Save" : "Edit"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        {/* Requirements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 max-w-7xl mx-auto">
          {updatedData.requirements.map((requirement, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              {editingField === `requirement-${index}` ? (
                <>
                  {/* Editable Category */}
                  <input
                    type="text"
                    value={requirement.category}
                    onChange={(e) => {
                      const updatedRequirements = [...updatedData.requirements];
                      updatedRequirements[index].category = e.target.value;
                      setUpdatedData({
                        ...updatedData,
                        requirements: updatedRequirements,
                      });
                    }}
                    className="w-full p-2 border rounded mb-2 font-bold bg-muted-foreground"
                  />

                  {/* Editable Items */}
                  <ul className="px-8 text-justify">
                    {requirement.items.map((item, idx) => (
                      <li key={idx} className="list-disc mb-4">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => {
                            const updatedRequirements = [
                              ...updatedData.requirements,
                            ];
                            updatedRequirements[index].items[idx] =
                              e.target.value;
                            setUpdatedData({
                              ...updatedData,
                              requirements: updatedRequirements,
                            });
                          }}
                          className="w-full p-2 border rounded"
                        />
                      </li>
                    ))}
                  </ul>

                  {/* Add New Item */}
                  <button
                    onClick={() => {
                      const updatedRequirements = [...updatedData.requirements];
                      updatedRequirements[index].items.push("");
                      setUpdatedData({
                        ...updatedData,
                        requirements: updatedRequirements,
                      });
                    }}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                  >
                    + Add Item
                  </button>
                </>
              ) : (
                <>
                  {/* Static Category */}
                  <h3 className="text-xl font-bold mb-4 bg-muted-foreground p-4">
                    {requirement.category}
                  </h3>

                  {/* Static Items */}
                  <ul className="px-8 text-justify">
                    {requirement.items.map((item, idx) => (
                      <li key={idx} className="list-disc mb-4">
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Edit/Save Button */}
              <button
                onClick={() =>
                  editingField === `requirement-${index}`
                    ? handleSave()
                    : handleEdit(`requirement-${index}`)
                }
                className={`mt-4 px-8 py-2 rounded text-white m-2 ${
                  editingField === `requirement-${index}`
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {editingField === `requirement-${index}` ? "Save" : "Edit"}
              </button>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
};

export default Header;
