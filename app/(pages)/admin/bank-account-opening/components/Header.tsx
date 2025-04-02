"use client";
import { useEffect, useState } from "react";

interface ServiceInfo {
  _id: string;
  title: string;
  description: string;
  icon: string;
}

interface HeaderData {
  _id: string;
  introText: string;
  mustKnow: string[];
  services: ServiceInfo[];
}

const BankHeader = () => {
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [editedData, setEditedData] = useState<HeaderData | null>(null);
  const [editingIntro, setEditingIntro] = useState(false);
  const [editingMustKnowIndex, setEditingMustKnowIndex] = useState<
    number | null
  >(null);
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/bank-account/header");
        const result = await response.json();
        if (result?.bankHeaderData) {
          setHeaderData(result.bankHeaderData);
          setEditedData(result.bankHeaderData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    if (!editedData) return;
    setEditedData({ ...editedData, [field]: e.target.value });
  };

  const handleUpdate = async () => {
    if (!editedData) {
      console.error("No data to update");
      return;
    }

    try {
      const response = await fetch("/api/bank-account/header", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editedData._id,
          introText: editedData.introText || "",
          mustKnow: editedData.mustKnow || [],
          services: editedData.services || [],
        }),
      });

      if (!response.ok) {
        const errorResult = await response.json();
        console.error(
          "Error updating data:",
          errorResult.error || "Unknown error"
        );
        return;
      }

      const result = await response.json();
      if (result?.updatedBankHeaderData) {
        setHeaderData(result.updatedBankHeaderData);
        setEditingIntro(false);
        setEditingMustKnowIndex(null);
        setEditingServiceId(null);
      } else {
        console.error("Invalid response format:", result);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const handleServiceUpdate = async (serviceId: string) => {
    if (!editedData) {
      console.error("No data to update");
      return;
    }

    const updatedService = editedData.services.find(
      (service) => service._id === serviceId
    );

    if (!updatedService) {
      console.error("Service not found");
      return;
    }

    try {
      const response = await fetch(`/api/bank-account/header/service`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editedData._id,
          service: updatedService,
        }),
      });

      if (!response.ok) {
        const errorResult = await response.json();
        console.error(
          "Error updating service:",
          errorResult.error || "Unknown error"
        );
        return;
      }

      const result = await response.json();
      if (result?.updatedBankHeaderData) {
        setHeaderData(result.updatedBankHeaderData);
        setEditingServiceId(null);
      } else {
        console.error("Invalid response format:", result);
      }
    } catch (error) {
      console.error("Service update failed:", error);
    }
  };

  const handleDeleteMustKnow = async (index: number) => {
    if (!editedData) return;

    const updatedMustKnow = editedData.mustKnow.filter((_, i) => i !== index);

    try {
      const response = await fetch(`/api/bank-account/header`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editedData._id,
          mustKnow: updatedMustKnow,
        }),
      });

      if (response.ok) {
        setEditedData({ ...editedData, mustKnow: updatedMustKnow });
      } else {
        console.error("Error deleting must-know point");
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const handleDeleteService = async (id: string) => {
    if (!editedData) return;
    const updatedServices =
      editedData?.services.filter((service) => service._id !== id) || [];

    try {
      const response = await fetch(`/api/bank-account/header`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editedData._id,
          services: updatedServices,
        }),
      });

      if (response.ok) {
        setEditedData({ ...editedData, services: updatedServices });
      } else {
        console.error("Error deleting service");
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const handleAddNewService = () => {
    if (!editedData) return;

    const newService: ServiceInfo = {
      _id: new Date().toISOString(),
      title: "",
      description: "",
      icon: "",
    };

    const updatedServices = [...editedData.services, newService];
    setEditedData({ ...editedData, services: updatedServices });
    setEditingServiceId(newService._id);
  };

  if (loading) return <div>Loading...</div>;
  if (!headerData) return <div>No data available.</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-4 ">
      <details>
        <summary className="text-2xl font-bold mb-4 cursor-pointer text-primary hover:underline focus:outline-none ">
          Header section
        </summary>

        {/* Intro Text Section */}
        {editingIntro ? (
          <>
            <div className="mb-4 display-flex flex-col">
              <textarea
                className="w-full p-2 border rounded mb-2"
                value={editedData?.introText}
                onChange={(e) => handleInputChange(e, "introText")}
              />
              <button
                className="bg-green-600 text-white px-4 py-2 rounded mr-2"
                onClick={handleUpdate}
              >
                Save
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setEditingIntro(false)}
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="mb-4">{headerData.introText}</p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
              onClick={() => setEditingIntro(true)}
            >
              Edit
            </button>
          </>
        )}

        {/* <button className="bg-green-600 text-white px-4 py-2 rounded mr-4 ">
          Add New HeaderData
        </button> */}
        {/* Must-Know Section */}
        <h3 className="text-xl font-semibold mt-6">Must-Know Points</h3>
        <ul className="list-disc list-inside mt-2">
          {editedData?.mustKnow.map((point, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-2 rounded my-2"
            >
              {editingMustKnowIndex === index ? (
                <input
                  type="text"
                  className="w-full p-1 border rounded"
                  value={editedData.mustKnow[index]}
                  onChange={(e) => {
                    const newMustKnow = [...editedData.mustKnow];
                    newMustKnow[index] = e.target.value;
                    setEditedData({
                      ...editedData,
                      mustKnow: newMustKnow,
                      _id: editedData._id,
                    });
                  }}
                />
              ) : (
                <span>{point}</span>
              )}
              <div className="flex items-center">
                {editingMustKnowIndex === index ? (
                  <button
                    className="bg-green-600 text-white px-2 py-1 rounded mr-2"
                    onClick={handleUpdate}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="bg-blue-600 text-white px-2 py-1 rounded mr-2"
                    onClick={() => setEditingMustKnowIndex(index)}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDeleteMustKnow(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded mr-4 ml-2"
          onClick={() => {
            const newMustKnow = [...(editedData?.mustKnow || []), ""];
            if (editedData) {
              setEditedData({
                ...editedData,
                mustKnow: newMustKnow,
                _id: editedData._id,
                introText: editedData.introText || "",
                services: editedData.services || [],
              });
            }
          }}
        >
          Add New Must-Know Point
        </button>
        {/* Services Section */}
        <h3 className="text-xl font-semibold mt-6">Services</h3>
        <div className="mt-2">
          {editedData?.services.map((service) => (
            <div
              key={service._id}
              className="flex justify-between items-center bg-gray-100 p-4 rounded my-2"
            >
              {editingServiceId === service._id ? (
                <div className="w-full ">
                  <input
                    type="text"
                    className="w-full p-1 border rounded mb-2"
                    value={service.title}
                    onChange={(e) => {
                      const updatedServices = editedData.services.map((s) =>
                        s._id === service._id
                          ? { ...s, title: e.target.value }
                          : s
                      );
                      setEditedData({
                        ...editedData,
                        services: updatedServices,
                      });
                    }}
                  />
                  <textarea
                    className="w-full p-1 border rounded"
                    value={service.description}
                    onChange={(e) => {
                      const updatedServices = editedData.services.map((s) =>
                        s._id === service._id
                          ? { ...s, description: e.target.value }
                          : s
                      );
                      setEditedData({
                        ...editedData,
                        services: updatedServices,
                      });
                    }}
                  />
                </div>
              ) : (
                <div>
                  <h4 className="font-semibold">{service.title}</h4>
                  <p className="text-sm">{service.description}</p>
                </div>
              )}
              <div className="flex items-center">
                {editingServiceId === service._id ? (
                  <button
                    className="bg-green-600 text-white px-2 py-1 rounded mr-2"
                    onClick={() => handleServiceUpdate(service._id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="bg-blue-600 text-white px-2 py-1 rounded mr-2"
                    onClick={() => setEditingServiceId(service._id)}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => {
                    if (service._id) {
                      handleDeleteService(service._id);
                    } else {
                      console.error("Service ID is undefined");
                    }
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded mr-4 ml-2"
          onClick={handleAddNewService}
        >
          Add New Service
        </button>
      </details>
    </div>
  );
};

export default BankHeader;
