export const metadata = {
  title: "Home - FLC",
  description: "Page description",
};

import BusinessCategories from "@/components/business-categories";
import ClientInformation from "@/components/Cient";
import ContactUs from "@/components/Contact";
import HeroHome from "@/components/hero-home";
import How from "@/components/How-to";
import NewsAndInsights from "@/components/NewsLegal";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <HeroHome />
      <BusinessCategories />
      <Services />
      <NewsAndInsights />
      <How />
      <ClientInformation />
      <ContactUs />
    </>
  );
}
