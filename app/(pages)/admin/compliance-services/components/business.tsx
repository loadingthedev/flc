"use client";
import { useEffect, useState } from "react";

interface ComplianceSection {
  title: string;
  content: string[];
  list?: string[];
}

interface BusinessCompliance {
  _id: string;
  title: string;
  description: string;
  sections: ComplianceSection[];
}

const Business = () => {
  const [data, setData] = useState<BusinessCompliance[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editSections, setEditSections] = useState<ComplianceSection[]>([]);

  useEffect(() => {
    fetch("/api/complaince-services/business")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching data", err));
  }, []);

  const handleEdit = (business: BusinessCompliance) => {
    setEditingId(business._id);
    setEditTitle(business.title);
    setEditDescription(business.description);
    setEditSections(JSON.parse(JSON.stringify(business.sections))); // deep copy
  };

  const handleSectionChange = (
    index: number,
    field: keyof ComplianceSection,
    value: any
  ) => {
    const updatedSections = [...editSections];
    updatedSections[index] = {
      ...updatedSections[index],
      [field]: value,
    };
    setEditSections(updatedSections);
  };

  const handleContentChange = (
    sectionIndex: number,
    contentIndex: number,
    value: string
  ) => {
    const updatedSections = [...editSections];
    updatedSections[sectionIndex].content[contentIndex] = value;
    setEditSections(updatedSections);
  };

  const handleListChange = (
    sectionIndex: number,
    listIndex: number,
    value: string
  ) => {
    const updatedSections = [...editSections];
    if (!updatedSections[sectionIndex].list) return;
    updatedSections[sectionIndex].list![listIndex] = value;
    setEditSections(updatedSections);
  };

  const handleSave = async (id: string) => {
    const updatedData = {
      title: editTitle,
      description: editDescription,
      sections: editSections,
    };

    const response = await fetch(`/api/complaince-services/business/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    if (response.ok) {
      setData((prevData) =>
        prevData.map((item) =>
          item._id === id ? { ...item, ...updatedData } : item
        )
      );
      setEditingId(null);
    } else {
      console.error("Failed to update compliance");
    }
  };

  const handleDelete = async (id: string) => {
    const response = await fetch(`/api/complaince-services/business/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setData((prevData) => prevData.filter((item) => item._id !== id));
    } else {
      console.error("Failed to delete compliance");
    }
  };

  if (!data.length) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-6 text-justify py-6 shadow-lg bg-white rounded-lg mt-12">
      <details open>
        <summary className="text-2xl font-bold mb-4 cursor-pointer text-primary hover:underline focus:outline-none">
          Business Section
        </summary>
        {data.map((business) => (
          <div key={business._id} className="mb-8 border p-4 rounded-lg shadow">
            {editingId === business._id ? (
              <div>
                <input
                  type="text"
                  className="border p-2 w-full mb-2"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  placeholder="Title"
                />
                <textarea
                  className="border p-2 w-full mb-4"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  placeholder="Description"
                />

                {editSections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mb-6 border-t pt-4">
                    <input
                      type="text"
                      className="border p-2 w-full mb-2"
                      value={section.title}
                      onChange={(e) =>
                        handleSectionChange(
                          sectionIndex,
                          "title",
                          e.target.value
                        )
                      }
                      placeholder="Section Title"
                    />
                    {section.content.map((paragraph, contentIndex) => (
                      <textarea
                        key={contentIndex}
                        className="border p-2 w-full mb-2"
                        value={paragraph}
                        onChange={(e) =>
                          handleContentChange(
                            sectionIndex,
                            contentIndex,
                            e.target.value
                          )
                        }
                        placeholder="Section Paragraph"
                      />
                    ))}
                    {section.list &&
                      section.list.map((item, listIndex) => (
                        <input
                          key={listIndex}
                          type="text"
                          className="border p-2 w-full mb-2"
                          value={item}
                          onChange={(e) =>
                            handleListChange(
                              sectionIndex,
                              listIndex,
                              e.target.value
                            )
                          }
                          placeholder="List Item"
                        />
                      ))}
                  </div>
                ))}

                <div className="flex gap-2 mt-4">
                  <button
                    className="bg-green-600 text-white px-4 py-2"
                    onClick={() => handleSave(business._id)}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-500 text-white px-4 py-2"
                    onClick={() => setEditingId(null)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-primary mb-2">
                  {business.title}
                </h2>
                <p className="mb-4">{business.description}</p>
                {business.sections.map((section, index) => (
                  <div key={index} className="mt-4">
                    <h3 className="text-2xl font-semibold text-primary mb-2">
                      {section.title}
                    </h3>
                    {section.content.map((paragraph, i) => (
                      <p key={i} className="mb-2">
                        {paragraph}
                      </p>
                    ))}
                    {section.list && (
                      <ul className="list-disc pl-5">
                        {section.list.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </>
            )}

            <div className="mt-4 flex gap-2">
              <button
                className="bg-blue-600 text-white px-4 py-2"
                onClick={() => handleEdit(business)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2"
                onClick={() => handleDelete(business._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </details>
    </div>
  );
};

export default Business;
