import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import NavLink from "./NavLink";

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

import { useState } from "react";

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navigationItems,
  dropdownItems,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  if (!isOpen) return null;
  const handleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

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
            className="text-primary hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
        {navigationItems.slice(0, -1).map((item) => (
          <NavLink key={item.label} {...item} />
        ))}

        {dropdownItems.map((item) => (
          <DropdownMenu
            label={item.label}
            isActive={activeDropdown === item.menuType}
            onToggle={() => handleDropdown(item.menuType)}
            menuType={item.menuType}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
