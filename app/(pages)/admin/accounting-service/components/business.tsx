"use client";
import { useEffect, useState } from "react";

type Section = {
  _id?: string; // `_id` is optional for new sections
  title: string;
  content: string[];
};

type BusinessData = {
  _id?: string;
  title: string;
  content: string[];
  sections: Section[];
};

const AdminPanel = () => {
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [editData, setEditData] = useState<BusinessData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/accounting-service/business")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        if (data?.accounting) {
          setBusinessData(data.accounting);
          setEditData(data.accounting);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleChange = (
    field: keyof BusinessData,
    value: string | string[],
    index?: number
  ) => {
    if (!editData) return;

    if (
      field === "content" &&
      typeof value === "string" &&
      index !== undefined
    ) {
      const updatedContent = [...editData.content];
      updatedContent[index] = value;

      setEditData({ ...editData, content: updatedContent });
    } else {
      setEditData({ ...editData, [field]: value });
    }
  };

  const handleSectionChange = (
    index: number,
    key: keyof Section,
    value: string,
    contentIndex?: number
  ) => {
    if (!editData) return;

    const updatedSections = [...editData.sections];

    if (key === "content" && contentIndex !== undefined) {
      updatedSections[index].content[contentIndex] = value;
    } else {
      updatedSections[index] = { ...updatedSections[index], [key]: value };
    }

    setEditData({ ...editData, sections: updatedSections });
  };

  const handleSubmit = async () => {
    if (!editData || !editData._id) {
      console.error("Missing _id in editData");
      return;
    }

    console.log("Submitting Data:", JSON.stringify(editData, null, 2)); // Debugging

    try {
      const response = await fetch("/api/accounting-service/business", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editData),
      });

      const data = await response.json();
      console.log("Updated Data from API:", data);

      if (response.ok) {
        setBusinessData(data.updatedAccountingService);
        setEditData(data.updatedAccountingService);
      } else {
        console.error("Failed to update:", data.error);
      }
    } catch (error) {
      console.error("Error updating:", error);
    }
  };

  const handleNewBusinessData = () => {
    setEditData({
      title: "",
      content: [""],
      sections: [{ title: "", content: [""] }],
    });
  };

  const handleEditBusinessData = () => {
    setEditData(businessData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-4">
      <details>
        <summary className="text-2xl font-bold mb-4 cursor-pointer text-primary hover:underline focus:outline-none">
          Business Activities
        </summary>
        {loading ? (
          <p>Loading...</p>
        ) : businessData ? (
          <div>
            <h2 className="text-xl font-bold">Admin Panel</h2>

            <button
              onClick={handleNewBusinessData}
              className="bg-green-500 text-white px-4 py-2 mt-4"
            >
              Add New Business Data
            </button>
            <button
              onClick={handleEditBusinessData}
              className="bg-yellow-500 text-white px-4 py-2 mt-4 ml-2"
            >
              Edit Existing Business Data
            </button>
            <button
              onClick={async () => {
                await handleSubmit();
                alert("Changes saved");
              }}
              className="bg-blue-500 text-white px-4 py-2 mt-4 ml-2"
            >
              Save Changes
            </button>

            {/* Title Input */}
            <label className="block my-2">Title:</label>
            <input
              type="text"
              value={editData?.title || ""}
              onChange={(e) => handleChange("title", e.target.value)}
              className="border p-2 w-full"
            />

            {/* Content Array */}
            <h3 className="mt-4 font-semibold">Content</h3>
            {editData?.content?.map((text, index) => (
              <input
                key={index}
                type="text"
                value={text}
                onChange={(e) => handleChange("content", e.target.value, index)}
                className="border p-2 w-full my-1"
              />
            ))}

            {/* Sections */}
            <h3 className="mt-4 font-semibold">Sections</h3>
            {editData?.sections?.map((section, index) => (
              <div key={index} className="border p-2 my-2">
                <label className="block">Section Title:</label>
                <input
                  type="text"
                  value={section.title}
                  onChange={(e) =>
                    handleSectionChange(index, "title", e.target.value)
                  }
                  className="border p-2 w-full"
                />

                <h4 className="mt-2 font-medium">Section Content</h4>
                {section.content.map((content, contentIndex) => (
                  <input
                    key={contentIndex}
                    type="text"
                    value={content}
                    onChange={(e) =>
                      handleSectionChange(
                        index,
                        "content",
                        e.target.value,
                        contentIndex
                      )
                    }
                    className="border p-2 w-full my-1"
                  />
                ))}
              </div>
            ))}
          </div>
        ) : (
          <p>No data available.</p>
        )}
      </details>
    </div>
  );
};

export default AdminPanel;
