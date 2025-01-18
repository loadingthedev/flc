import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqs = [
  {
    question: "What benefits do members receive?",
    answer:
      "Members receive exclusive access to resources, networking events, professional development opportunities, and mentorship programs.",
  },
  {
    question: "How can I join?",
    answer:
      "You can join by submitting an application through our online portal. Our team will review your application within 48 hours.",
  },
];

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="transition-all duration-300">
              <button
                className="w-full flex justify-between items-center p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-all"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openFaq === index ? (
                  <IoIosArrowUp className="text-accent text-xl" />
                ) : (
                  <IoIosArrowDown className="text-accent text-xl" />
                )}
              </button>
              {openFaq === index && (
                <div className="p-6 bg-background rounded-b-xl shadow-md mt-2 animate-fade-in">
                  <p className="text-foreground text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
