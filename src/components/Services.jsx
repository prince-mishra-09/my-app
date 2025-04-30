import { motion, AnimatePresence } from 'framer-motion';


export default function Services() {
  const services = [
    {
      title: 'Landing Page Design',
      description: 'Pixel-perfect responsive landing pages with modern UI/UX and call-to-action focus.',
      icon: '🌄',
    },
    {
      title: 'Frontend Website',
      description: 'Static and dynamic websites using HTML, CSS, JavaScript, and React.',
      icon: '💻',
    },
    {
      title: 'SPA Development',
      description: 'Single Page Applications with React, React Router, and state management.',
      icon: '⚡️',
    },
    {
      title: 'Animations & Interactions',
      description: 'Engaging micro-interactions and animations with Framer Motion.',
      icon: '✨',
    },
    {
      title: 'Performance Optimization',
      description: 'Speed audits and optimizations for fast-loading user experiences.',
      icon: '🚀',
    },
    {
      title: "Full Stack Development",
      description: "End-to-end development with both frontend and backend, using technologies like Node.js, Express, MongoDB, and React.",
      icon: "🧑‍💻",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100 dark:bg-[#111827] transition-colors duration-300">
      <div className="max-w-screen-lg mx-auto px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8"
        >
          Services I Provide
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}