"use client";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";
import Image from "next/image";
import Typing from "./Common/Typing";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-30">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div className="-mx-0.5 flex justify-center -space-x-3">
              <Image
                className="box-content rounded-full border-2 border-gray-50"
                src={Avatar01}
                width={32}
                height={32}
                alt="Avatar 01"
              />
              <Image
                className="box-content rounded-full border-2 border-gray-50"
                src={Avatar02}
                width={32}
                height={32}
                alt="Avatar 01"
              />
              <Image
                className="box-content rounded-full border-2 border-gray-50"
                src={Avatar03}
                width={32}
                height={32}
                alt="Avatar 02"
              />
              <Image
                className="box-content rounded-full border-2 border-gray-50"
                src={Avatar04}
                width={32}
                height={32}
                alt="Avatar 03"
              />
              <Image
                className="box-content rounded-full border-2 border-gray-50"
                src={Avatar05}
                width={32}
                height={32}
                alt="Avatar 04"
              />
              <Image
                className="box-content rounded-full border-2 border-gray-50"
                src={Avatar06}
                width={32}
                height={32}
                alt="Avatar 05"
              />
            </div>
          </div>

          <div className="flex justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            <Typing
              text="Simplify Your Global ‍Startup and Expansion with Expert Guidance"
              className="hidden sm:block"
            />
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <p
              className="mb-8 text-lg text-gray-700"
              data-aos="zoom-y-out"
              data-aos-delay={300}
            >
              FLC is a globally integrated solution that helps you get expert
              guidance to manage set up and expansion in 20+ countries through a
              single platform.
            </p>
            <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div
                className="mx-auto max-w-xs sm:max-w-none gap-2 sm:gap-4 flex flex-row justify-center"
                data-aos="zoom-y-out"
                data-aos-delay={450}
              >
                <button
                  className={`flex items-center gap-2 px-6 py-3 rounded-none transition-all bg-primary text-primary-foreground`}
                >
                  Get Started
                </button>
                <button
                  className={`flex items-center gap-2 px-6 py-3 rounded-none transition-all bg-white text-foreground border border-solid border-foreground`}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
