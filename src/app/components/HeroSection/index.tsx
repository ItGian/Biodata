"use client";
import { Icon } from '@iconify/react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="Home" className="bg-gray-300 dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        {/* Text Section */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl xl:text-6xl drop-shadow-lg md:animate-hang">
            Hi! Iam Sugiantara :D
          </h1>
          <p className="mb-6 font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400 drop-shadow-lg">
            Welcome to my personal web page
          </p>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-start">
            {/* Get Started Button */}
            <a
              href="#About"
              className="inline-flex items-center justify-center px-5 py-3 mb-4 lg:mb-0 lg:mr-3 text-base dark:text-gray-900 font-medium bg-gray-400 text-gray-900 hover:bg-gray-700 focus:ring-slate-900 dark:hover:text-gray-800 dark:hover:bg-gray-100 bg-primary-700 hover:bg-primary-800 dark:focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 rounded-lg hover:animate-hang"
            >
              Get started
              <Icon icon="line-md:arrow-down" />
            </a>
            {/* Print CV Button */}
            <a
              href="https://drive.google.com/file/d/1blyNrWFUqjzApREkTG9lcZIoN3hlUqIp/view?usp=drive_link"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium dark:hover:text-gray-900 text-gray-900 border hover:text-gray-800 border-gray-300 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-100 dark:focus:ring-gray-800 hover:animate-hang"
            >
              Print CV
              <Icon icon="line-md:download-loop" className="ml-2" />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block mt-8 lg:mt-0 shadow-2xl">
          <Image
            className="w-full rounded-lg"
            src="/images/jiyoon.png"
            alt="Hero Image"
            width={500}
            height={500}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
