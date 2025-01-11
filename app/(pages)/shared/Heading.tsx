import { motion } from "framer-motion";

type HeadingProps = {
  title: string;
  subtitle: string;
  paragraph: string;
  subparagraph: string;
};

export default function Heading({
  title,
  subtitle,
  paragraph,
  subparagraph,
}: HeadingProps) {
  return (
    <div className="container mx-auto px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6 relative z-10"
      >
        <h1 className="text-5xl font-brandon font-bold mb-6 mt-16 text-foreground antialiased">
          {title}
        </h1>

        <h2 className="text-lg mb-4 font-brandon font-bold text-foreground tracking-wide antialiased">
          {subtitle}
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6 relative z-10"
      >
        <p className="text-foreground max-w-3xl mx-auto leading-relaxed font-brandon antialiased">
          {paragraph}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6 relative z-10"
      >
        <p className="text-foreground max-w-3xl mx-auto leading-relaxed font-brandon antialiased">
          {subparagraph}
        </p>
      </motion.div>
    </div>
  );
}
