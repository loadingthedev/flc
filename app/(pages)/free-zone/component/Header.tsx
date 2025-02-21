export default function Header() {
  return (
    <div className="bg-muted-foreground  py-18 width-full h-[600px] flex flex-col md:flex-row justify-between items-center pl-20">
      <div className="md:ml-20">
        <h1 className="text-4xl font-bold mb-4 text-white mt-20">
          Explore top UAE free zones and <br />
          their unique benefits for your business{" "}
        </h1>
        <p className="text-white text-xl mb-4">
          With over 40 free zone jurisdictions in the UAE, selecting the right{" "}
          <br />
          one for your business can seem overwhelming. That’s where <br />{" "}
          Virtuzone makes a difference.
        </p>

        <p className="text-white text-xl mb-8">
          Our Company Formation Specialists are here to guide you, helping{" "}
          <br /> you choose the most suitable free zone based on your business
          type, <br />
          activities, requirements, and budget.
        </p>

        <button className="flex items-center bg-white  text-black gap-2 mt-12 px-12 py-4 border-2 border-white rounded-none transition-all hover:bg-primary hover:text-primary-foreground">
          Get Started
        </button>
      </div>
      <div className="md:w-1/1 mt-50 md:mb-0 md:pl-25">
        <img
          src="https://go.virtuzone.com/wp-content/uploads/2024/12/over-1.png.webp"
          alt="UAE Free Zone"
          className="w-[700px] h-[520px] mt-20 md:mt-[50] mr-20 "
        />
      </div>
    </div>
  );
}
