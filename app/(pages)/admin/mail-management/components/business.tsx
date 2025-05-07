"use client";

import { useEffect, useState } from "react";

type Section = {
  _id: string;
  title: string;
  paragraphs: string[];
};

type MailManagementBusiness = {
  _id: string;
  sections: Section[];
};

const Business = () => {
  const [data, setData] = useState<MailManagementBusiness | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedSection, setEditedSection] = useState<Section | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/mail-management/business");
        const json = await res.json();
        setData(json); // Correcting this based on API structure
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (section: Section) => {
    setEditingId(section._id);
    setEditedSection({ ...section });
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedSection(null);
  };

  const handleSave = async () => {
    if (!editedSection) return;
    setLoading(true);
    try {
      const res = await fetch("/api/mail-management/business", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: data!._id, // Pass the main content ID
          sectionId: editedSection._id, // Pass the section ID
          updatedData: editedSection, // Pass the updated section data
        }),
      });
      if (res.ok) {
        const updated = data!.sections.map((sec) =>
          sec._id === editedSection._id ? editedSection : sec
        );
        setData({ ...data!, sections: updated });
        setEditingId(null);
        setEditedSection(null);
      } else {
        console.error("Failed to save");
      }
    } catch (err) {
      console.error("Error saving data", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmed = confirm("Are you sure you want to delete this section?");
    if (!confirmed) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/mail-management/business`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, sectionId: id }), // Pass both IDs for delete
      });
      if (res.ok) {
        const filtered = data!.sections.filter((s) => s._id !== id);
        setData({ ...data!, sections: filtered });
      } else {
        console.error("Failed to delete");
      }
    } catch (err) {
      console.error("Delete error", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">Mail Management</h1>
      {!data ? (
        <p>Loading...</p>
      ) : (
        data.sections.map((section) => (
          <div
            key={section._id}
            className="border border-gray-300 rounded-lg p-6 mb-8 shadow-sm"
          >
            {editingId === section._id ? (
              <div>
                <input
                  className="text-xl font-semibold w-full border-b border-gray-400 mb-4 focus:outline-none"
                  value={editedSection?.title || ""}
                  onChange={(e) =>
                    setEditedSection({
                      ...editedSection!,
                      title: e.target.value,
                    })
                  }
                />
                {editedSection?.paragraphs.map((para, i) => (
                  <textarea
                    key={i}
                    className="w-full mb-3 border border-gray-200 p-2 rounded"
                    value={para}
                    rows={3}
                    onChange={(e) => {
                      const updatedParas = [...editedSection.paragraphs];
                      updatedParas[i] = e.target.value;
                      setEditedSection({
                        ...editedSection,
                        paragraphs: updatedParas,
                      });
                    }}
                  />
                ))}
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={handleSave}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Save"}
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                {section.paragraphs.map((para, idx) => (
                  <p key={idx} className="mb-3 text-gray-800">
                    {para}
                  </p>
                ))}
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => handleEdit(section)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(section._id)}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    disabled={loading}
                  >
                    {loading ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Business;
