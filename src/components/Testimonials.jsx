import { motion, AnimatePresence } from 'framer-motion';


export default function Testimonials() {
  const testimonials = [
    { name: 'Utkarsh', role: 'Student', text: 'Exceeded expectations with a stunning, interactive site!', image: '/images/utkarsh.jpg' },
    { name: 'Shubham', role: 'Musician', text: 'Professional, creative, and timely delivery.', image: '/images/shubham.jpg' },
    { name: 'Yogesh', role: 'Youtuber', text: 'Transformed ideas into a polished product!', image: '/images/yogesh.jpg' },
    { name: 'Hemraj', role: 'MERN Developer', text: 'Transformed ideas into a polished product!', image: '/images/hemraj.jpg' }
  ];

  return (
    <section id="testimonials" className="py-16 px-8 bg-[#0f172a]">
      <div className="max-w-screen-lg mx-auto px-6 md:px-12 text-center">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
          What People Are Saying
        </motion.h2>
        <div className="flex flex-wrap  justify-center  gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="w-full   delay-150  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 sm:w-80 bg-[#1e293b] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.2 }}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <img src={t.image} alt={t.name} className="w-16 h-16 mt-6 rounded-full border-4 border-white dark:border-gray-900 object-cover shadow-md" />
              </div>
              <div className="mt-12">
                <p className="text-gray-100 italic mb-4">“{t.text}”</p>
                <h4 className="text-lg font-semibold text-white">{t.name}</h4>
                <span className="text-sm text-gray-300">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}