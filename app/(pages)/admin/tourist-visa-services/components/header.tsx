"use client";

import { useEffect, useState } from "react";

interface TouristVisaService {
  title: string;
  description: string;
  points: string[];
  image: string;
}

interface Service {
  healthInsurance: {
    description: string;
  };
  touristVisaServices: {
    title: string;
    services: TouristVisaService[];
  };
}

const Header = () => {
  const [data, setData] = useState<Service | null>(null);
  const [editMode, setEditMode] = useState(false);

  const [formData, setFormData] = useState<Service>({
    healthInsurance: { description: "" },
    touristVisaServices: {
      title: "",
      services: [],
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/tourist-visa-services/header");
      const result = await response.json();
      setData(result.touristvisaheader);
      setFormData(result.touristvisaheader); // Pre-fill form
    };

    fetchData();
  }, []);

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleServiceChange = (index: number, field: string, value: any) => {
    const updatedServices = [...formData.touristVisaServices.services];
    updatedServices[index][field as keyof TouristVisaService] = value;
    setFormData((prev) => ({
      ...prev,
      touristVisaServices: {
        ...prev.touristVisaServices,
        services: updatedServices,
      },
    }));
  };

  const deleteService = (index: number) => {
    const updatedServices = [...formData.touristVisaServices.services];
    updatedServices.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      touristVisaServices: {
        ...prev.touristVisaServices,
        services: updatedServices,
      },
    }));
  };

  const handleSave = async () => {
    const method = data ? "PUT" : "POST";

    const response = await fetch("/api/tourist-visa-services/header", {
      method,
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const updated = await response.json();
      setData(updated);
      setEditMode(false);
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (!confirmed) return;

    const response = await fetch("/api/tourist-visa-services/header", {
      method: "DELETE",
    });

    if (response.ok) {
      setData(null);
      setFormData({
        healthInsurance: { description: "" },
        touristVisaServices: { title: "", services: [] },
      });
    }
  };

  const addNewService = () => {
    setFormData((prev) => ({
      ...prev,
      touristVisaServices: {
        ...prev.touristVisaServices,
        services: [
          ...prev.touristVisaServices.services,
          { title: "", description: "", points: [], image: "" },
        ],
      },
    }));
  };

  if (!data && !editMode) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <details>
        <summary className="text-2xl font-bold mb-4 cursor-pointer text-primary hover:underline focus:outline-none ">
          Header Section
        </summary>
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-2xl font-bold">Tourist Visa Header</h1>
          <div className="space-x-2">
            <button
              onClick={() => setEditMode(!editMode)}
              className="bg-blue-500 px-4 py-1 text-white rounded"
            >
              {editMode ? "Cancel" : "Edit"}
            </button>
            {editMode && (
              <>
                <button
                  onClick={handleSave}
                  className="bg-green-600 px-4 py-1 text-white rounded"
                >
                  Save
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-500 px-4 py-1 text-white rounded"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>

        {editMode ? (
          <>
            <textarea
              className="w-full border p-2 mt-4"
              rows={3}
              value={formData.healthInsurance.description}
              onChange={(e) =>
                handleChange("healthInsurance", { description: e.target.value })
              }
              placeholder="Health insurance description"
            />
            <input
              className="w-full border p-2 mt-4"
              value={formData.touristVisaServices.title}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  touristVisaServices: {
                    ...prev.touristVisaServices,
                    title: e.target.value,
                  },
                }))
              }
              placeholder="Services Title"
            />

            {formData.touristVisaServices.services.map((service, index) => (
              <div
                key={index}
                className="border p-4 mt-4 relative rounded shadow"
              >
                <button
                  onClick={() => deleteService(index)}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                >
                  Delete
                </button>

                <input
                  className="w-full border p-2"
                  value={service.title}
                  onChange={(e) =>
                    handleServiceChange(index, "title", e.target.value)
                  }
                  placeholder="Service Title"
                />
                <textarea
                  className="w-full border p-2 mt-2"
                  rows={2}
                  value={service.description}
                  onChange={(e) =>
                    handleServiceChange(index, "description", e.target.value)
                  }
                  placeholder="Service Description"
                />
                <input
                  className="w-full border p-2 mt-2"
                  value={service.image}
                  onChange={(e) =>
                    handleServiceChange(index, "image", e.target.value)
                  }
                  placeholder="Image URL"
                />
                <textarea
                  className="w-full border p-2 mt-2"
                  rows={2}
                  value={service.points.join("\n")}
                  onChange={(e) =>
                    handleServiceChange(
                      index,
                      "points",
                      e.target.value.split("\n")
                    )
                  }
                  placeholder="Bullet Points (one per line)"
                />
              </div>
            ))}
            <button
              onClick={addNewService}
              className="mt-4 bg-purple-600 px-4 py-2 text-white rounded"
            >
              + Add New Service
            </button>
          </>
        ) : (
          <>
            <p
              className="text-md md:text-lg md:mt-16 mt-8 text-center"
              style={{ textAlign: "justify" }}
            >
              {data?.healthInsurance.description}
            </p>

            <h2 className="text-4xl font-extrabold mt-12 text-primary mb-8">
              {data?.touristVisaServices.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data?.touristVisaServices.services.map((service, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex items-center mb-2 border-b-2 pb-4 bg-muted-foreground w-128 h-128">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <h2 className="text-lg font-bold mt-4">{service.title}</h2>
                  <p className="text-justify px-4">{service.description}</p>
                  <ul className="list-disc list-inside text-justify mt-4">
                    {service.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </details>
    </div>
  );
};

export default Header;
