import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-muted-foreground py-24 width-full h-[600px] flex flex-col md:flex-row justify-center items-center pl-20 gap-20">
      <div>
        <h1 className="text-xl font-bold mb-4 text-primary mt-20">
          UAE MAINLAND VISAS
        </h1>
        <p className="text-5xl font-bold text-white mt-4 mb-8">
          UAE VISA
          <br /> REQUIREMENTS
        </p>

        <p className="text-white text-xl mb-8">
          Whether you need employment visas for your team or <br /> residence
          visas for your family members, we will ensure all <br />
          your UAE visa requirements are met – expediently.
        </p>
        <Link href="contact">
          <button className="flex items-center gap-2 px-12 py-4 border-2 border-white rounded-none transition-all text-white hover:bg-primary hover:text-primary-foreground">
            Get Started
          </button>
        </Link>
      </div>
      <div className="md:w-1/2 mt-30 md:mb-0 md:pl-35 mt-20">
        <img
          src="https://virtuzone.com/wp-content/uploads/2021/10/Mainland-Visa-min.png.webp"
          alt="UAE Free Zone"
          className="w-[650px] h-[500px] mt-5"
        />
      </div>
    </div>
  );
};

export default Header;
