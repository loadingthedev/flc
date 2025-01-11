import React from "react";

interface TypingProps {
  text: string;
  className?: string;
}

const Typing: React.FC<TypingProps> = ({ text }) => {
  return (
    <>
      <h2
        className="mb-8 border-y text-4xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl text-center"
        data-aos="zoom-y-out"
        data-aos-delay={150}
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          borderRight: "0.15em solid orange",
          animation: "typing 3.5s steps(40, end), blink-caret 0.75s infinite",
          lineHeight: "1.4em",
        }}
      >
        {text}
      </h2>
      <style jsx>{`
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: orange;
          }
        }
        @media (max-width: 768px) {
          h2 {
            font-size: 2rem; /* Adjust the font size for mobile screens */
          }
        }
        @media (max-width: 480px) {
          h2 {
            font-size: 1.5rem; /* Further adjust the font size for smaller screens */
          }
        }
      `}</style>
    </>
  );
};

export default Typing;
