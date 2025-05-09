"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Hero() {
  const [heroData, setHeroData] = useState({
    title: "Loading...",
    subtitle: "",
    description: "",
    buttonText: "",
  });

  useEffect(() => {
    fetch("/api/mail-management/hero")
      .then((res) => res.json())
      .then((data) => setHeroData(data))
      .catch((err) => {
        console.error("Error fetching hero data:", err);
      });
  }, []);
  if (!heroData.title) {
    return null;
  }

  return (
    <div className="bg-muted-foreground  w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-20">
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          {heroData.title}
        </h1>
        <p className="text-xl md:text-3xl font-bold text-white mt-4 mb-8">
          {heroData.subtitle}
        </p>

        <p className="text-white text-base md:text-xl mb-8">
          {heroData.description}
        </p>
        <div className="flex justify-center md:justify-start">
          <Link href="/contact">
            <button className="flex items-center gap-2 px-8 md:px-12 py-4 border-2 border-white rounded-none transition-all text-white hover:bg-primary hover:text-primary-foreground">
              {heroData.buttonText}
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10 md:pt-20">
        <img
          src="https://virtuzone.com/wp-content/uploads/2022/02/Mail-Management.png.webp"
          alt="UAE Free Zone"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
