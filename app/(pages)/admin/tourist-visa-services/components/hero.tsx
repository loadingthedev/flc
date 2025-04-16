"use client";
import React, { useEffect, useState } from "react";

interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

export default function Hero() {
  const [formData, setFormData] = useState<HeroData>({
    title: "",
    subtitle: "",
    description: "",
    buttonText: "",
  });

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const res = await fetch(
          "/api/tourist-visa-services/hero?id=680005085419d4f5ed0cbbcd"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch hero data");
        }
        const data = await res.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };

    fetchHeroData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/tourist-visa-services/hero", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Hero section updated successfully!");
      } else {
        alert("Failed to update the Hero section.");
      }
    } catch (error) {
      console.error("Error updating hero section:", error);
      alert("An error occurred while updating the Hero section.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt -6">
      <details>
        <summary className="text-2xl font-bold mb-4 cursor-pointer text-primary hover:underline focus:outline-none ">
          Hero Section
        </summary>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Title"
          />
          <input
            type="text"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Subtitle"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Description"
          />
          <input
            type="text"
            name="buttonText"
            value={formData.buttonText}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Button Text"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded"
          >
            Update
          </button>
        </form>
      </details>
    </div>
  );
}
