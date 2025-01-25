// components/Logo.tsx
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <text>
          <img
            src="/images/flc-logo.png"
            alt="Logo"
            width={"250"}
            height={"250"}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              const target = e.target as HTMLImageElement;
            }}
          />
        </text>
      </Link>
    </div>
  );
};

export default Logo;
