"use client";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";

const Navbar = () => {
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
    { href: "/industries", label: "INDUSTRIES" },
    { href: "/join-us", label: "JOIN US" },
  ];

  const dropdownItems: {
    label: string;
    menuType: "tax" | "businessSetup" | "serviceSetup";
  }[] = [
    { label: "TAX", menuType: "tax" },
    { label: "BUSINESS SETUP", menuType: "businessSetup" },
    { label: "SERVICE", menuType: "serviceSetup" },
  ];

  return (
    <nav className="bg-gray-900 shadow-xl text-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.slice(0, -1).map((item) => (
                <NavLink key={item.label} {...item} />
              ))}

              {dropdownItems.map((item) => (
                <DropdownMenu
                  key={item.menuType}
                  label={item.label}
                  isActive={activeDropdown === item.menuType}
                  onToggle={() => handleDropdown(item.menuType)}
                  menuType={item.menuType}
                />
              ))}

              <NavLink key="join-us" href="/join-us" label="JOIN US" />
            </div>
          </div>

          <div className="md:hidden">
            <div
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-500 hover:bg-blue-700 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <FaTimes className="text-primary" />
              ) : (
                <FaBars className="text-primary" />
              )}
            </div>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        navigationItems={navigationItems}
        dropdownItems={dropdownItems}
      />
    </nav>
  );
};

export default Navbar;
