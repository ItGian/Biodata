"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import ContactForm from "../ContactForm";
import { ThemeToggle } from "../theme-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-200 border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky top-0 z-40 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            My Website
          </span>
        </Link>
        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <Icon icon="line-md:menu" className="w-6 h-6" />
        </button>

        {/* Menu Items Centered */}
        <div
          className={`${isOpen ? "block" : "hidden"
            } w-full lg:flex lg:justify-center lg:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-200 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-gray-200 dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="#Home"
                className="block py-6 pl-6 pr-8 dark:hover:text-black dark:hover:bg-gray-400 text-gray-900 rounded focus:bg-slate-800 dark:focus:bg-slate-50 lg:bg-gray-200 hover:lg:bg-gray-900 hover:text-white dark:bg-slate-900 lg:text-gray-700 lg:p-0 dark:text-white focus:text-white dark:focus:text-gray-600 focus:ring-2 focus:ring-white"
              >
                <Icon icon="line-md:home" className="inline mr-2" />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#About"
                className="block py-6 pl-6 pr-8 dark:hover:text-black dark:hover:bg-gray-400 text-gray-900 rounded focus:bg-slate-800 dark:focus:bg-slate-50 lg:bg-gray-200 hover:lg:bg-gray-900 hover:text-white dark:bg-slate-900 lg:text-gray-700 lg:p-0 dark:text-white focus:text-white dark:focus:text-gray-600 focus:ring-2 focus:ring-white"
              >
                <Icon icon="mdi:about" className="inline mr-2" />
                About
              </Link>
            </li>
            <li>
              <Link
                href="#Experience"
                className="block py-6 pl-6 pr-8 dark:hover:text-black dark:hover:bg-gray-400 text-gray-900 rounded focus:bg-slate-800 dark:focus:bg-slate-50 lg:bg-gray-200 hover:lg:bg-gray-900 hover:text-white dark:bg-slate-900 lg:text-gray-700 lg:p-0 dark:text-white focus:text-white dark:focus:text-gray-600 focus:ring-2 focus:ring-white"
              >
                <Icon icon="mage:trophy" className="inline mr-2" />
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="#Project"
                className="block py-6 pl-6 pr-8 dark:hover:text-black dark:hover:bg-gray-400 text-gray-900 rounded focus:bg-slate-800 dark:focus:bg-slate-50 lg:bg-gray-200 hover:lg:bg-gray-900 hover:text-white dark:bg-slate-900 lg:text-gray-700 lg:p-0 dark:text-white focus:text-white dark:focus:text-gray-600 focus:ring-2 focus:ring-white"
              >
                <Icon icon="solar:pen-linear" className="inline mr-2" />
                Projects
              </Link>
            </li>
            <li>
              <ContactForm></ContactForm>
            </li>
            <li>
              <ThemeToggle></ThemeToggle>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
