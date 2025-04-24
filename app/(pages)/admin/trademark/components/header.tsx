"use client";
import { useEffect, useState } from "react";

interface IPService {
  title: string;
  description: string;
  image: string;
}

interface ServiceData {
  _id: string;
  title: string;
  description: string;
  assets: string[];
  services: IPService[];
}

const Header = () => {
  const [data, setData] = useState<ServiceData | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [newAsset, setNewAsset] = useState("");
  const [newService, setNewService] = useState<IPService>({
    title: "",
    description: "",
    image: "",
  });
  const [editedDescription, setEditedDescription] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("/api/trademark/header");
      const result = await response.json();
      setData(result.trademarkheader);
      setEditedDescription(result.trademarkheader.description);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddAsset = () => {
    if (newAsset.trim() && data) {
      const updatedAssets = [...data.assets, newAsset];
      updateData({ ...data, assets: updatedAssets });
      setNewAsset("");
    }
  };

  const handleDeleteAsset = (index: number) => {
    if (data) {
      const updatedAssets = data.assets.filter((_, i) => i !== index);
      updateData({ ...data, assets: updatedAssets });
    }
  };

  const handleAddService = () => {
    if (
      newService.title &&
      newService.description &&
      newService.image &&
      data
    ) {
      const updatedServices = [...data.services, newService];
      updateData({ ...data, services: updatedServices });
      setNewService({ title: "", description: "", image: "" });
    }
  };

  const handleDeleteService = (index: number) => {
    if (data) {
      const updatedServices = data.services.filter((_, i) => i !== index);
      updateData({ ...data, services: updatedServices });
    }
  };

  const updateData = async (updated: ServiceData) => {
    try {
      const res = await fetch(`/api/trademark/header?id=${updated._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updated),
      });
      const result = await res.json();
      if (result.success) {
        setData(updated);
        setEditMode(false);
      }
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  if (!data) return <div className="text-center p-8">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <details>
        <summary className="text-2xl font-bold mb-4 cursor-pointer text-primary hover:underline focus:outline-none">
          Header Section
        </summary>

        <h2 className="text-4xl font-extrabold text-primary mt-24 mb-8">
          {data.title}
        </h2>

        {editMode ? (
          <>
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              className="w-full border p-2 rounded text-md md:text-lg"
              rows={4}
            />
            <button
              onClick={() =>
                updateData({ ...data, description: editedDescription })
              }
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save Description
            </button>
          </>
        ) : (
          <>
            <p className="text-md md:text-lg text-justify">
              {data.description}
            </p>
            <button
              onClick={() => setEditMode(true)}
              className="mt-2 text-blue-600 underline"
            >
              Edit Description
            </button>
          </>
        )}

        <h3 className="mt-8 font-semibold text-lg">Assets</h3>
        <ul className="list-disc ml-6 mt-2">
          {data.assets.map((asset, i) => (
            <li key={i} className="flex justify-between items-center">
              {asset}
              <button
                className="ml-4 text-red-500"
                onClick={() => handleDeleteAsset(i)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex gap-2">
          <input
            type="text"
            placeholder="Add asset"
            value={newAsset}
            onChange={(e) => setNewAsset(e.target.value)}
            className="border p-2 rounded"
          />
          <button
            onClick={handleAddAsset}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>

        <h3 className="mt-8 font-semibold text-lg">Services</h3>
        <ul className="mt-4">
          {data.services.map((service, index) => (
            <li key={index} className="flex items-center mb-6 gap-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-20 h-20 object-cover"
              />
              <div>
                <h4 className="text-xl font-bold">{service.title}</h4>
                <p>{service.description}</p>
              </div>
              <button
                className="text-red-500 ml-auto"
                onClick={() => handleDeleteService(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <input
            type="text"
            placeholder="Title"
            value={newService.title}
            onChange={(e) =>
              setNewService({ ...newService, title: e.target.value })
            }
            className="border p-2 rounded mb-2 mr-2"
          />
          <input
            type="text"
            placeholder="Description"
            value={newService.description}
            onChange={(e) =>
              setNewService({ ...newService, description: e.target.value })
            }
            className="border p-2 rounded mb-2 mr-2"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newService.image}
            onChange={(e) =>
              setNewService({ ...newService, image: e.target.value })
            }
            className="border p-2 rounded mb-2 mr-2"
          />
          <button
            onClick={handleAddService}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Add Service
          </button>
        </div>
      </details>
    </div>
  );
};

export default Header;
