"use client";
import React, { useEffect, useState } from "react";

interface Section {
  id: string;
  title: string;
  content: string[];
}

interface BusinessData {
  title: string;
  content: string[];
  sections: Section[];
}

const AdminForm: React.FC = () => {
  const [businessData, setBusinessData] = useState<BusinessData>({
    title: "",
    content: [],
    sections: [],
  });

  const [editData, setEditData] = useState<BusinessData | null>(null);
  const [editSectionIndex, setEditSectionIndex] = useState<number | null>(null);

  useEffect(() => {
    // Fetch existing business data
    fetch("/api/accounting-service/business")
      .then((response) => response.json())
      .then((data) => setBusinessData(data));
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditData(
      (prevState) =>
        ({
          ...prevState,
          [name]: value,
        }) as BusinessData
    );
  };

  const handleSectionChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedSections = [...(editData?.sections || [])];

    if (name === "content") {
      updatedSections[index] = {
        ...updatedSections[index],
        content: value.split("\n"),
      };
    } else {
      updatedSections[index] = {
        ...updatedSections[index],
        [name]: value,
      };
    }

    setEditData(
      (prevState) =>
        ({
          ...prevState,
          sections: updatedSections,
        }) as BusinessData
    );
  };

  const handleAddSection = () => {
    setEditData((prevState) => {
      const newEditData = prevState ?? businessData;
      const newSection = { id: "", title: "", content: [""] };
      return {
        ...newEditData,
        sections: [...newEditData.sections, newSection],
      };
    });
    setEditSectionIndex(editData?.sections.length ?? 0);
  };

  const handleDeleteSection = (index: number) => {
    const updatedSections = [...(editData?.sections || [])];
    updatedSections.splice(index, 1);
    setEditData(
      (prevState) =>
        ({
          ...prevState,
          sections: updatedSections,
        }) as BusinessData
    );
  };

  const handleSubmit = async () => {
    const method = editData?.title ? "PUT" : "POST";
    const response = await fetch("/api/accounting-service/business", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData),
    });
    const data = await response.json();
    setBusinessData(data);
    setEditData(null);
    setEditSectionIndex(null);
  };

  const handleDelete = async () => {
    await fetch("/api/accounting-service/business", { method: "DELETE" });
    setBusinessData({
      title: "",
      content: [],
      sections: [],
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-4">
      <details>
        <summary className="text-2xl font-bold mb-4 cursor-pointer text-primary hover:underline focus:outline-none ">
          Business activities
        </summary>

        <div className="mb-4 border p-4">
          <h2 className="text-xl font-semibold mb-4">Existing Data</h2>
          <div className="mb-4 text-justify ">
            <div className="mb-4 border p-4">
              <h1 className="text-xl font-semibold ">{businessData.title}</h1>
              {businessData.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {businessData.sections.map((section, index) => (
              <div
                key={index}
                className="mb-4 text-justify border p-4 flex justify-between items-center"
              >
                {editSectionIndex === index ? (
                  <div>
                    <label className="block mb-2">Section Title</label>
                    <input
                      type="text"
                      name="title"
                      value={section.title}
                      onChange={(e) => handleSectionChange(index, e)}
                      className="border p-2 w-full"
                    />

                    <label className="block mb-2">Section Content</label>
                    <textarea
                      name="content"
                      value={
                        Array.isArray(section.content)
                          ? section.content.join("\n")
                          : ""
                      }
                      onChange={(e) => handleSectionChange(index, e)}
                      className="border p-2 w-full"
                    />

                    <button
                      className="bg-red-500 text-white px-4 py-2 mt-2"
                      onClick={() => handleDeleteSection(index)}
                    >
                      Delete Section
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3 className="font-semibold">{section.title}</h3>
                    {section.content.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                )}
                <button
                  className="bg-blue-500 text-white px-4 py-2 ml-2"
                  onClick={() => {
                    setEditData(businessData);
                    setEditSectionIndex(index);
                  }}
                >
                  Edit
                </button>
              </div>
            ))}
          </div>

          {/* Add Section Button Always Visible */}
          <button
            className="bg-green-500 text-white px-4 py-2 mt-2"
            onClick={handleAddSection}
          >
            Add Section
          </button>

          <button
            className="bg-red-500 text-white px-4 py-2 mt-2 ml-2"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>

        {editData && editSectionIndex === null && (
          <div>
            <h2 className="text-xl font-semibold border-b-2 border-black pb-2 mb-4">
              {editData.title ? "Edit Data" : "Create Data"}
            </h2>

            <div className="mb-4">
              <label className="block mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={editData.title}
                onChange={handleInputChange}
                className="border p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Content</label>
              <textarea
                name="content"
                value={editData.content.join("\n")}
                onChange={handleInputChange}
                className="border p-2 w-full"
              />
            </div>

            <button
              className="bg-blue-500 text-white px-4 py-2 mt-2"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        )}

        {editData && editSectionIndex !== null && (
          <div>
            <h2 className="text-xl font-semibold border-b-2 border-black pb-2 mb-4">
              {editSectionIndex === editData.sections.length - 1
                ? "Add New Section"
                : "Edit Section"}
            </h2>

            <div className="mb-4">
              <label className="block mb-2">Section Title</label>
              <input
                type="text"
                name="title"
                value={editData.sections[editSectionIndex].title}
                onChange={(e) => handleSectionChange(editSectionIndex, e)}
                className="border p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Section Content</label>
              <textarea
                name="content"
                value={editData.sections[editSectionIndex].content.join("\n")}
                onChange={(e) => handleSectionChange(editSectionIndex, e)}
                className="border p-2 w-full"
              />
            </div>

            <button
              className="bg-blue-500 text-white px-4 py-2 mt-2"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        )}
      </details>
    </div>
  );
};

export default AdminForm;
