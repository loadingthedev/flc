import Link from "next/link";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: Array<{
    href?: string;
    label: string;
    type?: "link" | "dropdown";
    menuType?: "tax" | "businessSetup" | "serviceSetup";
  }>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navigationItems,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navigationItems.map((item) =>
          item.type === "dropdown" ? (
            <DropdownMenu
              key={item.label}
              label={item.label}
              isActive={activeDropdown === item.label}
              onToggle={() => handleDropdownToggle(item.label)}
              menuType={item.menuType!}
            />
          ) : (
            <Link
              key={item.label}
              href={item.href!}
              className="text-primary hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={onClose}
            >
              {item.label}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
