import Link from 'next/link';
import { Icon } from '@iconify/react'

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-900 dark:text-gray-200 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Me</h3>
            <p className="text-gray-800 dark:text-gray-400">We are a company dedicated to providing high-quality services and products to our customers.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="dark:text-gray-400 text-gray-800 hover:text-white transition duration-300">Home</Link></li>
              <li><Link href="#About" className="dark:text-gray-400 text-gray-800 hover:text-white transition duration-300">About</Link></li>
              <li><Link href="#Experience" className="dark:text-gray-400 text-gray-800 hover:text-white transition duration-300">Experience</Link></li>
              <li><Link href="#Project" className="dark:text-gray-400 text-gray-800 hover:text-white transition duration-300">Project</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Me</h3>
            <ul className="space-y-2 text-gray-800  dark:text-gray-400">
              <li>Tibubeneng, Bali</li>
              <li>Phone: (+62) 0813-3871-2664</li>
              <li>Email: santara803@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="https://wa.me/qr/MGRREY4465I5N1" className="dark:text-gray-400 text-gray-800 hover:text-white transition duration-300">
              <Icon icon="logos:whatsapp-icon" className="h-5" />
            </a>
              <a href="https://www.instagram.com/its.gian07/" className="dark:text-gray-400 text-gray-800 hover:text-white transition duration-300">
              <Icon icon="skill-icons:instagram" className="h-4" />
              </a>
              <a href="https://github.com/ItGian" className="dark:text-gray-400 text-gray-800 hover:text-white transition duration-300">
              <Icon icon="bytesize:github" className="h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-800 dark:text-gray-400">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

