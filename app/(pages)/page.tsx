"use client";

import ContactUs from "@/components/Contact";
import FlcHero from "@/components/Hero";
import How from "@/components/How-to";
import RecentReviewsCarousel from "@/components/testimonial";
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
    token: "lil-1a1fb7bb-1582-4055-a98d-0274b159f6da",
    botName: "FLCLegal",
    primaryColor: "#000000",
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
