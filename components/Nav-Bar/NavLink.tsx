// components/NavLink.tsx
import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="text-primary font-Jost font-bold border-b-2 border-transparent hover:text-black hover:text-muted-foreground px-3 py-2 transition-colors duration-300 font-medium"
      aria-label={label}
    >
      {label}
    </Link>
  );
};

export default NavLink;
