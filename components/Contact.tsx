"use client";
import { useState } from "react";
import { FiMail, FiMessageSquare, FiUser } from "react-icons/fi";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all fields",
      });
      return;
    }

    setStatus({
      type: "success",
      message: "Thank you for your message. We'll get back to you soon!",
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 ">
            <form onSubmit={handleSubmit} className="bg-secondary p-8  ">
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-foreground font-medium mb-2">
                    <FiUser className="text-primary" />
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-foreground font-medium mb-2">
                    <FiMail className="text-primary" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-foreground font-medium mb-2">
                    <FiMessageSquare className="text-primary" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    // rows="4"
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {status.message && (
                  <div
                    className={`p-4 rounded-md ${
                      status.type === "success"
                        ? "bg-accent text-accent-foreground"
                        : "bg-destructive text-destructive-foreground"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  className={`flex items-center gap-2 px-6 py-3 rounded-none transition-all bg-primary text-white hover:bg-muted-foreground text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 lg:mt-8">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Get in Touch
            </h2>
            <p className="text-body text-muted-foreground mb-8">
              We would love to hear from you. Our team is always here to assist
              you with any questions, concerns, or feedback you might have.
              Please fill out the form, and we'll get back to you as soon as
              possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <FiMail className="text-primary text-xl" />
                <span>office@firstlegalcounsel.com</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <FiMessageSquare className="text-primary text-xl" />
                <span>Monday - Friday, 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
