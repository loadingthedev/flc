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
  const [editTitle, setEditTitle] = useState("");
  const [editParagraphs, setEditParagraphs] = useState<string[]>([]);

  // Fetch initial data
  const fetchData = async () => {
    try {
      const res = await fetch("/api/mail-management/business");
      const json = await res.json();
      setData(json.MainManagementBusiness);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Delete handler
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch("/api/mail-management/business", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: id }),
      });

      if (res.ok) {
        setData((prev) =>
          prev
            ? {
                ...prev,
                sections: prev.sections.filter((section) => section._id !== id),
              }
            : null
        );
      }
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  // Start editing
  const startEdit = (section: Section) => {
    setEditingId(section._id);
    setEditTitle(section.title);
    setEditParagraphs([...section.paragraphs]);
  };

  // Submit edited section
  const handleEditSubmit = async () => {
    if (!editingId) return;

    try {
      const res = await fetch("/api/mail-management/business", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: editingId,
          title: editTitle,
          paragraphs: editParagraphs,
        }),
      });

      if (res.ok) {
        setEditingId(null);
        setEditTitle("");
        setEditParagraphs([]);
        fetchData(); // re-fetch updated data
      } else {
        console.error("Failed to update", await res.text());
      }
    } catch (err) {
      console.error("Edit failed:", err);
    }
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditParagraphs([]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="justify-center mb-4 mt-12"></div>
      <div className="flex flex-col md:flex-row items-start my-16">
        <div className="w-full md:w-1/2 h-full overflow-y-auto">
          <div className="p-8">
            {data?.sections.map((section) => (
              <div key={section._id} className="mb-8 border-b pb-6">
                {editingId === section._id ? (
                  <>
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="w-full mb-2 p-2 border rounded"
                    />
                    {editParagraphs.map((para, idx) => (
                      <textarea
                        key={idx}
                        value={para}
                        onChange={(e) => {
                          const newParas = [...editParagraphs];
                          newParas[idx] = e.target.value;
                          setEditParagraphs(newParas);
                        }}
                        className="w-full mb-2 p-2 border rounded"
                        rows={3}
                      />
                    ))}
                    <div className="flex gap-2">
                      <button
                        className="bg-green-600 text-white px-4 py-1 rounded"
                        onClick={handleEditSubmit}
                      >
                        Save
                      </button>
                      <button
                        className="bg-gray-500 text-white px-4 py-1 rounded"
                        onClick={cancelEdit}
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-3xl font-bold text-primary mt-8 mb-4">
                      {section.title}
                    </h2>
                    {section.paragraphs.map((para, idx) => (
                      <p key={idx} className="mb-4">
                        {para}
                      </p>
                    ))}
                    <div className="flex gap-2">
                      <button
                        className="bg-blue-600 text-white px-3 py-1 rounded"
                        onClick={() => startEdit(section)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-600 text-white px-3 py-1 rounded"
                        onClick={() => handleDelete(section._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
