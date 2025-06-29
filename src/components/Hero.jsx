import React from 'react';
import doc3 from '../assets/doc3.png';

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 transition-colors duration-300 font-sans">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div>
            <h2 className="animate-bounce-in text-3xl sm:text-4xl font-extrabold text-cyan-900 dark:text-cyan-100 mb-6 leading-tight">
              Care You Can Believe In
            </h2>

            <p className="animate-slide-up-fade-in text-cyan-800 dark:text-cyan-200 text-lg leading-relaxed">
              We are committed to providing high-quality, affordable Medicare services tailored to your needs.
              From preventive care to specialized treatment, our expert medical team ensures compassionate support
              and advanced healthcare for seniors and patients of all ages. Your health and comfort are our top priorities.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 animate-bounce-in">
              <a
                href="#"
                className="inline-block rounded-md border border-indigo-600 bg-indigo-600 px-8 py-3 text-white font-medium text-sm hover:bg-transparent hover:text-indigo-600 transition duration-300 dark:hover:text-white dark:hover:bg-indigo-700"
              >
                Get Started
              </a>

              <a
                href="#"
                className="inline-block rounded-md border border-indigo-600 px-8 py-3 text-indigo-600 font-medium text-sm hover:bg-indigo-600 hover:text-white transition duration-300 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-indigo-700"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex justify-center md:justify-end animate-bounce-in">
            <img
              src={doc3}
              alt="Doctor illustration"
              className="w-90 h-90 object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
