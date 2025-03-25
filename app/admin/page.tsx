"use client";
import { useState } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";

import { AccountServices } from "./accounting-service/main";
import { Bank } from "./bank-account-opening/main";
import Sidebar from "./sidebar";

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Router>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
        <Routes>
          <Route
            path="/admin/accounting-service"
            element={<AccountServices />}
          />
          <Route path="/admin/bank-account-opening" element={<Bank />} />
        </Routes>
      </Sidebar>
    </Router>
  );
};

export default Page;
