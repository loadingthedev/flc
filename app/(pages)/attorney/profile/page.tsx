"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

interface PracticeArea {
  title: string;
  description: string;
  cases: string;
  success: string;
}

interface Testimonial {
  text: string;
  author: string;
  position: string;
}

const AttorneyProfile: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): Errors => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const practiceAreas: PracticeArea[] = [
    {
      title: "Family Law",
      description: "Expertise in divorce, custody, and adoption issues.",
      cases: "500+ Cases",
      success: "95% Success Rate",
    },
    {
      title: "Corporate Law",
      description: "Advising businesses on compliance and contracts.",
      cases: "300+ Cases",
      success: "90% Success Rate",
    },
    {
      title: "Criminal Defense",
      description: "Representing clients in criminal proceedings.",
      cases: "200+ Cases",
      success: "88% Success Rate",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      text: "John's expertise in family law helped me navigate through a difficult divorce.",
      author: "Sarah Johnson",
      position: "Client",
    },
    {
      text: "Exceptional service and professionalism throughout our corporate restructuring.",
      author: "Michael Chen",
      position: "CEO, Tech Solutions",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-background to-secondary py-16 ">
      <header className="bg-primary shadow-lg text-primary-foreground py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0 hover:transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296"
              alt="John Doe"
              className="w-24 h-24 rounded-full object-cover border-4 border-accent shadow-xl"
            />
            <div className="ml-6">
              <h1 className="text-3xl font-bold font-heading">John Doe</h1>
              <p className="text-xl text-accent">Attorney at Law</p>
            </div>
          </div>
          <nav className="bg-primary/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-md">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#about"
                  className="hover:text-accent transition-colors duration-300 font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#practice"
                  className="hover:text-accent transition-colors duration-300 font-medium"
                >
                  Practice Areas
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-accent transition-colors duration-300 font-medium"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-accent transition-colors duration-300 font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="about" className="py-20 bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-foreground text-lg leading-relaxed">
                John Doe is a seasoned attorney with over 10 years of experience
                in family law and corporate litigation. He graduated from
                Harvard Law School and has been practicing in New York City
                since 2010.
              </p>
              <p className="text-foreground text-lg leading-relaxed">
                His dedication to client service and thorough understanding of
                complex legal matters has earned him recognition among peers and
                clients alike.
              </p>
            </div>
            <div className="bg-secondary/80 backdrop-blur-sm p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-6">
                Education & Credentials
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Harvard Law School, J.D.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>New York Bar Association Member</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>American Bar Association Member</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="practice" className="py-20 ">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Practice Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {practiceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 group"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-foreground text-lg mb-4">
                    {area.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{area.cases}</span>
                    <span>{area.success}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="py-20 bg-secondary/80 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Client Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <p className="text-foreground text-lg mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-xl">{testimonial.author}</p>
                  <p className="text-muted-foreground">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Contact Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-xl shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-lg">
                  <FaPhone className="text-primary text-2xl" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4 text-lg">
                  <FaEnvelope className="text-primary text-2xl" />
                  <span>john.doe@lawfirm.com</span>
                </div>
                <div className="flex items-center space-x-4 text-lg">
                  <FaMapMarkerAlt className="text-primary text-2xl" />
                  <span>123 Legal Street, New York, NY 10001</span>
                </div>
                <div className="flex space-x-6 mt-8">
                  <FaLinkedin className="text-primary text-3xl cursor-pointer hover:text-accent transition-colors duration-300" />
                  <FaTwitter className="text-primary text-3xl cursor-pointer hover:text-accent transition-colors duration-300" />
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-2">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-2">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300"
                  ></textarea>
                  {errors.message && (
                    <p className="text-destructive text-sm mt-2">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
                {isSubmitted && (
                  <p className="text-accent text-center mt-4 font-medium">
                    Thank you for your message! We'll respond shortly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AttorneyProfile;
