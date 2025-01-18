"use client";
import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
          Contact Us
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="bg-card p-8 ">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`flex items-center gap-2 px-6 py-3 rounded-none transition-all bg-primary text-white hover:bg-muted-foreground text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-accent text-xl" />
                <span className="text-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-accent text-xl" />
                <span className="text-foreground">contact@example.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-accent text-xl" />
                <span className="text-foreground">
                  123 Innovation Street, San Francisco, CA 94103
                </span>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                Office Hours
              </h4>
              <p className="text-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-foreground">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-foreground">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
