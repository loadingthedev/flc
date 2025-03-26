"use client"; // Ensures this is a client component

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import { FiBarChart2, FiMenu, FiUserCheck, FiX } from "react-icons/fi";

interface LayoutProps {
  children: ReactNode;
}

const Sidebar: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  // Load sidebar state from localStorage on mount
  useEffect(() => {
    const storedState = localStorage.getItem("sidebarState");
    if (storedState !== null) {
      setIsSidebarOpen(storedState === "true");
    }
  }, []);

  // Toggle sidebar and save state in localStorage
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => {
      const newState = !prev;
      localStorage.setItem("sidebarState", String(newState));
      return newState;
    });
  };

  return (
    <div className="flex h-screen bg-gray-100 mt-14">
      <aside
        className={`${
          isSidebarOpen ? "w-72" : "w-20"
        } bg-primary text-white transition-all duration-300 ease-in-out h-full overflow-y-auto`}
      >
        <div className="p-4 flex items-center justify-between">
          <h2
            className={`${isSidebarOpen ? "block" : "hidden"} font-bold text-xl`}
          >
            Admin Dashboard
          </h2>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-muted-foreground focus:outline-none focus:ring-2 focus:ring-muted-foreground"
          >
            {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <nav className="mt-8">
          <NavItem
            icon={<FiBarChart2 size={24} />}
            text="Accounting Service"
            to="/admin/accounting-service"
            isSidebarOpen={isSidebarOpen}
          />
          <NavItem
            icon={<FiUserCheck size={24} />}
            text="Bank Account Opening"
            to="/admin/bank-account-opening"
            isSidebarOpen={isSidebarOpen}
          />
        </nav>
      </aside>
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-6 py-8">{children}</div>
      </main>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  to: string;
  isSidebarOpen: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, to, isSidebarOpen }) => {
  const pathname = usePathname(); // Get the current path

  return (
    <Link
      href={to}
      className={`w-full flex items-center px-4 py-2 mb-2 transition-colors duration-200 ease-in-out ${
        pathname === to ? "bg-[#00296b]" : "hover:bg-[#00296b]"
      }`}
    >
      <span className="mr-4">{icon}</span>
      {isSidebarOpen && <span className="font-medium">{text}</span>}
    </Link>
  );
};

export default Sidebar;
