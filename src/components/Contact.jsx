// src/components/Contact.jsx
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiMail, FiUser, FiMessageCircle } from 'react-icons/fi';

export default function Contact() {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const formData = {
      user_name: formRef.current.user_name.value,
      user_email: formRef.current.user_email.value,
      message: formRef.current.message.value,
    };

    try {
      const res = await fetch('/pages/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Network response was not ok');
      setIsSent(true);
      formRef.current.reset();
      setTimeout(() => setIsSent(false), 3000);
    } catch (err) {
      console.error(err);
      setError('Something went wrong, Please send mail on mrprimi09@gmail.com');
    }
  };

  return (
    <section id="contact" className="min-h-screen px-6 py-12 bg-gradient-to-b from-blue-50 to-white dark:from-[#1e293b] dark:to-[#0f172a] transition-colors duration-300">
      <div className="max-w-xl mt-5 mx-auto relative">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-white">Contact Me</h2>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <div className="flex items-center gap-3 border-b py-2">
            <FiUser className="text-xl text-slate-600 dark:text-slate-300" />
            <input name="user_name" type="text" placeholder="Your Name" required className="w-full bg-transparent focus:outline-none text-slate-800 dark:text-white" />
          </div>
          <div className="flex items-center gap-3 border-b py-2">
            <FiMail className="text-xl text-slate-600 dark:text-slate-300" />
            <input name="user_email" type="email" placeholder="Your Email" required className="w-full bg-transparent focus:outline-none text-slate-800 dark:text-white" />
          </div>
          <div className="flex items-start gap-3 border-b py-2">
            <FiMessageCircle className="mt-1 text-xl text-slate-600 dark:text-slate-300" />
            <textarea name="message" rows="5" placeholder="Your Message" required className="w-full bg-transparent focus:outline-none text-slate-800 dark:text-white resize-none" />
          </div>
          <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition">
            Send Message 🚀
          </button>
        </form>

        {isSent && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-0 right-0 mt-4 mr-4 bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-md">
            <FiCheckCircle className="text-2xl animate-bounce" />
            <span>Mail Sent!</span>
          </motion.div>
        )}

        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      </div>
    </section>
  );
}
