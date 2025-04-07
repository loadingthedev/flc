"use client";

import { useEffect, useState } from "react";

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface CTA {
  title: string;
  description: string;
}

interface HealthInsuranceData {
  intro: string;
  heading: string;
  features: Feature[];
  cta: CTA;
}

const defaultData: HealthInsuranceData = {
  intro: "",
  heading: "",
  features: [],
  cta: { title: "", description: "" },
};

const Header = () => {
  const [data, setData] = useState<HealthInsuranceData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<HealthInsuranceData>(defaultData);

  useEffect(() => {
    fetch("/api/health-insurance/header")
      .then((res) => res.json())
      .then((data) => {
        setData(data.healthInsuranceheader);
        setFormData(data.healthInsuranceheader);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof HealthInsuranceData
  ) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleFeatureChange = (
    index: number,
    key: keyof Feature,
    value: string
  ) => {
    const newFeatures = [...formData.features];
    newFeatures[index][key] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const handleAddFeature = () => {
    setFormData({
      ...formData,
      features: [
        ...formData.features,
        { title: "", description: "", image: "" },
      ],
    });
  };

  const handleRemoveFeature = (index: number) => {
    const newFeatures = [...formData.features];
    newFeatures.splice(index, 1);
    setFormData({ ...formData, features: newFeatures });
  };

  const handleCTAChange = (key: keyof CTA, value: string) => {
    setFormData({ ...formData, cta: { ...formData.cta, [key]: value } });
  };

  const handleSave = async () => {
    const method = data ? "PUT" : "POST";
    const res = await fetch("/api/health-insurance/header", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      const updated = await res.json();
      setData(updated);
      setIsEditing(false);
    } else {
      alert("Failed to save");
    }
  };

  const handleDelete = async () => {
    const res = await fetch("/api/health-insurance/header", {
      method: "DELETE",
    });
    if (res.ok) {
      setData(null);
      setFormData(defaultData);
    } else {
      alert("Failed to delete");
    }
  };

  if (!data && !isEditing) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <details>
        <summary className="text-2xl font-bold mb-4 cursor-pointer text-primary hover:underline focus:outline-none ">
          Header Section
        </summary>
        <div className="flex gap-4 mb-6">
          {!isEditing ? (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={handleAddFeature}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Add Feature
              </button>
            </>
          )}
        </div>

        {isEditing ? (
          <div className="space-y-4">
            <input
              type="text"
              value={formData.intro}
              onChange={(e) => handleInputChange(e, "intro")}
              placeholder="Intro"
              className="border p-2 w-full"
            />
            <input
              type="text"
              value={formData.heading}
              onChange={(e) => handleInputChange(e, "heading")}
              placeholder="Heading"
              className="border p-2 w-full"
            />

            <div>
              <h3 className="text-xl font-semibold mb-2">Features</h3>
              {formData.features.map((feature, idx) => (
                <div key={idx} className="border p-4 mb-4 space-y-2 bg-gray-50">
                  <input
                    type="text"
                    placeholder="Feature Title"
                    value={feature.title}
                    onChange={(e) =>
                      handleFeatureChange(idx, "title", e.target.value)
                    }
                    className="border p-2 w-full"
                  />
                  <textarea
                    placeholder="Feature Description"
                    value={feature.description}
                    onChange={(e) =>
                      handleFeatureChange(idx, "description", e.target.value)
                    }
                    className="border p-2 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Image URL"
                    value={feature.image}
                    onChange={(e) =>
                      handleFeatureChange(idx, "image", e.target.value)
                    }
                    className="border p-2 w-full"
                  />
                  <button
                    onClick={() => handleRemoveFeature(idx)}
                    className="bg-red-500 text-white px-3 py-1 mt-2 rounded"
                  >
                    Remove Feature
                  </button>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Call to Action</h3>
              <input
                type="text"
                placeholder="CTA Title"
                value={formData.cta.title}
                onChange={(e) => handleCTAChange("title", e.target.value)}
                className="border p-2 w-full"
              />
              <textarea
                placeholder="CTA Description"
                value={formData.cta.description}
                onChange={(e) => handleCTAChange("description", e.target.value)}
                className="border p-2 w-full"
              />
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold">{data?.heading}</h1>
            <p>{data?.intro}</p>
            <ul className="mt-4">
              {data?.features.map((feature, idx) => (
                <li key={idx}>
                  <strong>{feature.title}</strong>: {feature.description}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h2 className="text-xl font-semibold">{data?.cta.title}</h2>
              <p>{data?.cta.description}</p>
            </div>
          </div>
        )}
      </details>
    </div>
  );
};

export default Header;
