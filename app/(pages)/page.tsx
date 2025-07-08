"use client";

import RecentReviewsCarousel from "@/components/Cient";
import ContactUs from "@/components/Contact";
import FlcHero from "@/components/Hero";
import How from "@/components/How-to";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <FlcHero />

      {/* <Services /> */}
      {/* <NewsAndInsights /> */}
      <How />
      <RecentReviewsCarousel />
      <ContactUs />

      {/* <!-- Add this to your website's HTML body --> */}
      <Script id="ll-chat-widget-config" strategy="afterInteractive">
        {`
  window.__CHAT_WIDGET_CONFIG__ = {
    token: "lil-c7dfc4f1-aa6b-44b3-986a-0b93f186c22e",
    botName: "FLCLegal",
    primaryColor: "#093145",
    position: "bottom-right", // or "bottom-right"
    url: "https://linkinlegal-chat.vercel.app",
  };
  `}
      </Script>
      <Script
        id="ll-chat-widget-loader"
        src="https://linkinlegal-chat.vercel.app/widget-loader.js"
        defer
        strategy="afterInteractive"
      ></Script>
    </>
  );
}
