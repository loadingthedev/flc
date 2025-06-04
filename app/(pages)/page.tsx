"use client";

import RecentReviewsCarousel from "@/components/Cient";
import ContactUs from "@/components/Contact";
import FlcHero from "@/components/Hero";
import How from "@/components/How-to";

export default function Home() {
  return (
    <>
      <FlcHero />

      {/* <Services /> */}
      {/* <NewsAndInsights /> */}
      <How />
      <RecentReviewsCarousel />
      <ContactUs />
    </>
  );
}
