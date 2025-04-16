"use client";
import { useEffect, useState } from "react";

const AdminHeaderEditor = () => {
  const [header, setHeader] = useState(null);
  const [form, setForm] = useState({
    intro: "",
    heading: "",
    services: [{ title: "", description: "" }],
  });

  useEffect(() => {
    fetch("/api/legal-services/header")
      .then((res) => res.json())
      .then((data) => {
        setHeader(data.legalServiceheader);
        setForm(data.legalServiceheader);
      });
  }, []);

  interface Service {
    title: string;
    description: string;
  }

  interface Form {
    intro: string;
    heading: string;
    services: Service[];
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number | null,
    field: keyof Form | keyof Service
  ) => {
    if (field === "intro" || field === "heading") {
      setForm({ ...form, [field]: e.target.value });
    } else if (index !== null) {
      const updatedServices = [...form.services];
      updatedServices[index][field as keyof Service] = e.target.value;
      setForm({ ...form, services: updatedServices });
    }
  };
  9;
  const addService = () => {
    setForm({
      ...form,
      services: [...form.services, { title: "", description: "" }],
    });
  };

  const deleteService = (index: number): void => {
    const updatedServices = form.services.filter((_, i) => i !== index);
    setForm({ ...form, services: updatedServices });
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/legal-services/header", {
      method: header ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const result = await res.json();
    alert(result.success ? "Saved successfully" : "Failed to save");
  };

  const handleDelete = async () => {
    const res = await fetch("/api/legal-services/header", {
      method: "DELETE",
    });
    const result = await res.json();
    if (result.success) {
      setForm({ intro: "", heading: "", services: [] });
      alert("Deleted successfully");
    } else {
      alert("Failed to delete");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <details>
        <summary className="text-2xl font-bold mb-4 cursor-pointer text-primary hover:underline focus:outline-none ">
          Header Section
        </summary>

        <label>Intro:</label>
        <textarea
          className="w-full border p-2 mb-4"
          value={form.intro}
          onChange={(e) => handleChange(e, null, "intro")}
        />

        <label>Heading:</label>
        <input
          className="w-full border p-2 mb-4"
          value={form.heading}
          onChange={(e) => handleChange(e, null, "heading")}
        />

        <h3 className="text-xl font-semibold mb-2">Services:</h3>
        {form.services.map((service, i) => (
          <div key={i} className="mb-4 border p-3 rounded bg-gray-50">
            <input
              className="w-full border p-2 mb-2"
              placeholder="Title"
              value={service.title}
              onChange={(e) => handleChange(e, i, "title")}
            />
            <textarea
              className="w-full border p-2"
              placeholder="Description"
              value={service.description}
              onChange={(e) => handleChange(e, i, "description")}
            />
            <button
              className="text-red-500 mt-2"
              onClick={() => deleteService(i)}
            >
              Delete Service
            </button>
          </div>
        ))}
        <button
          className="bg-blue-500 text-white px-4 py-2 mb-4 rounded"
          onClick={addService}
        >
          Add Service
        </button>

        <div className="flex gap-4">
          <button
            className="bg-green-600 text-white px-6 py-2 rounded"
            onClick={handleSubmit}
          >
            {header ? "Update" : "Create"}
          </button>
          {header && (
            <button
              className="bg-red-600 text-white px-6 py-2 rounded"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
        </div>
      </details>
    </div>
  );
};

export default AdminHeaderEditor;
