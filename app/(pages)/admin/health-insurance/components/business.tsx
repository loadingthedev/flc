"use client";
import { useEffect, useState } from "react";

interface Section {
  id: string;
  title: string;
  content: string[];
}

interface HealthInsuranceData {
  _id: string;
  title: string;
  content: string[];
  sections: Section[];
}

const Business = () => {
  const [data, setData] = useState<HealthInsuranceData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editData, setEditData] = useState<HealthInsuranceData | null>(null);

  useEffect(() => {
    fetch("/api/health-insurance/business")
      .then((res) => res.json())
      .then((data) => {
        setData(data.healthInsurancebusiness);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    try {
      const response = await fetch("/api/health-insurance/business", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      });

      const result = await response.json();
      setData(result.updatedRecord);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await fetch("/api/health-insurance/business", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: data?._id }),
      });

      setData(null);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data available.</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <details>
        <summary className="text-2xl font-bold mb-4 cursor-pointer text-primary hover:underline focus:outline-none ">
          Business Section
        </summary>
        <div className="justify-center mb-4 mt-12">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-primary">
              {editMode ? "Edit Mode" : data.title}
            </h2>
            <div className="space-x-2 flex">
              <button
                onClick={() => {
                  setEditMode(!editMode);
                  setEditData(data);
                }}
                className="bg-yellow-500 text-white px-4 py-2 rounded "
              >
                {editMode ? "Cancel" : "Edit"}
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
            <button
              onClick={handleSave}
              className="bg-blue-700 text-white px-4 py-2 ml-4 rounded"
            >
              Save
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start my-16">
          <div className="w-full md:w-2/3 h-full overflow-y-auto">
            <div className="p-4">
              {editMode ? (
                <>
                  <input
                    className="w-full border p-2 mb-4"
                    value={editData?.title || ""}
                    onChange={(e) =>
                      setEditData((prev) =>
                        prev ? { ...prev, title: e.target.value } : null
                      )
                    }
                  />

                  {/* Editable content */}
                  <div className="mb-4">
                    <label className="block font-semibold mb-2">Content</label>
                    {editData?.content.map((text, idx) => (
                      <input
                        key={idx}
                        type="text"
                        value={text}
                        onChange={(e) =>
                          setEditData((prev) =>
                            prev
                              ? {
                                  ...prev,
                                  content: prev.content.map((item, i) =>
                                    i === idx ? e.target.value : item
                                  ),
                                }
                              : null
                          )
                        }
                        className="w-full border p-2 mb-2"
                      />
                    ))}
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() =>
                          setEditData((prev) =>
                            prev
                              ? { ...prev, content: [...prev.content, ""] }
                              : null
                          )
                        }
                        className="bg-green-500 text-white px-3 py-1 rounded"
                      >
                        + Add Line
                      </button>
                      <button
                        onClick={() =>
                          setEditData((prev) =>
                            prev
                              ? {
                                  ...prev,
                                  content: prev.content.slice(0, -1),
                                }
                              : null
                          )
                        }
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        - Remove Last
                      </button>
                    </div>
                  </div>

                  {/* Editable sections */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Sections</h3>
                    {editData?.sections.map((section, sIdx) => (
                      <div key={section.id} className="border p-4 mb-4 rounded">
                        <input
                          type="text"
                          className="w-full border p-2 mb-2"
                          value={section.title}
                          placeholder="Section Title"
                          onChange={(e) =>
                            setEditData((prev) =>
                              prev
                                ? {
                                    ...prev,
                                    sections: prev.sections.map((sec, i) =>
                                      i === sIdx
                                        ? { ...sec, title: e.target.value }
                                        : sec
                                    ),
                                  }
                                : null
                            )
                          }
                        />

                        {section.content.map((c, cIdx) => (
                          <input
                            key={cIdx}
                            className="w-full border p-2 mb-2"
                            value={c}
                            placeholder={`Paragraph ${cIdx + 1}`}
                            onChange={(e) =>
                              setEditData((prev) =>
                                prev
                                  ? {
                                      ...prev,
                                      sections: prev.sections.map((sec, i) =>
                                        i === sIdx
                                          ? {
                                              ...sec,
                                              content: sec.content.map(
                                                (item, j) =>
                                                  j === cIdx
                                                    ? e.target.value
                                                    : item
                                              ),
                                            }
                                          : sec
                                      ),
                                    }
                                  : null
                              )
                            }
                          />
                        ))}

                        <div className="flex gap-2 mt-2">
                          <button
                            className="bg-green-500 text-white px-2 py-1 rounded"
                            onClick={() =>
                              setEditData((prev) =>
                                prev
                                  ? {
                                      ...prev,
                                      sections: prev.sections.map((sec, i) =>
                                        i === sIdx
                                          ? {
                                              ...sec,
                                              content: [...sec.content, ""],
                                            }
                                          : sec
                                      ),
                                    }
                                  : null
                              )
                            }
                          >
                            + Add Paragraph
                          </button>
                          <button
                            className="bg-red-500 text-white px-2 py-1 rounded"
                            onClick={() =>
                              setEditData((prev) =>
                                prev
                                  ? {
                                      ...prev,
                                      sections: prev.sections.filter(
                                        (_, i) => i !== sIdx
                                      ),
                                    }
                                  : null
                              )
                            }
                          >
                            🗑 Remove Section
                          </button>
                        </div>
                      </div>
                    ))}

                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                      onClick={() =>
                        setEditData((prev) =>
                          prev
                            ? {
                                ...prev,
                                sections: [
                                  ...prev.sections,
                                  {
                                    id: Date.now().toString(),
                                    title: "",
                                    content: [""],
                                  },
                                ],
                              }
                            : null
                        )
                      }
                    >
                      + Add Section
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {data.content.map((paragraph, index) => (
                    <p className="mb-4" key={index}>
                      {paragraph.includes("<li>") ? (
                        <ul className="list-disc pl-5">
                          {paragraph
                            .split("<li>")
                            .map(
                              (item, idx) =>
                                item.trim() && <li key={idx}>{item}</li>
                            )}
                        </ul>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}

                  {data.sections.map((section) => (
                    <div key={section.id} id={section.id}>
                      <h2 className="text-2xl font-bold text-primary mt-8">
                        {section.title}
                      </h2>
                      {section.content.map((paragraph, index) => (
                        <p className="mb-4" key={index}>
                          {paragraph.includes("<li>") ? (
                            <ul className="list-disc pl-5">
                              {paragraph
                                .split("<li>")
                                .map(
                                  (item, idx) =>
                                    item.trim() && <li key={idx}>{item}</li>
                                )}
                            </ul>
                          ) : (
                            paragraph
                          )}
                        </p>
                      ))}
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </details>
    </div>
  );
};

export default Business;
