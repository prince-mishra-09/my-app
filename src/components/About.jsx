import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMysql, SiBootstrap, SiGithub, SiExpress, SiVite } from "react-icons/si";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-12 px-6 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white transition-colors duration-300">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold">About Me</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          I'm a passionate full-stack developer committed to creating seamless, user-friendly, and visually engaging websites and web applications. From frontend to backend, my skills enable me to deliver complete and robust web solutions.
        </p>
      </motion.div>

      {/* Skill Cards */}
      <div className="mt-16 flex flex-wrap justify-center gap-10">
        {/* Reusable Card Component */}
        {[
          {
            title: "Frontend Development",
            desc: "Building modern and responsive interfaces using cutting-edge technologies and design principles.",
            skills: ["React & Express.js", "HTML5, CSS3, JavaScript (ES6+)", "Responsive Web Design", "UI/UX Design Principles"],
            delay: 0.3
          },
          {
            title: "Backend Development",
            desc: "Crafting powerful, secure, and scalable backends using Node.js, Express, and various database technologies.",
            skills: ["Node.js, Express.js", "MongoDB", "APIs", "Authentication & Security"],
            delay: 0.6
          },
          {
            title: "Full Stack Development",
            desc: "Bringing it all together with full-stack solutions that bridge the gap between frontend and backend.",
            skills: ["End-to-End Web Solutions", "Project Deployment & CI/CD"],
            delay: 0.9
          }
        ].map((section, index) => (
          <motion.div
            key={section.title}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: section.delay, duration: 1 }}
            className="max-w-xs w-full text-center shadow-xl p-6 rounded-xl bg-white/10 backdrop-blur border border-cyan-500 hover:shadow-cyan-500/40 hover:scale-105 hover:border-cyan-400 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-white">{section.title}</h3>
            <p className="mt-4 text-gray-300">{section.desc}</p>
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + section.delay, duration: 0.7 }}
              className="mt-6 list-disc text-left text-gray-300 pl-5 space-y-1 text-sm"
            >
              {section.skills.map(skill => <li key={skill}>{skill}</li>)}
            </motion.ul>
          </motion.div>
        ))}
      </div>

      {/* Ending Note */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          I don’t just write code — I build digital experiences.
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          From crisp frontend UIs to scalable backend logic, I blend creativity and logic to solve problems and craft smooth user journeys. Let’s build something powerful together.
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 text-white bg-gradient-to-r from-[#0072ff] to-[#00c6ff] rounded-xl font-medium shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          View My Projects 🚀
        </a>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          ⚙️ Technologies I Work With
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML5' },
            { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS3' },
            { icon: <FaReact className="text-cyan-400" />, name: 'React.js' },
            { icon: <FaNodeJs className="text-green-600" />, name: 'Node.js' },
            { icon: <FaDatabase className="text-yellow-500" />, name: 'MongoDB' },
            { icon: <SiExpress className="text-white" />, name: 'Express.js' },
            { icon: <SiJavascript className="text-yellow-400" />, name: 'JavaScript' },
            { icon: <SiTailwindcss className="text-sky-400" />, name: 'Tailwind CSS' },
            { icon: <SiBootstrap className="text-purple-600" />, name: 'Bootstrap' },
            { icon: <SiGithub className="text-white" />, name: 'GitHub' },
            { icon: <SiVite className="text-purple-500" />, name: 'Vite' },
          ].map(({ icon, name }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.15,
                rotate: 5,
                boxShadow: '0 0 20px rgba(255,255,255,0.15)',
              }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 bg-white/10 dark:bg-slate-800 backdrop-blur-md rounded-xl shadow-md transition-transform duration-300 cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: -10, scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-3xl mb-2"
              >
                {icon}
              </motion.div>
              <span className="text-sm font-medium text-gray-200">{name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
