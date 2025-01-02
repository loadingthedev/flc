export const metadata = {
  title: "Home - FLC",
  description: "Page description",
};

import BusinessCategories from "@/components/business-categories";
import LawFirmCarousel from "@/components/Services";

import ClientInformation from "@/components/client";
import Hero from "@/components/hero-home";
import How from "@/components/How-to";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <LawFirmCarousel />
      <ClientInformation />
      <How />
    </>
  );
}
