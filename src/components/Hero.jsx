// Hero Section
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-16 bg-gradient-to-b from-white to-blue-50 dark:from-[#0f172a] dark:to-[#1e293b] transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Crafting Crazy Cool Web <span className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-transparent bg-clip-text">Experiences</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I'm a full-stack developer turning ideas into modern, high-impact digital solutions that grab attention and build trust.
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#projects"
          className="inline-block mt-8 px-8 py-3 text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
        >
          View Projects
        </motion.a>
      </motion.div>
    </section>
  );
}
