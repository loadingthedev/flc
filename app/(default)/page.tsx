export const metadata = {
  title: "Home - FLC",
  description: "Page description",
};

import BusinessCategories from "@/components/business-categories";

import FeaturesPlanet from "@/components/features-planet";
import Hero from "@/components/hero-home";
import How from "@/components/How-to";
import LargeTestimonial from "@/components/large-testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <How />
    </>
  );
}
