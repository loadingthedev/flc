const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center my-12 ">
      <div className="mt-8 md:mt-0 ">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-red p-2 w-12 h-12 flex items-center justify-center">
            <FaMapMarkerAlt color="red" size={40} />
          </div>
        </div>
        <h2 className="text-3xl text-center font-bold text-primary mb-4 mt-8">
          Your UAE Free Zone Company Starts Here
        </h2>
        <div className="flex flex-col md:flex-row items-center ml-40 mt-8 ">
          <div className="md:w-1/3">
            <img
              src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg"
              alt="UAE Free Zone"
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-30 md:pl-10">
            <p className="text-lg">
              FLC assists with company incorporation across more than 50 UAE
              free zones. There’s no doubt a lot of information to review and
              much to consider when making the decision on which free zone is
              best suited to your specific business requirements, including
              location, price, business type, flexi-desk or office space
              options, auditing and bookkeeping and share capital requirements,
              and much more. <br /> <br />
              That’s where the Virtuzone team comes in, walking you through it
              step-by-step, steering you in the right direction, saving you
              money, and ultimately making the entire experience a stress-free
              one.
            </p>
            <button className="flex items-center gap-2 px-8 py-4 mt-6 border-2 bg-primary border-white rounded-none transition-all  text-white hover:bg-muted-foreground hover:text-primary-foreground">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
