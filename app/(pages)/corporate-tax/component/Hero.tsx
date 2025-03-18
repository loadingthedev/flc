export default function Hero() {
  return (
    <div className="bg-muted-foreground  w-full   h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-20">
      <div className="text-center md:text-left mt-20 md:mt-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          UAE VAT Registration Assistance & Tax Consultancy
        </h1>
        <p className="text-xl md:text-3xl font-bold text-white mt-4 mb-8">
          Ensure your business complies with the UAE’s tax regulations
        </p>

        <p className="text-white text-base md:text-xl mb-8">
          Our team will assist you in registering your business for VAT and
          securing an individual or corporate tax residency certificate from the
          Federal Tax Authority (FTA).
        </p>
        <div className="flex justify-center md:justify-start ">
          <button className="flex items-center gap-2 px-8 md:px-12 py-4 border-2 border-white rounded-none transition-all text-white hover:bg-primary hover:text-primary-foreground">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10 md:pt-40 ">
        <img
          src="https://virtuzone.com/wp-content/uploads/2023/04/VZ-Image.png.webp"
          alt="UAE Free Zone"
          className="w-full h-auto md:mt-auto"
        />
      </div>
    </div>
  );
}
