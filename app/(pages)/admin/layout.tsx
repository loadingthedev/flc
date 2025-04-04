"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FiBarChart2,
  FiDollarSign,
  FiFolder,
  FiMenu,
  FiUserCheck,
  FiX,
} from "react-icons/fi";

type AdminLayoutProps = {
  children: React.ReactNode;
};

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-72" : "w-20"
        } bg-[#001d47] text-white transition-all duration-300 ease-in-out h-full overflow-y-auto`}
      >
        <div className="p-4 flex items-center justify-between mt-4">
          <h2
            className={`${
              isSidebarOpen ? "block" : "hidden"
            } font-bold text-xl`}
          >
            Admin Dashboard
          </h2>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsSidebarOpen(!isSidebarOpen);
            }}
            className="p-2 rounded-full hover:bg-[#00296b] focus:outline-none"
          >
            {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8">
          <NavItem
            icon={<FiBarChart2 size={24} />}
            text="Dashboard"
            href="/admin"
            isSidebarOpen={isSidebarOpen}
          />
          <NavItem
            icon={<FiUserCheck size={24} />}
            text="Accounting Services"
            href="/admin/accounting-service"
            isSidebarOpen={isSidebarOpen}
          />
          <NavItem
            icon={<FiDollarSign size={24} />}
            text="Bank Accounts Opening in UAE"
            href="/admin/bank-account-opening"
            isSidebarOpen={isSidebarOpen}
          />
          <NavItem
            icon={<FiFolder size={24} />}
            text="Compliance Services"
            href="/admin/compliance-services"
            isSidebarOpen={isSidebarOpen}
          />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
        {children}
      </main>
    </div>
  );
};

type NavItemProps = {
  icon: React.ReactNode;
  text: string;
  href: string;
  isSidebarOpen: boolean;
};

const NavItem: React.FC<NavItemProps> = ({
  icon,
  text,
  href,
  isSidebarOpen,
}) => {
  return (
    <Link
      href={href}
      className="w-full flex items-center px-4 py-2 mb-2 hover:bg-[#00296b] transition-colors duration-200"
    >
      <span className="mr-4">{icon}</span>
      {isSidebarOpen && <span className="font-medium">{text}</span>}
    </Link>
  );
};

export default AdminLayout;
