const FlcHero = () => {
  return (
    <section className="bg-primary text-white py-40 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            First Legal Counsel
          </h1>
          <p className="text-lg mb-6">
            FLC is a globally integrated solution that helps you get expert
            guidance to manage set up and expansion in 20+ countries through a
            single platform
          </p>
          <p className="text-sm mb-6 text-white/90">
            Over 3,000+ verified reviews
          </p>
          <div className="flex items-center space-x-6">
            <img
              src="https://cdn.legalinz.com/imgs/google-n.svg"
              alt="Google Reviews"
              className="h-6"
            />
            <img
              src="https://cdn.legalinz.com/imgs/trust.svg"
              alt="Trustpilot Reviews"
              className="h-6"
            />
            <img
              src="https://cdn.legalinz.com/imgs/shop.svg"
              alt="Shopper Approved"
              className="h-6"
            />
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white text-black p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Get a Free Quote</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
            <div className="flex">
              <span className="px-3 py-2 bg-gray-100 border border-r-0 rounded-l-md text-sm">
                +971
              </span>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-2 border rounded-r-md focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
              rows={3}
            ></textarea>
            <p className="text-xs text-gray-500">
              We will handle your personal data in compliance with your{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </p>
            <button
              type="submit"
              className={`flex items-center gap-2 px-6 py-3 rounded-none transition-all bg-primary text-white hover:bg-muted-foreground text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FlcHero;
