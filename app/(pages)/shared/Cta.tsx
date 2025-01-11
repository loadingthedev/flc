import { motion } from "framer-motion";
export default function Cta() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mt-16 bg-primary  p-8 text-white text-center overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -right-20 -bottom-20 w-64 h-64"
          >
            <div className="grid grid-cols-2 gap-4 transform rotate-45">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{
                    duration: 2,
                    delay: i * 0.5,
                    repeat: Infinity,
                  }}
                  className="w-16 h-16 bg-white/10 rounded-lg"
                />
              ))}
            </div>
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -left-20 -top-20 w-64 h-64"
          >
            <div className="grid grid-cols-2 gap-4 transform -rotate-45">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{
                    duration: 2,
                    delay: i * 0.5,
                    repeat: Infinity,
                  }}
                  className="w-16 h-16 bg-white/10 rounded-lg"
                />
              ))}
            </div>
          </motion.div>
        </div>

        <h2 className="text-3xl font-Jost font-extrabold  mb-4">
          Need Legal Assistance?
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Our experienced attorneys are here to help you navigate complex legal
          matters. Schedule a consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Schedule Consultation
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
}
