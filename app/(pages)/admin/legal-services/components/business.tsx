"use client";

import { useEffect, useState } from "react";

interface Section {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

interface LegalService {
  _id?: string;
  title: string;
  sections: Section[];
}

const AdminBusiness = () => {
  const [data, setData] = useState<LegalService | null>(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/legal-services/business");
      if (!res.ok) {
        console.error("Failed to fetch data");
        return;
      }
      const json = await res.json();
      setData(json.legalservicebusiness);
    };
    fetchData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    sectionIndex?: number,
    type?: string,
    listIndex?: number,
    paraIndex?: number
  ) => {
    if (!data) return;
    const updated = { ...data };

    if (sectionIndex !== undefined) {
      if (type === "heading") {
        updated.sections[sectionIndex].heading = e.target.value;
      } else if (type === "paragraph" && paraIndex !== undefined) {
        updated.sections[sectionIndex].paragraphs[paraIndex] = e.target.value;
      } else if (type === "list" && listIndex !== undefined) {
        if (updated.sections[sectionIndex].list) {
          updated.sections[sectionIndex].list![listIndex] = e.target.value;
        }
      }
    } else {
      updated.title = e.target.value;
    }

    setData(updated);
  };

  const handleAddSection = () => {
    if (!data) return;
    setData({
      ...data,
      sections: [
        ...data.sections,
        { heading: "", paragraphs: [""], list: [""] },
      ],
    });
  };

  const handleDeleteSection = async (sectionIndex: number) => {
    if (!data) return;
    const updatedSections = data.sections.filter((_, i) => i !== sectionIndex);
    const updatedData = { ...data, sections: updatedSections };

    const res = await fetch("/api/legal-services/business", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    if (res.ok) {
      const json = await res.json();
      setData(json);
    }
  };

  const handleDeleteParagraph = (sectionIndex: number, paraIndex: number) => {
    if (!data) return;
    const updated = { ...data };
    updated.sections[sectionIndex].paragraphs.splice(paraIndex, 1);
    setData(updated);
  };

  const handleDeleteListItem = (sectionIndex: number, listIndex: number) => {
    if (!data) return;
    const updated = { ...data };
    updated.sections[sectionIndex].list?.splice(listIndex, 1);
    setData(updated);
  };

  const handleSave = async () => {
    if (!data) return;
    const method = data._id ? "PUT" : "POST";
    const res = await fetch("/api/legal-services/business", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      alert("Service saved");
      const json = await res.json();
      setData(json);
      setEditMode(false);
    }
  };

  if (!data) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <details open>
        <summary className="text-2xl font-bold mb-4 cursor-pointer text-primary hover:underline focus:outline-none ">
          Business Section
        </summary>

        <div className="flex justify-between items-center mb-6">
          <div>
            {!editMode ? (
              <button
                onClick={() => setEditMode(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Edit
              </button>
            ) : (
              <>
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-4 py-2 rounded mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditMode(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>

        {data.sections.map((section, index) => (
          <div
            key={index}
            className="mb-6 border p-4 rounded relative bg-gray-50"
          >
            <label className="block mb-2 font-medium">
              Heading {index + 1}
            </label>
            <input
              type="text"
              value={section.heading}
              onChange={(e) => handleChange(e, index, "heading")}
              disabled={!editMode}
              className="w-full border px-3 py-2 rounded"
            />

            <label className="block mt-4 mb-2 font-medium">Paragraphs</label>
            {section.paragraphs.map((para, paraIndex) => (
              <div key={paraIndex} className="flex items-start gap-2 mb-2">
                <textarea
                  value={para}
                  onChange={(e) =>
                    handleChange(e, index, "paragraph", undefined, paraIndex)
                  }
                  disabled={!editMode}
                  className="w-full border px-3 py-2 rounded"
                />
                {editMode && (
                  <button
                    onClick={() => handleDeleteParagraph(index, paraIndex)}
                    className="bg-red-500 text-white px-2 py-1 text-sm rounded"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}

            <label className="block mt-4 mb-2 font-medium">List</label>
            {section.list?.map((item, listIndex) => (
              <div key={listIndex} className="flex items-center gap-2 mb-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) =>
                    handleChange(e, index, "list", listIndex, undefined)
                  }
                  disabled={!editMode}
                  className="w-full border px-3 py-2 rounded"
                />
                {editMode && (
                  <button
                    onClick={() => handleDeleteListItem(index, listIndex)}
                    className="bg-red-500 text-white px-2 py-1 text-sm rounded"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}

            {editMode && (
              <div className="mt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    const updated = { ...data };
                    updated.sections[index].paragraphs.push("");
                    setData(updated);
                  }}
                  className="bg-blue-500 text-white px-2 py-1 text-sm rounded"
                >
                  Add Paragraph
                </button>
                <button
                  onClick={() => {
                    const updated = { ...data };
                    if (!updated.sections[index].list)
                      updated.sections[index].list = [];
                    updated.sections[index].list!.push("");
                    setData(updated);
                  }}
                  className="bg-blue-500 text-white px-2 py-1 text-sm rounded"
                >
                  Add List Item
                </button>
                <button
                  onClick={() => handleDeleteSection(index)}
                  className="bg-red-600 text-white px-2 py-1 text-sm rounded ml-auto"
                >
                  Delete Section
                </button>
              </div>
            )}
          </div>
        ))}

        {editMode && (
          <button
            onClick={handleAddSection}
            className="bg-gray-800 text-white px-4 py-2 rounded mt-4"
          >
            Add Section
          </button>
        )}
      </details>
    </div>
  );
};

export default AdminBusiness;
