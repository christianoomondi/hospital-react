import React from 'react'
import doc3 from '../assets/doc3.png'

const Hero = () => {
  return (
  <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-lg font-extrabold text-cyan-900 sm:text-3xl">
         Care you can Believe in
          </h2>

          <p className="mt-4 text-cyan-700 font-semibold">
        we are committed to providing high-quality, affordable Medicare services tailored to your needs. From preventive care to specialized treatment, our expert medical team ensures compassionate support and advanced healthcare for seniors and patients of all ages. Your health and comfort are our top priorities.
          </p>
          <br />
          <br />
 <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
  <a
    className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-none"
    href="#"
  >
    Get Started
  </a>

  <a
    className="inline-block rounded-sm border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-none"
    href="#"
  >
    Contact Us
  </a>
</div>

        </div>
      </div>

  <div className="w-90 h-96 flex items-center justify-center  rounded-lg p-2 ">
  <img
    src={doc3}
    className="w-90 h-90 object-contain rounded-lg"
    alt=""
  />
</div>

    </div>
  </div>
</section>
  

  );
};


export default Hero;
