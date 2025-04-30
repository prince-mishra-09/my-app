import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const projectsData = [
  {
    title: 'Word Formatter',
    description: 'A simple tool for formatting texts, sentences, paras with darl/light feature.',
    imageUrl: 'my-app/src/images/word.png',
    techStack: ['React', 'Tailwind', 'JS'],
    liveLink: 'https://word-formater-react1.vercel.app/',
    details:"A smart utility tool built in Vanilla JavaScript that allows users to format and manipulate text in real-time — including case conversion, character count, word count, and more.Clean, interactive, and ideal to demonstrate DOM manipulation, form control, and state handling without frameworks."
  },
  {
    title: 'Spotify Landing Page',
    description: 'Cloning simple and modern UI design of spotify landing page.',
    imageUrl: 'my-app/src/images/image.png',
    techStack: ['HTML', 'CSS', 'JS'],
    liveLink: 'https://prince-mishra-09.github.io/spotify_landing_page/',
    details:"A pixel-perfect clone of Spotify’s homepage created using HTML, CSS, and JavaScript, fully responsive and visually engaging.This project reflects strong skills in UI/UX design, layout reproduction, flex/grid mastery, and mobile-first styling.Ideal to showcase attention to design detail and frontend precision."
  },
  {
    title: 'Hisaab Kitaab',
    description: 'Full-stack expense tracker with secure authentication & analytics dashboard.',
    imageUrl: 'my-app/src/images/hisaab.png',
    techStack: ['React', 'Node.js', 'MongoDB'],
    liveLink: 'https://hisaabkitaab-3ppc.onrender.com/',
    details:"A full-stack daily expense and ledger management app built with Node.js, Express, MongoDB, and EJS, featuring secure user authentication, OTP-based password reset via email, and a daily record system saved with timestamps.Users can log, view, and manage their transactions easily — making it ideal for shopkeepers, small businesses, or personal finance tracking. ✨ Built with security, real-time data handling, and a clean, responsive UI."
  },
  {
    title: 'Hotel Booking UI',
    description: 'Responsive hotel booking interface with interactive calendar and map view.',
    imageUrl: 'my-app/src/images/hotel.png',
    techStack: ['HTML', 'CSS', 'Bootstrap'],
    liveLink: 'https://prince-mishra-09.github.io/PremiumHotel/',
    details:"A sleek and professional hotel booking frontend UI designed to mirror real-world hotel websites.Built with modern UI/UX principles, this project demonstrates skills in creating multi-page layouts, booking sections, responsive navigation, and elegant content presentation.Perfect for showcasing frontend architecture and component-based thinking."
  },
  {
    title: 'DevUndercover Portfolio',
    description: 'My own portfolio with dark/light mode, animations, and responsive design.',
    imageUrl: 'my-app/src/images/portfolio.png',
    techStack: ['Vite', 'React', 'Tailwind'],
    liveLink: 'https://devundercover.example.com',
    details:"A modern, interactive developer portfolio showcasing my projects, skills, and journey as a web developer.Designed with a focus on clean aesthetics, dark/light mode support, smooth animations (using Framer Motion), and responsive design.Acts as a live demonstration of my frontend capabilities and design sense."
  },
];

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [filter, setFilter] = useState('All');

  const techFilters = ['All', 'React', 'Node.js', 'MongoDB', 'Tailwind','Bootstrap'];

  const filtered =
    filter === 'All'
      ? projectsData
      : projectsData.filter(p => p.techStack.includes(filter));

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-[#1e293b] transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-extrabold text-center text-gray-900 dark:text-white"
        >
          Creative Projects
        </motion.h2>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {techFilters.map(tech => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-1 rounded-full border transition 
                ${filter === tech ? 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white border-transparent' : 'bg-white dark:bg-[#0f172a] text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-700'}`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="relative group bg-white dark:bg-[#0f172a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 h-12 overflow-hidden">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setExpandedIndex(index === expandedIndex ? null : index)}
                  className="mt-4 flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {expandedIndex === index ? 'Hide Details' : 'View Details'}
                  {expandedIndex === index ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
                </button>

                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-gray-700 dark:text-gray-200"
                  >
                    <p className="mb-4">{project.details}</p>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] px-4 py-2 rounded-full"
                    >
                      Visit Site
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
