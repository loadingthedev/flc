"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface Service {
  _id: number;
  title: string;
  description: string;
  icon: string;
}

export default function AdminServicesForm() {
  const [headerText, setHeaderText] = useState("");
  const [services, setServices] = useState<Service[]>([]);
  const [editingService, setEditingService] = useState<Service | null>(null);

  const { register, handleSubmit, reset, setValue } = useForm<Service>();

  // Fetch initial data
  useEffect(() => {
    fetch("/api/accounting-service/header")
      .then((res) => res.json())
      .then((data) => {
        setHeaderText(data.headerContent.text);
        setServices(data.services);
      });
  }, []);

  // Update Header Content
  const updateHeader = async () => {
    await fetch("/api/accounting-service/header", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: headerText }),
    });
  };

  // Set form values when editingService changes
  useEffect(() => {
    if (editingService) {
      setValue("title", editingService.title);
      setValue("description", editingService.description);
      setValue("icon", editingService.icon);
    } else {
      reset(); // Clear form when no service is being edited
    }
  }, [editingService, setValue, reset]);

  // Add or Update Service
  const onSubmit = async (data: Service) => {
    if (editingService) {
      await fetch("/api/accounting-service/header", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, id: editingService._id }),
      });
      setEditingService(null);
    } else {
      await fetch("/api/accounting-service/header", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    }
    reset();
    refreshServices();
  };

  // Delete Service
  const deleteService = async (id?: number) => {
    if (!id) {
      console.error("Service ID is undefined or null!");
      return;
    }

    console.log("Deleting service with ID:", id);

    try {
      const res = await fetch("/api/accounting-service/header", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();
      console.log("Delete response:", data);

      if (res.ok) {
        setServices((prev) => prev.filter((service) => service._id !== id));
      } else {
        console.error("Failed to delete service:", data.error);
      }
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  // Refresh Service List
  const refreshServices = async () => {
    const res = await fetch("/api/accounting-service/header");
    const data = await res.json();
    setServices(data.services);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-4">
      <details>
        <summary className="text-2xl font-bold mb-4 cursor-pointer text-primary hover:underline focus:outline-none">
          Header Section
        </summary>
        <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
          <h3 className="text-lg font-semibold">
            {editingService ? "Edit Service" : "Add Service"}
          </h3>
          <input
            {...register("title")}
            placeholder="Title"
            className="w-full border rounded p-2 mt-2"
            required
          />
          <textarea
            {...register("description")}
            placeholder="Description"
            className="w-full border rounded p-2 mt-2"
            required
          />
          <input
            {...register("icon")}
            placeholder="Icon (e.g., FaBookOpen)"
            className="w-full border rounded p-2 mt-2"
            required
          />

          <button
            type="submit"
            className="mt-3 px-4 py-2 bg-green-600 text-white rounded"
          >
            {editingService ? "Update Service" : "Add Service"}
          </button>
        </form>
        {/* Header Content */}
        <h3 className="text-lg font-semibold mb-2">Existing Services</h3>
        {services.map((service) => (
          <div
            key={service._id}
            className="flex justify-between items-center p-3 border rounded mb-2"
          >
            <div>
              <h4 className="font-bold">{service.title}</h4>
              <p className="text-sm">{service.description}</p>
            </div>
            <div className="flex">
              <button
                onClick={() => setEditingService(service)}
                className="px-3 py-1 bg-yellow-500 text-white rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteService(Number(service._id))}
                className="px-3 py-1 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        <div className="mb-6">
          <label className="block font-medium">Header Content</label>
          <textarea
            className="w-full border rounded p-2 mt-2"
            value={headerText}
            onChange={(e) => setHeaderText(e.target.value)}
          />
          <button
            onClick={updateHeader}
            className="mt-2 px-4 py-2 bg-primary text-white rounded"
          >
            Update Header
          </button>
        </div>

        {/* Add/Edit Service */}
      </details>
    </div>
  );
}
