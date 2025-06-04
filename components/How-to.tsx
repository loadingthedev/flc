const steps = [
  {
    title: "Step 1",
    shortTitle: "Book a Discovery Call",
    description:
      "Schedule a call to discuss your needs and what you are looking for in your ideal virtual assistant.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h3l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Step 2",
    shortTitle: "Fill out a hiring survey",
    description:
      "Complete a detailed survey about your hiring requirements and participate in a 45-minute Zoom call.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-11a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Step 3",
    shortTitle: "We search for top candidates",
    description:
      "Our team reviews your needs to create a virtual assistant profile and present the best candidates matching your requirements.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
  },
  {
    title: "Step 4",
    shortTitle: "Interview and hire",
    description:
      "Meet with pre-screened candidates and choose the perfect match for your team",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
  },
];

const How = () => {
  return (
    <section className="py-12 bg-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#001d47] mb-8">
          How It Works?
        </h2>
      </div>

      <div className="max-w-7xl mt-20 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-green-600 mb-4">{step.icon}</div>

            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-800 font-medium mb-2">
              {step.shortTitle || step.title}
            </p>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 my-12" />

      {/* Pricing Section */}
      {/* <div className="text-center">
        <h3 className="text-2xl font-bold text-[#001d47] mb-2">Pricing</h3>
        <p className="text-gray-600 mb-6">
          Get a personalized quote from our legal consultants.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
          Get a Quote
        </button>
      </div> */}
    </section>
  );
};

export default How;
