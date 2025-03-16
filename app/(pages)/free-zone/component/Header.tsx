export default function Header() {
  return (
    <div className="bg-muted-foreground py-8 md:py-18 w-full h-auto md:h-[600px] flex flex-col md:flex-row justify-between items-center px-4 md:px-20">
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

        <button className="flex items-center bg-white text-black gap-2 mt-8 md:mt-12 px-8 md:px-12 py-3 md:py-4 border-2 border-white rounded-none transition-all hover:bg-primary hover:text-primary-foreground">
          Get Started
        </button>
      </div>
      <div className="w-full md:w-auto mt-10 md:mt-0 md:mb-0 md:pl-25 flex justify-center md:justify-end">
        <img
          src="https://go.virtuzone.com/wp-content/uploads/2024/12/over-1.png.webp"
          alt="UAE Free Zone"
          className="w-full md:w-[700px] h-auto md:h-[520px] mt-10 md:mt-20"
        />
      </div>
    </div>
  );
}
