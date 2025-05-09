import { FiMail, FiMessageSquare } from "react-icons/fi";

const ContactUs = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start px-4 sm:px-6 lg:px-8">
      <div className="py-20 max-w-5xl mx-auto">
        <div className="bg-gray-50 p-8 shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-4xl font-extrabold mb-6 text-start text-primary">
            Contact Us
          </h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-gray-800"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="nationality"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Nationality
                </label>
                <input
                  type="text"
                  id="nationality"
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="help"
                  className="block text-sm font-semibold text-gray-800"
                >
                  How Can We Help You
                </label>
                <select
                  id="help"
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                >
                  <option value="">Select an option</option>
                  <option value="company-setup">Business Setup</option>
                  <option value="legal-advice">Corporate Service</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-800"
              >
                Message
              </label>
              <textarea
                id="message"
                className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                rows={4}
              ></textarea>
            </div>
            <button className="flex items-center gap-2 px-12 py-4 my-8 border-2 border-primary rounded-lg transition-all text-white bg-primary hover:bg-primary-dark hover:border-primary-dark">
              Get Started
            </button>
          </form>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:mt-8 lg:pl-10 lg:pt-60">
        <h2 className="text-4xl font-extrabold text-foreground mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          We would love to hear from you. Our team is always here to assist you
          with any questions, concerns, or feedback you might have. Please fill
          out the form, and we'll get back to you as soon as possible.
        </p>
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-foreground">
            <FiMail className="text-primary text-2xl" />
            <span className="text-lg font-medium">support@example.com</span>
          </div>
          <div className="flex items-center gap-4 text-foreground">
            <FiMessageSquare className="text-primary text-2xl" />
            <span className="text-lg font-medium">
              Monday - Friday, 9:00 AM - 6:00 PM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
