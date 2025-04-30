import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-16 bg-gradient-to-b from-[#0f172a] to-[#1e293b] overflow-hidden transition-colors duration-300">
      {/* Main Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 relative"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Crafting Crazy Cool Web <span className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-transparent bg-clip-text">Experiences</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          I'm a full-stack developer turning ideas into modern, high-impact digital solutions that grab attention and build trust.
        </p>
        <motion.a
          whileHover={{ scale: 1.1, textShadow: "0px 0px 10px #fff" }}
          whileTap={{ scale: 0.95 }}
          href="#projects"
          className="inline-block mt-8 px-8 py-3 text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
        >
          View Projects
        </motion.a>
      </motion.div>
    </section>
  );
}
