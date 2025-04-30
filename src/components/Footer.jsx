import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-8 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        
        {/* Logo / Title */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">DevUndercover</h2>
          <p className="mt-2 text-sm text-gray-400">Building the web, one project at a time.</p>
        </div>

        {/* Links */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="text-sm text-gray-400">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect with me</h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl text-gray-400">
            <a href="https://github.com/prince-mishra-09" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/prince-mishraweb/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B%2FQDLsK1AQuiS7c8iem434g%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaLinkedin /></a>
            <a href="https://www.instagram.com/princemishra.09/?__pwa=1#" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaInstagram /></a>
            <a href="mailto:mrprimi09@gmail.com" className="hover:text-white"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DevUndercover — All rights reserved.
      </div>
    </footer>
  );
}
