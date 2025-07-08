"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";

// NavLink Component
interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => (
  <Link
    href={href}
    className="text-white font-Jost text-base border-transparent hover:text-black hover:bg-white/20 px-3 py-2 rounded transition-all duration-300 font-bold"
    aria-label={label}
  >
    {label}
  </Link>
);

// DropdownMenu Component
interface DropdownMenuProps {
  label: string;
  isActive: boolean;
  onOpen: () => void;
  onClose: () => void;
  menuType: "tax" | "businessSetup" | "serviceSetup";
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  label,
  isActive,
  onOpen,
  onClose,
  menuType,
}) => {
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    onOpen();
  };

  const handleMouseLeave = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    closeTimeout.current = setTimeout(() => {
      onClose();
    }, 200);
  };

  const renderTaxMenu = () => (
    <div className="absolute right-0 w-56 bg-white shadow-xl ring-1 ring-black ring-opacity-5 z-50 animate-fadein">
      <div className="py-2" role="menu" aria-orientation="vertical">
        <Link
          href="/vat"
          className="block px-6 py-3 text-base text-[#222] hover:bg-primary/10 hover:text-black transition-all duration-200"
          role="menuitem"
        >
          Vat & Tax Consultancy
        </Link>
      </div>
    </div>
  );

  const renderBusinessSetupMenu = () => (
    <div className="absolute right-0 mt-2 w-full md:w-[900px] h-auto md:h-[400px] shadow-2xl bg-white  ring-1 ring-black ring-opacity-5 transition-all duration-500 flex flex-col md:flex-row z-50 animate-fadein">
      <div className="hidden md:flex w-1/3 bg-gradient-to-br from-primary to-[#0A0A0A] text-white flex-col items-center justify-center  p-6 text-center">
        <h1 className="text-2xl font-bold mb-2">First Legal Counsel</h1>
        <p className="text-2xl font-extrabold">
          The #1 UAE <br />
          Business Setup Expert
        </p>
      </div>
      <div className="w-full md:w-1/3 p-6 flex flex-col gap-1">
        <div className="text-lg font-semibold text-primary mb-2">Free Zone</div>
        <Link
          href="/overview"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          Overview
        </Link>
        <Link
          href="/business-activities"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          Business Activities
        </Link>
        <Link
          href="/free-zone"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          Free Zone License Locations & Pricing
        </Link>
        <Link
          href="/residence-visa"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          UAE Residence Visa
        </Link>
        <Link
          href="/registration-process"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          Registration Process
        </Link>
        <Link
          href="/solution"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          Our Solution
        </Link>
      </div>
      <div className="w-full md:w-1/3 p-6 flex flex-col gap-1">
        <div className="text-lg font-semibold text-primary mb-2">MainLand</div>
        <Link
          href="/mainland-overview"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          Overview
        </Link>
        <Link
          href="/mainland-sponsorship"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          Sponsorship
        </Link>
        <Link
          href="/mainland-license"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          Dubai MainLand License
        </Link>
        <Link
          href="/mainland-business-activities"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          Business Activities
        </Link>
        <Link
          href="/mainland-visas"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          Mainland Visas
        </Link>
        <Link
          href="/mainland-virtuefit"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          FLC
        </Link>
      </div>
    </div>
  );

  const renderServiceSetupMenu = () => (
    <div className="absolute right-0 mt-2 w-[800px] h-auto shadow-2xl bg-white  ring-1 ring-black ring-opacity-5 transition-all duration-300 flex flex-col md:flex-row z-50 animate-fadein">
      <div className="w-full md:w-1/3 p-6 flex flex-col gap-1">
        <div className="text-lg font-semibold text-primary mb-2">
          Essential Services
        </div>
        <Link
          href="/bank-account-opening"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          Bank Account Opening in UAE
        </Link>
        <Link
          href="/accounting-services"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          Accounting Services
        </Link>
        <Link
          href="/compliance-services"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          Compliance Services
        </Link>
        <Link
          href="/health-insurance"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          Health Insurance
        </Link>
      </div>
      <div className="w-full md:w-1/3 p-6 flex flex-col gap-1">
        <div className="text-lg font-semibold text-primary mb-2">
          Operational Services
        </div>
        <Link
          href="/legal-services"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          Legal Services
        </Link>
        <Link
          href="/mail-management"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          Mail Management
        </Link>
        <Link
          href="/virtual-receptionist"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          Virtual Receptionist
        </Link>
      </div>
      <div className="w-full md:w-1/3 p-6 flex flex-col gap-1">
        <div className="text-lg font-semibold text-primary mb-2">
          Support Services
        </div>
        <Link
          href="/tourist-visa"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          Tourist Visa Services
        </Link>
        <Link
          href="/golden-visa"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          Golden Visa UAE
        </Link>
        <Link
          href="/will-prepration"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          Will Preparation Services
        </Link>
        <Link
          href="/trademark"
          className="block px-3 py-2 rounded hover:bg-primary/10 hover:text-primary text-[#222] transition-all"
        >
          TradeMark & CopyRight Registration
        </Link>
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
        className="text-white font-Jost font-bold border-b-2 border-transparent hover:text-black hover:bg-white/10 px-3 py-2 rounded transition-colors duration-300 flex items-center"
        aria-expanded={isActive}
        aria-haspopup="true"
      >
        {label}
        <FaAngleDown
          className={`ml-1 transform ${isActive ? "rotate-180" : ""} transition-transform duration-200`}
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

// Modernistic MobileMenu (Drawer Style)
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const renderTaxMenu = () => (
    <div className="pl-2 border-l border-primary ml-4 mt-2">
      <Link
        href="/vat"
        className="block px-4 py-2 text-base text-primary hover:bg-primary/10 rounded"
        onClick={onClose}
      >
        Vat & Tax Consultancy
      </Link>
    </div>
  );

  const renderBusinessSetupMenu = () => (
    <div className="pl-2 border-l border-primary ml-4 mt-2 space-y-1">
      <Link
        href="/overview"
        className="block px-4 py-2 text-base text-primary hover:bg-primary/10 rounded"
        onClick={onClose}
      >
        Overview
      </Link>
      <Link
        href="/business-activities"
        className="block px-4 py-2 text-base text-primary hover:bg-primary/10 rounded"
        onClick={onClose}
      >
        Business Activities
      </Link>
      <Link
        href="/free-zone"
        className="block px-4 py-2 text-base text-primary hover:bg-primary/10 rounded"
        onClick={onClose}
      >
        Free Zone License Locations & Pricing
      </Link>
      <Link
        href="/residence-visa"
        className="block px-4 py-2 text-base text-primary hover:bg-primary/10 rounded"
        onClick={onClose}
      >
        UAE Residence Visa
      </Link>
      <Link
        href="/registration-process"
        className="block px-4 py-2 text-base text-primary hover:bg-primary/10 rounded"
        onClick={onClose}
      >
        Registration Process
      </Link>
      <Link
        href="/solution"
        className="block px-4 py-2 text-base text-primary hover:bg-primary/10 rounded"
        onClick={onClose}
      >
        Our Solution
      </Link>
    </div>
  );

  const renderServiceSetupMenu = () => (
    <div className="pl-2 border-l border-primary ml-4 mt-2 space-y-1">
      <Link
        href="/bank-account-opening"
        className="block px-4 py-2 text-base text-primary hover:bg-primary/10 rounded"
        onClick={onClose}
      >
        Bank Account Opening in UAE
      </Link>
      <Link
        href="/accounting-services"
        className="block px-4 py-2 text-base text-primary hover:bg-primary/10 rounded"
        onClick={onClose}
      >
        Accounting Services
      </Link>
      <Link
        href="/compliance-services"
        className="block px-4 py-2 text-base text-primary hover:bg-primary/10 rounded"
        onClick={onClose}
      >
        Compliance Services
      </Link>
      <Link
        href="/health-insurance"
        className="block px-4 py-2 text-base text-primary hover:bg-primary/10 rounded"
        onClick={onClose}
      >
        Health Insurance
      </Link>
      <Link
        href="/legal-services"
        className="block px-4 py-2 text-base text-primary hover:bg-primary/10 rounded"
        onClick={onClose}
      >
        Legal Services
      </Link>
      <Link
        href="/mail-management"
        className="block px-4 py-2 text-base text-primary hover:bg-primary/10 rounded"
        onClick={onClose}
      >
        Mail Management
      </Link>
      <Link
        href="/virtual-receptionist"
        className="block px-4 py-2 text-base text-primary hover:bg-primary/10 rounded"
        onClick={onClose}
      >
        Virtual Receptionist
      </Link>
      <Link
        href="/tourist-visa"
        className="block px-4 py-2 text-base text-primary hover:bg-primary/10 rounded"
        onClick={onClose}
      >
        Tourist Visa Services
      </Link>
      <Link
        href="/golden-visa"
        className="block px-4 py-2 text-base text-primary hover:bg-primary/10 rounded"
        onClick={onClose}
      >
        Golden Visa UAE
      </Link>
      <Link
        href="/will-prepration"
        className="block px-4 py-2 text-base text-primary hover:bg-primary/10 rounded"
        onClick={onClose}
      >
        Will Preparation Services
      </Link>
      <Link
        href="/trademark"
        className="block px-4 py-2 text-base text-primary hover:bg-primary/10 rounded"
        onClick={onClose}
      >
        TradeMark & CopyRight Registration
      </Link>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[999] flex">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        aria-hidden="true"
        onClick={onClose}
      />
      {/* Drawer */}
      <nav className="relative bg-white w-4/5 max-w-xs h-full shadow-2xl flex flex-col animate-slidein">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <Logo />
          <button onClick={onClose} className="text-2xl text-primary">
            <FaTimes />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-4 px-4">
          <Link
            href="/all-items"
            className="block text-lg text-primary font-bold mb-4 hover:text-black"
            onClick={onClose}
          >
            All Items
          </Link>
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-base text-[#222] font-medium px-3 py-2 rounded hover:bg-primary/10 mb-1"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
          {dropdownItems.map((item) => (
            <div key={item.menuType} className="mb-1">
              <button
                className="w-full flex items-center justify-between text-base font-semibold text-primary py-2 px-3 rounded bg-primary/5 hover:bg-primary/10 transition-all"
                onClick={() => handleDropdown(item.menuType)}
                aria-expanded={activeDropdown === item.menuType}
              >
                {item.label}
                <FaAngleDown
                  className={`ml-3 transition-transform ${activeDropdown === item.menuType ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all ${activeDropdown === item.menuType ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"} duration-300`}
              >
                {activeDropdown === item.menuType &&
                  (item.menuType === "tax"
                    ? renderTaxMenu()
                    : item.menuType === "businessSetup"
                      ? renderBusinessSetupMenu()
                      : renderServiceSetupMenu())}
              </div>
            </div>
          ))}
        </div>
      </nav>
      <style jsx global>{`
        @keyframes slidein {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-slidein {
          animation: slidein 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        @keyframes fadein {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadein {
          animation: fadein 0.2s;
        }
      `}</style>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleOpenDropdown = (key: string) => setActiveDropdown(key);
  const handleCloseDropdown = () => setActiveDropdown(null);

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
    { label: "TAX", menuType: "tax" },
    { label: "BUSINESS SETUP", menuType: "businessSetup" },
    { label: "SERVICE", menuType: "serviceSetup" },
  ];

  return (
    <nav className="bg-primary text-white fixed w-full top-0 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4 text-white ">
              {navigationItems.slice(0, -1).map((item) => (
                <NavLink key={item.label} {...item} />
              ))}
              {dropdownItems.map((item) => (
                <DropdownMenu
                  key={item.menuType}
                  label={item.label}
                  isActive={activeDropdown === item.menuType}
                  onOpen={() => handleOpenDropdown(item.menuType)}
                  onClose={handleCloseDropdown}
                  menuType={item.menuType}
                />
              ))}
              <NavLink key="join-us" href="/join-us" label="JOIN US" />
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex items-center justify-center p-2 rounded-full text-2xl text-white bg-primary hover:bg-white/20 focus:outline-none transition-all"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
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
