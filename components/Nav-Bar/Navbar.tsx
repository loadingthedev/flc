// components/Navbar.tsx
"use client";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigationItems = [
    { href: "/attorney", label: "ATTORNEYS" },
    { href: "/practice-areas", label: "PRACTICE AREAS" },
    { href: "/industries", label: "INDUSTRIES" },
    { href: "/join-us", label: "JOIN US" },
  ];

  return (
    <nav className="bg-white shadow-xl text-[#000000] fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.slice(0, -1).map((item) => (
                <NavLink key={item.label} {...item} />
              ))}

              <DropdownMenu
                label="TAX"
                isActive={activeDropdown === "tax"}
                onToggle={() => handleDropdown("tax")}
                menuType="tax"
              />

              <DropdownMenu
                label="BUSINESS SETUP"
                isActive={activeDropdown === "businessSetup"}
                onToggle={() => handleDropdown("businessSetup")}
                menuType="businessSetup"
              />
              <DropdownMenu
                label="SERVICE"
                isActive={activeDropdown === "serviceSetup"}
                onToggle={() => handleDropdown("serviceSetup")}
                menuType="serviceSetup"
              />

              <NavLink key="join-us" href="/join-us" label="JOIN US" />
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-500 hover:bg-blue-700 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <FaTimes className="text-primary" />
              ) : (
                <FaBars className="text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        navigationItems={navigationItems}
      />
    </nav>
  );
};

export default Navbar;
