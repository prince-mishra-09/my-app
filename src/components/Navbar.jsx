import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Navbar({ darkLight, mode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ['About', 'Projects', 'Services', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 w-full  bg-[#0f172a] shadow-md transition-colors duration-300">
      <div className="flex justify-between items-center px-6 py-4 md:px-8">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-extrabold bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-transparent bg-clip-text"
        >
       Prince Mishra
        </motion.h1>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="text-lg font-medium text-gray-100 hover:text-[#00c6ff] transition-colors"
            >
              {item}
            </motion.a>
          ))}

          {/* <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={darkLight}
            className="ml-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
          >
            {mode === 'dark' ? <Sun className="text-yellow-300" /> : <Moon className="text-gray-800" />}
          </motion.button> */}
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex flex-col md:hidden px-6 pb-4 gap-4 bg-[#0f172a] border-t border-gray-700"
          >
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-base font-medium text-gray-100 hover:text-[#00c6ff]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            {/* <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                darkLight();
                setIsMobileMenuOpen(false);
              }}
              className="self-start mt-2 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
            >
              {mode === 'dark' ? <Sun className="text-yellow-300" /> : <Moon className="text-gray-800" />}
            </motion.button> */}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
