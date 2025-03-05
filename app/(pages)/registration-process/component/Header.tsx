export default function Header() {
  return (
    <div className="bg-muted-foreground w-full h-auto flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 p-5 md:p-10">
      <div className="text-center md:text-start">
        <h1 className="text-2xl md:text-3xl text-primary font-bold mb-2">
          HOW TO REGISTER YOUR COMPANY
        </h1>
        <p className="text-white text-2xl md:text-4xl font-bold mb-2">
          Company Registration In Dubai
        </p>
        <p className="text-white text-base md:text-xl">
          Although Company Registration in the UAE can differ depending on{" "}
          <br className="hidden md:block" />
          each jurisdiction, this step-by-step guide shows you the key steps
          involved.
        </p>

        <button className="flex items-center bg-white text-black gap-2 mt-8 px-8 md:px-12 py-3 md:py-4 border-2 border-white rounded-none transition-all hover:bg-primary hover:text-primary-foreground">
          Get Started
        </button>
      </div>
      <div>
        <img
          src="https://virtuzone.com/wp-content/uploads/2021/09/3.-Registration-Process.png.webp"
          alt="UAE Free Zone"
          className="w-full md:w-[600px] h-auto md:h-[520px] mt-10 md:mt-20"
        />
      </div>
    </div>
  );
}
