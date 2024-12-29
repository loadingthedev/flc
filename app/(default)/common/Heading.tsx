import { motion } from "framer-motion";

type HeadingProps = {
  title: string;
  subtitle: string;
  paragraph: string;
};

export default function Heading({
  title,
  subtitle,

  paragraph,
}: HeadingProps) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-5xl font-brandon font-extrabold mb-6 mt-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 ">
          {title}
        </h1>

        <h2 className="text-4xl mb-2  font-brandon font-bold text-gray-800 tracking-wide ">
          {subtitle}
        </h2>

        <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed  font-brandon ">
          {paragraph}
        </p>
      </motion.div>
    </div>
  );
}
