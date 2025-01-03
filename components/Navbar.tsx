"use client";
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
            <img
              src="/logo.svg"
              alt="Logo"
              width={"250"}
              height={"250"}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
              }}
            />
          </div>

          <div className="  -text-[#000000] hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/attorney"
                className="text-[#000000]  font-brandon font-extrabold border-b-2 border-transparent hover:text-white hover:border-[#000000] hover:bg-[#000000] px-3 py-2 rounded-md text-sm font-medium"
                aria-label="Attorneys"
              >
                ATTORNEYS
              </a>
              <a
                href="/practice-areas"
                className="text-[#000000] font-brandon font-extrabold border-b-2 border-transparent hover:text-white hover:border-[#000000] hover:bg-[#000000] px-3 py-2 rounded-md text-sm font-medium"
                aria-label="Practice Areas"
              >
                PRACTICE AREAS
              </a>
              <a
                href="#"
                className="text-[#000000]   font-brandon font-extrabold border-b-2 border-transparent hover:text-white hover:border-[#000000] hover:bg-[#000000] px-3 py-2 rounded-md text-sm font-medium"
                aria-label="Industries"
              >
                INDUSTRIES
              </a>
              <a
                href="#"
                className="text-[#000000] font-brandon font-extrabold border-b-2 border-transparent hover:text-white hover:border-[#000000] hover:bg-[#000000] px-3 py-2 rounded-md text-sm font-medium"
                aria-label="Team"
              >
                TEAM
              </a>
              <a
                href="#"
                className="text-[#000000]  font-brandon font-extrabold border-b-2 border-transparent hover:text-white hover:border-[#000000] hover:bg-[#000000] px-3 py-2 rounded-md text-sm font-medium"
                aria-label="Location"
              >
                LOCATION
              </a>
              <a
                href="#"
                className="text-[#000000]  font-brandon font-extrabold border-b-2 border-transparent hover:text-white hover:border-[#000000] hover:bg-[#000000] px-3 py-2 rounded-md text-sm font-medium"
                aria-label="News"
              >
                NEWS
              </a>
              <a
                href="#"
                className="text-[#000000]  font-brandon font-extrabold border-b-2 border-transparent hover:text-white hover:border-[#000000] hover:bg-[#000000] px-3 py-2 rounded-md text-sm font-medium"
                aria-label="Join Us"
              >
                JOIN US
              </a>

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
                          <a
                            key={item}
                            href="#"
                            className="block px-4 py-2 text-sm text-[#000000] hover:text-white hover:bg-[#000000]"
                            role="menuitem"
                          >
                            {item}
                          </a>
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
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              About Us
            </a>
            <a
              href="/attroney"
              className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              ATTORNEYS
            </a>
            <a
              href="/practice-areas"
              className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              PRACTICE AREAS
            </a>
            <a
              href="#"
              className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              INDUSTRIES
            </a>
            <a
              href="#"
              className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              LOCATION
            </a>
            <a
              href="#"
              className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              NEWS
            </a>
            <a
              href="#"
              className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              JOIN US
            </a>

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
                      <a
                        key={item}
                        href="#"
                        className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-sm font-medium"
                        onClick={closeMenu}
                      >
                        {item}
                      </a>
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
