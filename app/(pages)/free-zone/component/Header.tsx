import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-muted-foreground  w-full   h-auto flex flex-col md:flex-row justify-between items-center px-8 md:px-40 mt-16 md:mt-0">
      <div className="md:ml-20 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-white mt-10 md:mt-20">
          Explore top UAE free zones and <br className="hidden md:block" />
          their unique benefits for your business
        </h1>
        <p className="text-white text-lg md:text-xl mb-4">
          With over 40 free zone jurisdictions in the UAE, selecting the right{" "}
          <br className="hidden md:block" />
          one for your business can seem overwhelming. That’s where{" "}
          <br className="hidden md:block" /> FLC makes a difference.
        </p>

        <p className="text-white text-lg md:text-xl mb-8">
          Our Company Formation Specialists are here to guide you, helping{" "}
          <br className="hidden md:block" /> you choose the most suitable free
          zone based on your business type, <br className="hidden md:block" />
          activities, requirements, and budget.
        </p>

        <div className="flex justify-center md:justify-start">
          <Link href="contact">
            <button className="flex items-center gap-2 px-8 py-4 mt-6 border-2  border-white rounded-none transition-all text-white hover:bg-primary hover:text-primary-foreground">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10 md:pt-10">
        <img
          src="https://go.virtuzone.com/wp-content/uploads/2024/12/over-1.png.webp"
          alt="UAE Free Zone"
          className="w-full  h-auto  mt-10 md:mt-20"
        />
      </div>
    </div>
  );
}
