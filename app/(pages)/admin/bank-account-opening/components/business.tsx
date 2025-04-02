"use client";
import { useEffect, useState } from "react";

interface Section {
  _id: string;
  heading: string;
  paragraphs: string[];
}

interface BusinessData {
  _id: string;
  title: string;
  content: string;
  sections: Section[];
}

const BusinessAdminPanel = () => {
  const [data, setData] = useState<BusinessData | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editingSectionId, setEditingSectionId] = useState<string | null>(null);
  const [newSection, setNewSection] = useState<Section>({
    _id: "",
    heading: "",
    paragraphs: [],
  });

  useEffect(() => {
    fetch("/api/bank-account/business")
      .then((response) => response.json())
      .then((data) => {
        setData(data.businessData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Update entire business data
  const handleSave = () => {
    fetch("/api/bank-account/business", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((updatedData) => {
        setData(updatedData.businessData);
        setEditing(false);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  // Delete a section
  const handleDelete = (sectionId: string) => {
    fetch("/api/bank-account/business", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sectionId }),
    })
      .then((response) => response.json())
      .then((updatedData) => {
        setData(updatedData.businessData);
      })
      .catch((error) => {
        console.error("Error deleting section:", error);
      });
  };

  // Add new section
  const handleAddSection = () => {
    fetch("/api/bank-account/business", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSection),
    })
      .then((response) => response.json())
      .then((updatedData) => {
        setData(updatedData.businessData);
        setNewSection({ _id: "", heading: "", paragraphs: [] });
      })
      .catch((error) => {
        console.error("Error adding section:", error);
      });
  };

  // Handle section edit
  const handleEditSection = (sectionId: string) => {
    setEditingSectionId(sectionId);
  };

  // Save edited section
  const handleSaveSection = (sectionId: string, updatedSection: Section) => {
    if (!data) return;
    const updatedSections = data.sections.map((sec) =>
      sec._id === sectionId ? updatedSection : sec
    );
    setData({ ...data, sections: updatedSections });

    fetch("/api/bank-account/business", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sections: updatedSections }),
    })
      .then((response) => response.json())
      .then((updatedData) => {
        setData(updatedData.businessData);
        setEditingSectionId(null);
      })
      .catch((error) => {
        console.error("Error updating section:", error);
      });
  };

  if (loading)
    return <div className="text-center text-lg font-bold">Loading...</div>;
  if (!data)
    return <div className="text-center text-red-500">Error fetching data</div>;

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 bg-white shadow-lg rounded-lg mt-8">
      <details>
        <summary className="text-2xl font-bold mb-4 cursor-pointer text-primary hover:underline focus:outline-none ">
          Business Activities
        </summary>
        <h1 className="text-2xl font-bold text-center"></h1>

        {/* Business Details */}
        <div className="bg-white shadow-md rounded-lg p-6 mt-4">
          {editing ? (
            <>
              <input
                type="text"
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
                className="border p-2 w-full rounded-md mb-2"
              />
              <textarea
                value={data.content}
                onChange={(e) => setData({ ...data, content: e.target.value })}
                className="border p-2 w-full rounded-md mb-2"
              />
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded-md"
              >
                Save Changes
              </button>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold">{data.title}</h2>
              <p>{data.content}</p>
              <button
                onClick={() => setEditing(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Edit Business Info
              </button>
            </>
          )}
        </div>

        {/* Sections */}
        <div className="bg-white shadow-md rounded-lg p-6 mt-4">
          <h2 className="text-2xl font-bold">Sections</h2>
          {data.sections.map((section) => (
            <div key={section._id} className="border-b pb-4 mb-4">
              {editingSectionId === section._id ? (
                <>
                  <input
                    type="text"
                    value={section.heading}
                    onChange={(e) =>
                      setData({
                        ...data,
                        sections: data.sections.map((s) =>
                          s._id === section._id
                            ? { ...s, heading: e.target.value }
                            : s
                        ),
                      })
                    }
                    className="border p-2 w-full rounded-md mb-2"
                  />
                  <textarea
                    value={section.paragraphs.join("\n")}
                    onChange={(e) =>
                      setData({
                        ...data,
                        sections: data.sections.map((s) =>
                          s._id === section._id
                            ? { ...s, paragraphs: e.target.value.split("\n") }
                            : s
                        ),
                      })
                    }
                    className="border p-2 w-full rounded-md mb-2"
                  />
                  <button
                    onClick={() => handleSaveSection(section._id, section)}
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                  >
                    Save Section
                  </button>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-semibold">{section.heading}</h3>
                  {section.paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                  <button
                    onClick={() => handleEditSection(section._id)}
                    className="text-blue-500 mr-4"
                  >
                    Edit
                  </button>
                  {/* <button
                    onClick={() => handleDelete(section._id)}
                    className="text-red-500"
                  >
                    Delete
                  </button> */}
                </>
              )}
            </div>
          ))}
        </div>
      </details>
    </div>
  );
};

export default BusinessAdminPanel;
