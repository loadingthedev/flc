"use client";

import { useEffect, useState } from "react";

interface wllheader {
  intro: string;
  heading: string;
  wills: {
    title: string;
    description: string;
    image: string;
  }[];
}

const Header = () => {
  const [data, setData] = useState<wllheader | null>(null);

  useEffect(() => {
    fetch("/api/will-prep/header")
      .then((res) => res.json())
      .then((response) => {
        console.log("Fetched data:", response);
        setData(response.wllheader);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!data) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p
        className="text-md md:text-lg md:mt-16 mt-8 text-center"
        style={{ textAlign: "justify" }}
      >
        {data.intro}
      </p>

      <div className="max-w-8xl mx-auto md:mt-4 mt-12 py-12">
        <h2 className="text-4xl font-extrabold md:mb-12 flex md:justify-start justify-center text-primary mb-8">
          {data.heading}
        </h2>

        <ul>
          {data.wills.map((item, index) => (
            <li key={index} className="flex items-center mb-8">
              <img src={item.image} alt={item.title} className="w-24 h-24" />
              <div className="ml-4">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="mb-4">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
