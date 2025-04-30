import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMysql, SiBootstrap, SiGithub, SiExpress, SiVite } from "react-icons/si";


export default function About() {
  return (
    <section id="about" className="min-h-screen py-12 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-[#0f172a] dark:to-[#1e293b] transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I'm a passionate full-stack developer committed to creating seamless, user-friendly, and visually engaging websites and web applications.
          From frontend to backend, my skills enable me to deliver complete and robust web solutions.
        </p>
      </motion.div>

      <div className="mt-12 flex flex-wrap justify-center gap-12">
        {/* Frontend Development Section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-xs text-center shadow-lg p-6 rounded-lg bg-white dark:bg-[#1e293b] border dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Frontend Development</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Building modern and responsive interfaces using cutting-edge technologies and design principles.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-6"
          >
            <ul className="list-disc text-left text-gray-600 dark:text-gray-300">
              <li>React & Express.js</li>
              <li>HTML5, CSS3, JavaScript (ES6+)</li>
              <li>Responsive Web Design</li>
              <li>UI/UX Design Principles</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Backend Development Section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="max-w-xs text-center shadow-lg p-6 rounded-lg bg-white dark:bg-[#1e293b] border dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Backend Development</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Crafting powerful, secure, and scalable backends using Node.js, Express, and various database technologies.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-6"
          >
            <ul className="list-disc text-left text-gray-600 dark:text-gray-300">
              <li>Node.js, Express.js</li>
              <li>MongoDB</li>
              <li>APIs </li>
              <li>Authentication & Security</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Full Stack Development Section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="max-w-xs text-center shadow-lg p-6 rounded-lg bg-white dark:bg-[#1e293b] border dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Full Stack Development</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Bringing it all together with full-stack solutions that bridge the gap between frontend and backend.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="mt-6"
          >
            <ul className="list-disc text-left text-gray-600 dark:text-gray-300">
              <li>End-to-End Web Solutions</li>
              <li>Project Deployment & CI/CD</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Ending Note */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true }}
  className="mt-12 text-center"
>
  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
    I don’t just write code — I build digital experiences.
  </h3>
  <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
    From crisp frontend UIs to scalable backend logic, I blend creativity and logic to solve problems and craft smooth user journeys. Let’s build something powerful together.
  </p>
  <a
    href="#projects"
    className="inline-block px-6 py-3 text-white bg-gradient-to-r from-[#0072ff] to-[#00c6ff] rounded-xl font-medium shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
  >
    View My Projects 🚀
  </a>
</motion.div>
{/* Tech Stack Section */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mt-12"
>
  <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
    ⚙️ Technologies I Work With
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
    {[
      { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML5' },
      { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS3' },
      { icon: <FaReact className="text-cyan-400" />, name: 'React.js' },
      { icon: <FaNodeJs className="text-green-600" />, name: 'Node.js' },
      { icon: <FaDatabase className="text-yellow-500" />, name: 'MongoDB' },
      { icon: <SiExpress className="text-gray-800 dark:text-white" />, name: 'Express.js' },
      { icon: <SiJavascript className="text-yellow-400" />, name: 'JavaScript' },
      { icon: <SiTailwindcss className="text-sky-400" />, name: 'Tailwind CSS' },
      { icon: <SiBootstrap className="text-purple-600" />, name: 'Bootstrap' },
      { icon: <SiGithub className="text-black dark:text-white" />, name: 'GitHub' },
      { icon: <SiVite className="text-purple-500" />, name: 'Vite' },
    ].map(({ icon, name }, index) => (
      <motion.div
        key={name}
        className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index }}
        viewport={{ once: true }}
      >
        <div className="text-3xl mb-2">{icon}</div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{name}</span>
      </motion.div>
    ))}
  </div>
</motion.div>

    </section>
  );
}
