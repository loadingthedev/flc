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

const Header = () => {
  const [data, setData] = useState<HealthInsuranceData | null>(null);
  useEffect(() => {
    fetch("/api/health-insurance/header")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data); // should contain healthInsuranceheader key
        setData(data.healthInsuranceheader); // <- updated here
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-md md:text-lg md:mt-16 mt-8 text-center"
          style={{
            textAlign: "justify",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {data.intro}
        </p>

        <div className="max-w-8xl mx-auto md:mt-4 mt-12 py-12">
          <h2 className="text-4xl font-extrabold md:mb-12 flex md:justify-start justify-center text-primary mb-8">
            {data.heading}
          </h2>

          <div className="flex flex-wrap gap-6 justify-center">
            {data.features?.map((item, idx) => (
              <div key={idx} className="flex flex-col justify-center max-w-sm">
                <div className="flex items-center mb-2 border-b-2 pb-4 bg-muted-foreground">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto rounded-md mb-4 p-12"
                  />
                </div>
                <h2 className="text-lg font-bold mt-4">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-muted-foreground w-full py-8">
        <h2 className="text-3xl text-white bg-primary text-justify py-8 mx-auto px-4 sm:px-6 lg:px-8 font-bold">
          {data.cta?.title}
        </h2>
        <p className="text-white text-base md:text-xl mt-12 max-w-7xl bg-primary mx-auto px-4 sm:px-6 lg:px-8 text-justify py-12 mb-8">
          {data.cta?.description || "No description available"}
        </p>
      </div>
    </>
  );
};

export default Header;
