"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="text-primary font-Jost text-base border-b-2 border-transparent hover:text-black hover:text-muted-foreground px-3 py-2 transition-colors duration-300 font-bold"
      aria-label={label}
    >
      {label}
    </Link>
  );
};

interface DropdownMenuProps {
  label: string;
  isActive: boolean;
  onToggle: () => void;
  menuType: "tax" | "businessSetup" | "serviceSetup";
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  label,
  isActive,
  onToggle,
  menuType,
}) => {
  let closeTimeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout);
    onToggle();
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(onToggle, 300); // 300ms delay before closing
  };

  const renderTaxMenu = () => (
    <div className="absolute right-0 mt-[-2] w-48 shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu" aria-orientation="vertical">
        <Link
          href="vat"
          className="block px-4 py-2 text-sm text-[#000000] hover:text-primary "
          role="menuitem"
        >
          Vat & Tax Consultancy
        </Link>
        {/* <Link
          href="#"
          className="block px-4 py-2 text-sm text-[#000000] hover:text-white hover:bg-[#000000]"
          role="menuitem"
        >
          Corporate Tax
        </Link> */}
      </div>
    </div>
  );

  const renderBusinessSetupMenu = () => (
    <div className="absolute right-0 mt-[-2] w-full md:w-[1000px] h-auto md:h-[400px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity duration-300 opacity-100 flex flex-col md:flex-row">
      <div className="hidden md:flex w-full md:w-1/3 bg-primary p-4 text-white flex-col items-center justify-center text-center">
        <h1 className="text-xl font-bold mb-2">
          Hey, We are First Legal Counsel
        </h1>
        <p className="text-3xl font-extrabold">
          The #1 UAE <br />
          Business Setup Expert
        </p>
      </div>

      <div className="w-full md:w-1/3 p-4 text-primary text-justify flex flex-col items-center justify-center text-center md:overflow-auto overflow-auto">
        <ul className="text-justify">
          <li className="block px-5 py-2 mt-4 text-3xl text-primary transition-colors duration-300">
            Free Zone
          </li>
          <li className="pl-2">
            <Link
              href="/overview"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Overview
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="/business-activities"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Business Activities
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="/free-zone"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Free Zone License Locations and Pricing
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="/residence-visa"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              UAE Residence Visa
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="/registration-process"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Registration Process
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="/solution"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Our Solution
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-full md:w-1/3 p-4 text-primary text-justify flex flex-col items-center justify-center text-center">
        <h3 className="text-3xl mb-4 px-32 text-justify"></h3>
        <ul className="text-left">
          <li className="block px-5 py-2 text-3xl text-primary transition-colors duration-300">
            MainLand
          </li>
          <li className="pl-2">
            <Link
              href="mainland-overview"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Overview
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="/mainland-sponsorship"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Sponsorship
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="/mainland-license"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Dubai MainLand License
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="tags/business-activities"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Business Activities
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="mainland-visas"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Mainland Visas
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="mainland-virtuefit"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              VirtuFit
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

  const renderServiceSetupMenu = () => (
    <div className="absolute right-0 mt-[-2] w-[1000px] h-[400px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity duration-300 opacity-100 flex">
      <div className="w-1/3 w-[333px] p-4 text-white flex flex-col items-center justify-top text-center">
        <ul className="text-justify">
          <li className="block px-5 py-2 mt-4 text-3xl text-primary transition-colors duration-300">
            Essential Services
          </li>
          <li className="pl-2">
            <Link
              href="/bank-account-opening"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Bank Account Opening in UAE
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="/accounting-services"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Accounting Services
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="/compliance-services"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Compliance Services
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="health-insurance"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Health Insurance
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-1/3 w-[333px] mt-3 p-4 text-primary text-justify flex flex-col items-center justify-top text-center">
        <ul className="text-justify">
          <li className="block px-5 py-2 text-3xl text-Primary transition-colors duration-300">
            Operational Services
          </li>

          <li className="pl-2">
            <Link
              href="legal-services"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Legal Services
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="mail-management"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Mail Management
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="virtual-receptionist"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Virtual Receptionist
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-1/3 w-[333px] p-3 text-primary text-justify flex flex-col items-center justify-top text-center">
        <ul className="text-justify">
          <li className="block px-5 py-2 mt-4 text-3xl text-Primary transition-colors duration-300">
            Support Services
          </li>
          <li className="pl-2">
            <Link
              href="tourist-visa"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Tourist Visa Services
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="/golden-visa"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Golden Visa UAE
            </Link>
          </li>

          <li className="pl-2">
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Pro Services
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="/will-prepration"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              Will Prepration Services
            </Link>
          </li>
          <li className="pl-2">
            <Link
              href="trademark"
              className="block px-4 py-2 text-sm text-[#000000] hover:text-primary transition-colors duration-300"
              role="menuitem"
            >
              TradeMark & CopyRight Registration
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div
      className="relative inline-block text-left cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="text-primary font-Jost font-bold border-b-2 border-transparent hover:text-black hover:text-muted-foreground px-3 py-2 transition-colors duration-700 font-lg flex items-center"
        aria-expanded={isActive}
        aria-haspopup="true"
      >
        {label}
        <FaAngleDown
          className={`ml-1 transform ${
            isActive ? "" : "rotate-180"
          } transition-transform duration-300`}
        />
      </div>
      {isActive &&
        (menuType === "tax"
          ? renderTaxMenu()
          : menuType === "businessSetup"
            ? renderBusinessSetupMenu()
            : renderServiceSetupMenu())}
    </div>
  );
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  dropdownItems: {
    label: string;
    menuType: "tax" | "businessSetup" | "serviceSetup";
  }[];
  navigationItems: Array<{
    href: string;
    label: string;
  }>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navigationItems,
  dropdownItems,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const renderTaxMenu = () => (
    <div className="space-y-1">
      <Link
        href="vat"
        className="block px-4 py-2 text-sm text-[#000000] hover:text-primary"
        onClick={onClose}
      >
        Vat & Tax Consultancy
      </Link>
      <Link
        href="#"
        className="block px-4 py-2 text-sm text-[#000000] hover:text-primary"
        onClick={onClose}
      >
        Corporate Tax
      </Link>
    </div>
  );

  const renderBusinessSetupMenu = () => (
    <div className="space-y-1">
      <Link
        href="/overview"
        className="block px-4 py-2 text-sm text-[#000000] hover:text-primary"
        onClick={onClose}
      >
        Overview
      </Link>
      <Link
        href="/business-activities"
        className="block px-4 py-2 text-sm text-[#000000] hover:text-primary"
        onClick={onClose}
      >
        Business Activities
      </Link>
      <Link
        href="/free-zone"
        className="block px-4 py-2 text-sm text-[#000000] hover:text-primary"
        onClick={onClose}
      >
        Free Zone License Locations and Pricing
      </Link>
      <Link
        href="/residence-visa"
        className="block px-4 py-2 text-sm text-[#000000] hover:text-primary"
        onClick={onClose}
      >
        UAE Residence Visa
      </Link>
      <Link
        href="/registration-process"
        className="block px-4 py-2 text-sm text-[#000000] hover:text-primary"
        onClick={onClose}
      >
        Registration Process
      </Link>
      <Link
        href="/solution"
        className="block px-4 py-2 text-sm text-[#000000] hover:text-primary"
        onClick={onClose}
      >
        Our Solution
      </Link>
    </div>
  );

  const renderServiceSetupMenu = () => (
    <div className="space-y-1 text-[#ffffff]">
      <Link
        href="/bank-account-opening"
        className="block px-4 py-2 text-sm  hover:text-primary"
        onClick={onClose}
      >
        Bank Account Opening in UAE
      </Link>
      <Link
        href="/accounting-services"
        className="block px-4 py-2 text-sm  hover:text-primary"
        onClick={onClose}
      >
        Accounting Services
      </Link>
      <Link
        href="/compliance-services"
        className="block px-4 py-2 text-sm  hover:text-primary"
        onClick={onClose}
      >
        Compliance Services
      </Link>
      <Link
        href="health-insurance"
        className="block px-4 py-2 text-sm  hover:text-primary"
        onClick={onClose}
      >
        Health Insurance
      </Link>
      <Link
        href="health-insurance"
        className="block px-4 py-2 text-sm hover:text-primary"
        onClick={onClose}
      >
        Legal Services
      </Link>
    </div>
  );

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link
          href="/all-items"
          className="text-primary hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
          onClick={onClose}
        >
          All Items
        </Link>
        {navigationItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-primary hover:bg-blue-700 block px-3 py-2 rounded-md  text-bold"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}

        {dropdownItems.map((item) => (
          <div key={item.menuType}>
            <div onClick={() => handleDropdown(item.menuType)}>
              {item.label}
            </div>
            {activeDropdown === item.menuType &&
              (item.menuType === "tax"
                ? renderTaxMenu()
                : item.menuType === "businessSetup"
                  ? renderBusinessSetupMenu()
                  : renderServiceSetupMenu())}
          </div>
        ))}
      </div>
    </div>
  );
};

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
    color?: string;
  }[] = [
    { label: "TAX", menuType: "tax", color: "primary" },
    { label: "BUSINESS SETUP", menuType: "businessSetup", color: "primary" },
    { label: "SERVICE", menuType: "serviceSetup", color: "primary" },
  ];

  return (
    <nav className="bg-white shadow-xl  fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6 text-primary ">
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
      <div className="md:hidden">
        <MobileMenu
          isOpen={isMenuOpen}
          onClose={closeMenu}
          navigationItems={navigationItems}
          dropdownItems={dropdownItems}
        />
      </div>
    </nav>
  );
};

export default Navbar;
