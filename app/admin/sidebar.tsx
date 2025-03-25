// Layout.tsx
import React, { ReactNode } from "react";
import { FiBarChart2, FiMenu, FiUserCheck, FiX } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";

interface SubmenuProps {
  icon: React.ReactNode;
  text: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarOpen: boolean;
  items: { to: string; text: string }[];
}
interface LayoutProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  children: ReactNode;
}

const Sidebar: React.FC<LayoutProps> = ({
  isSidebarOpen,
  toggleSidebar,
  children,
}) => {
  const [isSubscriptionOpen, setIsSubscriptionOpen] = React.useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = React.useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <aside
        className={`${
          isSidebarOpen ? "w-72" : "w-20"
        } bg-primary  text-white transition-all duration-300 ease-in-out h-full overflow-y-auto`}
      >
        <div className="p-4 flex items-center justify-between">
          <h2
            className={`${
              isSidebarOpen ? "block" : "hidden"
            } font-bold text-xl`}
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
        <nav className="mt-8 ">
          <NavItem
            icon={<FiBarChart2 size={24} />}
            text="Accounting-Service"
            isActive={window.location.pathname === "admin/accounting-service"}
            to="admin/accounting-service"
            isSidebarOpen={isSidebarOpen}
          />

          <NavItem
            icon={<FiUserCheck size={24} />}
            text="Bank-account-opening"
            isActive={window.location.pathname === "/bank-account-opening"}
            to="admin/bank-account-opening"
            isSidebarOpen={isSidebarOpen}
          />
        </nav>
      </aside>
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-6 py-8">
          {children}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  isActive: boolean;
  to: string;
  isSidebarOpen: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  text,
  isActive,
  to,
  isSidebarOpen,
}) => {
  return (
    <Link
      to={to}
      className={`w-full flex items-center px-4 py-2 mb-2 transition-colors duration-200 ease-in-out ${
        isActive ? "bg-[#00296b]" : "hover:bg-[#00296b]"
      }`}
    >
      <span className="mr-4">{icon}</span>
      {isSidebarOpen && <span className="font-medium">{text}</span>}
    </Link>
  );
};

export default Sidebar;
