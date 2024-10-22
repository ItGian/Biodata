"use client";

import ContactForm from "../ContactForm";




const Header = () => {
  return (

<nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-40">
  <div className="max-w-screen-xl mx-auto p-4">
    <div className="flex justify-center items-center">
      <div className="hidden w-full md:block md:w-auto" id="navbar-cta">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
          <a href="#Home" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
          <button type="button" className="text-white  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-lg  px-5 py-0.5   dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          Home
          
            </button>
            </a>          </li>
          <li>
          <a href="#About" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
          <button type="button" className="text-white  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-lg  px-5 py-0.5   dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
    
          About
          
            </button>
            </a>

          </li>
          <li>
          <a href="#Experience" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
          <button type="button" className="text-white  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-lg  px-5 py-0.5   dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
    
          Experience
          
            </button>
            </a>      
            </li>
            <li>
          <a href="#Project" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
          <button type="button" className="text-white  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-lg  px-5 py-0.5   dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
    
          Projects
          
            </button>
            </a>       
           </li>
          <li>
        <ContactForm></ContactForm>
          </li>
        </ul>
      </div>
    </div>
    <div className="md:hidden flex justify-end">
      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
    </div>
  </div>
</nav>


  );
};

export default Header;