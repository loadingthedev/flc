"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/footer";
import Navbar from "@/components/Nav-Bar/Navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const isAdminPage = pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Navbar />}
      {/* Show Navbar only if NOT on admin pages */}
      <main className="grow">{children}</main>
      {!isAdminPage && <Footer />}{" "}
    </>
  );
}
