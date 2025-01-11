"use client";
import Stripes from "@/public/images/stripes-dark.svg";
import { FileText, MessageCircle, Search, UserCheck } from "lucide-react";
import Image from "next/image";

export default function How() {
  const steps = [
    {
      title: "Book a Discovery Call",
      description:
        "Schedule a call to discuss your needs and what you are looking for in your ideal virtual assistant.",
      icon: <MessageCircle className="w-6 h-6" />,
    },
    {
      title: "Fill out a hiring survey",
      description:
        "Complete a detailed survey about your hiring requirements and participate in a 45-minute Zoom call.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "We search for top candidates",
      description:
        "Our team reviews your needs to create a virtual assistant profile and present the best candidates matching your requirements.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: "Interview and hire",
      description:
        "Meet with pre-screened candidates and choose the perfect match for your team.",
      icon: <UserCheck className="w-6 h-6" />,
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl "
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
          </div>

          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={Stripes}
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>
          <div className="px-4  md:py-12">
            <h2 className="mb-6 border-y text-3xl text-4xl font-bold  text-foreground  [border-image:linear-gradient(to_right,transparent,theme(colors.slate.700/.7),transparent)1] md:mb-12 md:text-4xl">
              How to hire through our Agency
            </h2>
          </div>
          <div className="[border-image:linear-gradient(to_right,transparent,theme(colors.slate.700/.7),transparent)1] text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="mb-16 relative fade-in-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12  rounded-full flex items-center justify-center shadow-lg text-black">
                          {step.icon}
                        </div>
                        {index < steps.length - 1 && (
                          <div className="h-full w-0.5 bg-white absolute top-12 left-6 transform -translate-x-1/2"></div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-primary mb-2">
                          {step.title}
                        </h3>
                        <p className="text-lg text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <style jsx>{`
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .fade-in-up {
                opacity: 0;
                animation: fadeInUp 0.5s ease-out forwards;
              }
            `}</style>
          </div>
          <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center mb-20">
            <button
              className={`flex items-center gap-2 px-6 py-3 rounded-none transition-all bg-primary text-primary-foreground hover:bg-muted-foreground`}
            >
              Learn More
            </button>
          </div>

          <div className="mt-8 mb-10 flex justify-center flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 backdrop-blur-sm hover:bg-gray-200 transition-colors">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              20+ Global Locations
            </div>
            <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 backdrop-blur-sm hover:bg-gray-200 transition-colors">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Verified Experts
            </div>
            <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 backdrop-blur-sm hover:bg-gray-200 transition-colors">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              24/7 Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
