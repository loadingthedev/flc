export default function Header() {
  return (
    <div className="bg-muted-foreground w-full h-[600px] flex flex-row justify-center items-center gap-20 p-10">
      <div>
        <h1 className="text-3xl text-primary font-bold text-start  mb-2">
          HOW TO REGISTER YOUR COMPANY
          {""}
        </h1>
        <p className="text-white text-4xl font-bold mb-2">
          Company Registration In Dubai
        </p>
        <p className="text-white text-xl ">
          Although Company Registration in the UAE can differ depending on{" "}
          <br />
          each jurisdiction, this step-by-step guide shows you the key steps
          involved.
        </p>

        <button className="flex items-center bg-white text-black gap-2 mt-8 px-12 py-4 border-2 border-white rounded-none transition-all hover:bg-primary hover:text-primary-foreground">
          Get Started
        </button>
      </div>
      <div>
        <img
          src="https://virtuzone.com/wp-content/uploads/2021/09/3.-Registration-Process.png.webp"
          alt="UAE Free Zone"
          className="w-[600px] h-[520px] mt-20"
        />
      </div>
    </div>
  );
}
