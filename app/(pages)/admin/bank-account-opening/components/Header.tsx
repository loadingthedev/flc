"use client";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FaBookOpen, FaDonate } from "react-icons/fa";

interface ServiceInfo {
  _id?: string;
  title: string;
  description: string;
  icon: string;
}

interface HeaderData {
  _id?: string;
  introText: string;
  mustKnow: string[];
  services: ServiceInfo[];
}

const iconMap: Record<string, IconType> = {
  FaBookOpen,
  FaDonate,
};

const Header = () => {
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);
  const [loading, setLoading] = useState(true);
  const [editingServiceIndex, setEditingServiceIndex] = useState<number | null>(
    null
  );
  const [editableService, setEditableService] = useState<ServiceInfo | null>(
    null
  );
  const [editingTitle, setEditingTitle] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editingMustKnowIndex, setEditingMustKnowIndex] = useState<
    number | null
  >(null);
  const [editedMustKnow, setEditedMustKnow] = useState("");
  const [newMustKnow, setNewMustKnow] = useState("");
  const [newService, setNewService] = useState<ServiceInfo>({
    title: "",
    description: "",
    icon: "FaBookOpen",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/bank-account/header");
        const data = await res.json();
        if (data?.bankHeaderData) {
          setHeaderData(data.bankHeaderData);
          setEditedTitle(data.bankHeaderData.introText);
        }
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const updateHeaderData = async (updated: HeaderData) => {
    try {
      const res = await fetch("/api/bank-account/header", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: updated._id,
          introText: updated.introText,
          mustKnow: updated.mustKnow,
          services: updated.services,
        }),
      });

      if (res.ok) {
        setHeaderData(updated);
        setEditingServiceIndex(null);
        setEditableService(null);
        setEditingMustKnowIndex(null);
        setEditingTitle(false);
        setNewMustKnow("");
        setNewService({ title: "", description: "", icon: "FaBookOpen" });
      } else {
        console.error("Failed to update.");
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const handleTitleSave = () => {
    if (!headerData) return;
    updateHeaderData({ ...headerData, introText: editedTitle });
  };

  const handleServiceEdit = (index: number) => {
    setEditingServiceIndex(index);
    setEditableService({ ...headerData!.services[index] });
  };

  const handleServiceDelete = (index: number) => {
    if (!headerData) return;
    const updatedServices = [...headerData.services];
    updatedServices.splice(index, 1);
    updateHeaderData({ ...headerData, services: updatedServices });
  };

  const saveService = () => {
    if (!headerData || editingServiceIndex === null || !editableService) return;
    const updatedServices = [...headerData.services];
    updatedServices[editingServiceIndex] = editableService;
    updateHeaderData({ ...headerData, services: updatedServices });
  };

  const handleMustKnowEdit = (index: number) => {
    setEditingMustKnowIndex(index);
    setEditedMustKnow(headerData!.mustKnow[index]);
  };

  const handleMustKnowDelete = (index: number) => {
    if (!headerData) return;
    const updatedMustKnow = [...headerData.mustKnow];
    updatedMustKnow.splice(index, 1);
    updateHeaderData({ ...headerData, mustKnow: updatedMustKnow });
  };

  const saveMustKnow = () => {
    if (editingMustKnowIndex === null || !headerData) return;
    const updatedMustKnows = [...headerData.mustKnow];
    updatedMustKnows[editingMustKnowIndex] = editedMustKnow;
    updateHeaderData({ ...headerData, mustKnow: updatedMustKnows });
  };

  const addNewMustKnow = () => {
    if (!headerData || !newMustKnow.trim()) return;
    const updatedMustKnows = [...headerData.mustKnow, newMustKnow.trim()];
    updateHeaderData({ ...headerData, mustKnow: updatedMustKnows });
  };

  const addNewService = () => {
    if (
      !headerData ||
      !newService.title.trim() ||
      !newService.description.trim()
    )
      return;
    const updatedServices = [...headerData.services, newService];
    updateHeaderData({ ...headerData, services: updatedServices });
  };

  if (loading) return <div>Loading...</div>;
  if (!headerData) return <div>Failed to load data.</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editable Title */}
      <div className="mt-8">
        {editingTitle ? (
          <div className="flex flex-col gap-2">
            <textarea
              className="w-full border border-gray-300 p-2 rounded"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <div className="flex gap-2">
              <button
                onClick={handleTitleSave}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setEditingTitle(false)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-start gap-4">
            <p className="text-md md:text-xl text-justify">
              {headerData.introText}
            </p>
            <button
              onClick={() => setEditingTitle(true)}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>
          </div>
        )}
      </div>

      {/* Must Know Points */}
      <div className="py-12">
        <h2 className="text-4xl font-extrabold mb-6">Must Know</h2>

        {/* Add New Must Know */}
        <div className="mb-6 flex gap-2">
          <input
            value={newMustKnow}
            onChange={(e) => setNewMustKnow(e.target.value)}
            placeholder="Add a new point..."
            className="w-full border border-gray-300 p-2 rounded"
          />
          <button
            onClick={addNewMustKnow}
            className="bg-blue-600 text-white px-3 py-2 rounded"
          >
            Add
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {headerData.mustKnow.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-md border border-gray-300"
            >
              {editingMustKnowIndex === index ? (
                <>
                  <textarea
                    value={editedMustKnow}
                    onChange={(e) => setEditedMustKnow(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  <div className="mt-2 flex gap-2">
                    <button
                      onClick={saveMustKnow}
                      className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingMustKnowIndex(null)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col gap-2">
                  <p>{item}</p>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleMustKnowEdit(index)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleMustKnowDelete(index)}
                      className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="py-12">
        <h2 className="text-4xl font-extrabold mb-6">
          Our Bank Account Opening in UAE
        </h2>

        {/* Add New Service */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input
            value={newService.title}
            onChange={(e) =>
              setNewService({ ...newService, title: e.target.value })
            }
            placeholder="Service Title"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            value={newService.description}
            onChange={(e) =>
              setNewService({ ...newService, description: e.target.value })
            }
            placeholder="Service Description"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            value={newService.icon}
            onChange={(e) =>
              setNewService({ ...newService, icon: e.target.value })
            }
            placeholder="Icon Name (e.g., FaBookOpen)"
            className="border border-gray-300 p-2 rounded"
          />
          <button
            onClick={addNewService}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Service
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {headerData.services.map((service, index) => {
            const IconComponent =
              iconMap[service.icon as keyof typeof iconMap] || FaBookOpen;
            const isEditing = editingServiceIndex === index;
            const current = isEditing ? editableService! : service;

            return (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-md border border-gray-300"
              >
                <div className="flex justify-between items-center mb-2">
                  <IconComponent className="text-3xl text-primary" />
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleServiceEdit(index)}
                      className="bg-yellow-400 text-white px-2 py-1 rounded text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleServiceDelete(index)}
                      className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {isEditing ? (
                  <>
                    <input
                      value={current.title}
                      onChange={(e) =>
                        setEditableService({
                          ...current,
                          title: e.target.value,
                        })
                      }
                      className="w-full mb-2 border p-1 rounded"
                    />
                    <textarea
                      value={current.description}
                      onChange={(e) =>
                        setEditableService({
                          ...current,
                          description: e.target.value,
                        })
                      }
                      className="w-full mb-2 border p-1 rounded"
                    />
                    <input
                      value={current.icon}
                      onChange={(e) =>
                        setEditableService({ ...current, icon: e.target.value })
                      }
                      className="w-full mb-2 border p-1 rounded"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={saveService}
                        className="bg-green-500 text-white px-3 py-1 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingServiceIndex(null)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p>{service.description}</p>
                    <p className="text-sm italic mt-1">Icon: {service.icon}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
