"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
// import Accounting from "./accounting-service";
import Link from "next/link";
import AccountServices from "./accounting-service/page";
import Sidebar from "./component/sidebar";

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const pathname = usePathname(); // Get current route

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
      <nav>
        <ul>
          <li>
            <Link href="/admin/accounting-service">Accounting Service</Link>
          </li>
        </ul>
      </nav>

      {/* Conditionally Render Components Based on Pathname */}
      {pathname === "/admin/accounting-service" && <AccountServices />}
    </Sidebar>
  );
};

export default Admin;
