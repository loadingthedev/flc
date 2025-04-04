"use client";
import { useEffect, useState } from "react";
import { FiDollarSign, FiFolder } from "react-icons/fi";

export interface ComplianceService {
  title: string;
  description: string;
  icon: string;
}

export interface ComplianceData {
  _id: string;
  intro: string;
  services: ComplianceService[];
}

const icons: { [key: string]: JSX.Element } = {
  FiFolder: (
    <FiFolder className="w-20 h-20 md:w-40 md:h-40 p-4 text-white border-2 border-solid border-primary bg-primary mx-auto" />
  ),
  FiDollarSign: (
    <FiDollarSign className="w-20 h-20 md:w-40 md:h-40 p-4 text-white border-2 border-solid border-primary bg-primary mx-auto" />
  ),
};

const Header = () => {
  const [complianceData, setComplianceData] = useState<ComplianceData | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [newService, setNewService] = useState<ComplianceService>({
    title: "",
    description: "",
    icon: "FiFolder",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/complaince-services/header");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data: ComplianceData[] = await response.json();
        setComplianceData(data[0]);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (index: number, field: string, value: string) => {
    if (!complianceData) return;
    const updatedServices = complianceData.services.map((service, i) =>
      i === index ? { ...service, [field]: value } : service
    );
    setComplianceData({ ...complianceData, services: updatedServices });
  };

  const handleAddService = () => {
    if (!complianceData) return;
    setComplianceData({
      ...complianceData,
      services: [...complianceData.services, newService],
    });
    setNewService({ title: "", description: "", icon: "FiFolder" });
  };

  const handleDeleteService = (index: number) => {
    if (!complianceData) return;
    const updatedServices = complianceData.services.filter(
      (_, i) => i !== index
    );
    setComplianceData({ ...complianceData, services: updatedServices });
  };

  const handleSave = async () => {
    if (!complianceData) return;
    try {
      const response = await fetch("/api/complaince-services/header", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(complianceData),
      });
      if (!response.ok) throw new Error("Failed to save data");
      alert("Data saved successfully!");
    } catch (err) {
      alert((err as Error).message);
    }
  };

  if (loading) return <p className="text-center mt-12">Loading...</p>;
  if (error) return <p className="text-center mt-12 text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-6 text-justify py-6 shadow-lg bg-white rounded-lg mt-12">
      <details>
        <summary className="text-2xl font-bold mb-4 cursor-pointer text-primary hover:underline focus:outline-none ">
          Header Section
        </summary>
        <p className="mt-12 text-lg textalign-justify md:px-8 mb-8">
          {complianceData?.intro}
        </p>

        <h2 className="text-xl md:text-4xl font-bold text-primary text-center mt-16 mb-12">
          Our Mandatory Compliance Services
        </h2>

        <div className="px-4 md:px-6 flex flex-col md:flex-row p-4 mb-4 ml-4 space-y-8 md:space-y-0 md:space-x-8">
          {complianceData?.services.map((service, index) => (
            <div
              key={index}
              className="flex-1 text-center bg-gray-100 p-6 rounded-lg shadow-lg"
            >
              {icons[service.icon] || <FiFolder />}
              <input
                className="block mt-4 w-full text-2xl md:text-3xl font-bold text-primary text-center"
                value={service.title}
                onChange={(e) => handleEdit(index, "title", e.target.value)}
              />
              <textarea
                className="mt-4 w-full text-justify p-2 border border-gray-300 rounded"
                value={service.description}
                onChange={(e) =>
                  handleEdit(index, "description", e.target.value)
                }
              />
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => handleDeleteService(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 border border-gray-300 rounded">
          <h3 className="text-xl font-bold mb-4">Add New Service</h3>
          <input
            className="w-full p-2 border border-gray-300 rounded mb-2"
            placeholder="Title"
            value={newService.title}
            onChange={(e) =>
              setNewService({ ...newService, title: e.target.value })
            }
          />
          <textarea
            className="w-full p-2 border border-gray-300 rounded mb-2"
            placeholder="Description"
            value={newService.description}
            onChange={(e) =>
              setNewService({ ...newService, description: e.target.value })
            }
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleAddService}
          >
            Add Service
          </button>
        </div>

        <div className="text-center mt-8">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </details>
    </div>
  );
};

export default Header;
