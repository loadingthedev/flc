"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

interface DropdownItems {
  [key: string]: string[];
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dropdownItems: DropdownItems = {
    // service: ["Consulting", "Development", "Design", "Marketing"],
    // about: ["Our Team", "Company", "Mission", "Vision"],
    // pricing: ["Basic", "Professional", "Enterprise", "Custom"],
  };

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

  return (
    <nav className="bg-white shadow-xl text-[#000000] fixed w-full top-0 z-50">
      <div className="  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="">
            <Link href="/">
              <text>
                <img
                  src="/images/flc-logo.png"
                  alt="Logo"
                  width={"250"}
                  height={"250"}
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    const target = e.target as HTMLImageElement;
                  }}
                />
              </text>
            </Link>
          </div>

          <div className="  -text-primary hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/attorney"
                className="text-primary font-Jost font-bold border-b-2 border-transparent hover:text-black hover:text-muted-foreground px-3 py-2  transition-colors duration-300 font-medium"
                aria-label="Attorneys"
              >
                ATTORNEYS
              </Link>
              <Link
                href="/practice-areas"
                className="text-primary font-Jost font-bold border-b-2 border-transparent hover:text-black hover:text-muted-foreground px-3 py-2  transition-colors duration-300 font-medium"
                aria-label="Practice Areas"
              >
                PRACTICE AREAS
              </Link>
              <Link
                href="/industries"
                className="text-primary font-Jost font-bold border-b-2 border-transparent hover:text-black hover:text-muted-foreground px-3 py-2  transition-colors duration-300 font-medium"
                aria-label="Industries"
              >
                INDUSTRIES
              </Link>
              <div className="relative inline-block text-left">
                <button
                  onClick={() => handleDropdown("tax")}
                  className="text-primary font-Jost font-bold border-b-2 border-transparent hover:text-black hover:text-muted-foreground px-3 py-2 transition-colors duration-300 font-medium flex items-center"
                  aria-expanded={activeDropdown === "tax"}
                  aria-haspopup="true"
                >
                  TAX
                  {activeDropdown === "tax" ? (
                    <FaAngleDown className="ml-1 transition-transform duration-300" />
                  ) : (
                    <FaAngleDown className="ml-1 transform rotate-180 transition-transform duration-300" />
                  )}
                </button>
                {activeDropdown === "tax" && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-[#000000] hover:text-white hover:bg-[#000000]"
                        role="menuitem"
                      >
                        Accounting & Services
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-[#000000] hover:text-white hover:bg-[#000000]"
                        role="menuitem"
                      >
                        Vat & Tax Consultancy
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-[#000000] hover:text-white hover:bg-[#000000]"
                        role="menuitem"
                      >
                        Corporate Tax
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative inline-block text-left">
                <button
                  onClick={() => handleDropdown("businessSetup")}
                  className="text-primary font-Jost font-bold border-b-2 border-transparent hover:text-black hover:text-muted-foreground px-1 py-2 transition-colors duration-300 font-medium flex items-center"
                  aria-expanded={activeDropdown === "businessSetup"}
                  aria-haspopup="true"
                >
                  Business Setup
                  {activeDropdown === "businessSetup" ? (
                    <FaAngleDown className="ml-1 transition-transform duration-300" />
                  ) : (
                    <FaAngleDown className="ml-1 transform rotate-180 transition-transform duration-300" />
                  )}
                </button>
                {activeDropdown === "businessSetup" && (
                  <div className="absolute right-0 mt-2 w-[1000px] h-[400px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity duration-300 opacity-100 flex">
                    <div className="w-1/3 bg-primary w-[400px] p-4 text-white flex flex-col items-center justify-center text-center">
                      <h1 className="text-xl font-bold mb-2">
                        Hey, We are First Legal Counsel
                      </h1>
                      <p className="text-3xl font-extrabold">
                        The #1 UAE <br />
                        Business Setup Expert
                      </p>
                    </div>
                    <div className="w-1/3 w-[500px] p-4 text-primary text-justify flex flex-col items-center justify-center text-center">
                      <ul className="text-justify">
                        <li className="block px-5 py-2 mt-4 text-3xl text-[#000000]  transition-colors duration-300">
                          Free Zone
                        </li>
                        <li className="pl-2">
                          <Link
                            href="#"
                            className="block px-4 py-2 text-sm text-[#000000] hover:text-white hover:bg-[#000000] transition-colors duration-300"
                            role="menuitem"
                          >
                            Overview
                          </Link>
                        </li>
                        <li className="pl-2">
                          <Link
                            href="#"
                            className="block px-4 py-2 text-sm text-[#000000] hover:text-white hover:bg-[#000000] transition-colors duration-300"
                            role="menuitem"
                          >
                            Business Activities
                          </Link>
                        </li>
                        <li className="pl-2">
                          <Link
                            href="#"
                            className="block px-4 py-2 text-sm text-[#000000] hover:text-white hover:bg-[#000000] transition-colors duration-300"
                            role="menuitem"
                          >
                            Free Zone License Locations and Pricing
                          </Link>
                        </li>
                        <li className="pl-2">
                          <Link
                            href="#"
                            className="block px-4 py-2 text-sm text-[#000000] hover:text-white hover:bg-[#000000] transition-colors duration-300"
                            role="menuitem"
                          >
                            UAE Residence Visa
                          </Link>
                        </li>
                        <li className="pl-2">
                          <Link
                            href="#"
                            className="block px-4 py-2 text-sm text-[#000000] hover:text-white hover:bg-[#000000] transition-colors duration-300"
                            role="menuitem"
                          >
                            Our Solution
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="w-1/3 w-[500px] p-4 text-primary text-justify flex flex-col items-center justify-center text-center">
                      <h3 className="text-3xl mb-4 px-32 text-justify"></h3>
                      <ul className="text-left">
                        <li className="block px-5 py-2 text-3xl text-[#000000]  transition-colors duration-300">
                          MainLand
                        </li>

                        <li className="pl-2">
                          <Link
                            href="#"
                            role="menuitem"
                            className="block px-4 py-2 text-sm text-[#000000] hover:text-white hover:bg-[#000000] transition-colors duration-300"
                          >
                            Overview
                          </Link>
                        </li>
                        <li className="pl-2">
                          <Link
                            href="#"
                            className="block px-4 py-2 text-sm text-[#000000] hover:text-white hover:bg-[#000000] transition-colors duration-300"
                            role="menuitem"
                          >
                            Sponsorship
                          </Link>
                        </li>
                        <li className="pl-2">
                          <Link
                            href="#"
                            className="block px-4 py-2 text-sm text-[#000000] hover:text-white hover:bg-[#000000] transition-colors duration-300"
                            role="menuitem"
                          >
                            Dubai MainLand License
                          </Link>
                        </li>
                        <li className="pl-2">
                          <Link
                            href="#"
                            className="block px-4 py-2 text-sm text-[#000000] hover:text-white hover:bg-[#000000] transition-colors duration-300"
                            role="menuitem"
                          >
                            Business Activities
                          </Link>
                        </li>
                        <li className="pl-2">
                          <Link
                            href="#"
                            className="block px-4 py-2 text-sm text-[#000000] hover:text-white hover:bg-[#000000] transition-colors duration-300"
                            role="menuitem"
                          >
                            MainLand Visas
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              {/* <Link
                href="#"
                className="text-primary font-Jost font-bold border-b-2 border-transparent hover:text-black hover:text-muted-foreground px-3 py-2  transition-colors duration-300 font-medium"
                aria-label="News"
              >
                NEWS
              </a> */}
              <Link
                href="/join-us"
                className="text-primary font-Jost font-bold border-b-2 border-transparent hover:text-black hover:text-muted-foreground px-3 py-2  transition-colors duration-300 font-medium"
                aria-label="Join Us"
              >
                JOIN US
              </Link>

              {Object.keys(dropdownItems).map((key) => (
                <div key={key} className="relative inline-block text-left">
                  <button
                    onClick={() => handleDropdown(key)}
                    className="text-[#000000] border-b-2 border-transparent hover:text-white hover:border-[#000000] hover:bg-[#000000] px-3 py-2 rounded-md text-sm font-medium flex items-center"
                    aria-expanded={activeDropdown === key}
                    aria-haspopup="true"
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                    <FaAngleDown className="ml-1" />
                  </button>

                  {activeDropdown === key && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        {dropdownItems[key].map((item) => (
                          <Link
                            key={item}
                            href="#"
                            className="block px-4 py-2 text-sm text-[#000000] hover:text-white hover:bg-[#000000]"
                            role="menuitem"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
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

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#"
              className="text-primary hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              href="/attroney"
              className="text-primary hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              ATTORNEYS
            </Link>
            <Link
              href="/practice-areas"
              className="text-primary hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              PRACTICE AREAS
            </Link>
            <Link
              href="/industries"
              className="text-primary hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              INDUSTRIES
            </Link>
            <Link
              href="#"
              className="text-primary hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              LOCATION
            </Link>
            <Link
              href="#"
              className="text-primary hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              NEWS
            </Link>
            <Link
              href="#"
              className="text-primary hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              JOIN US
            </Link>

            {Object.keys(dropdownItems).map((key) => (
              <div key={key}>
                <button
                  onClick={() => handleDropdown(key)}
                  className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  <FaAngleDown />
                </button>
                {activeDropdown === key && (
                  <div className="pl-4">
                    {dropdownItems[key].map((item) => (
                      <Link
                        key={item}
                        href="#"
                        className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-sm font-medium"
                        onClick={closeMenu}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
