"use client";
import { useEffect, useState } from "react";

const ClientInformation = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      if (!isPaused) {
        setScrollPosition((prev) => (prev - 0.1) % 100);
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Our Clients
          </h2>
          {/* <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-primary p-6 rounded-md shadow-md">
              <p className="text-body text-card-accent">
                FLC offers thoughtful legal counsel across a range of industries
                and disciplines.
              </p>
            </div>
            <div className="bg-primary p-6 rounded-md shadow-md">
              <p className="text-body text-card-accent">
                Our clients receive a holistic legal perspective, efficient law
                management, and cost-effective solutions on complex legal
                matters.
              </p>
            </div>
          </div> */}
        </div>

        <div className="relative  rounded-md overflow-hidden">
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10"></div>
          <div className="relative overflow-hidden py-6">
            <div
              className="flex whitespace-nowrap transition-transform duration-500 ease-linear"
              style={{
                transform: `translateX(${scrollPosition}%)`,
                transition: isPaused ? "none" : "transform 0.1s linear",
              }}
            >
              {Array(2)
                .fill(null)
                .map((_, index) => (
                  <div key={index} className="flex space-x-8 px-4">
                    <div className="text-0f5471 text-lg font-semibold hover:text-0f5471 transition-colors duration-300">
                      Providing invaluable legal insights across all sectors
                    </div>
                    <div className="text-0f5471 text-lg font-semibold hover:text-accent transition-colors duration-300">
                      Excellence in legal services
                    </div>
                    <div className="text-0f5471 text-lg font-semibold hover:text-accent transition-colors duration-300">
                      Trusted by leading businesses worldwide
                    </div>
                    <div className="text-0f5471 text-lg font-semibold hover:text-accent transition-colors duration-300">
                      Innovative legal solutions for modern challenges
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientInformation;
