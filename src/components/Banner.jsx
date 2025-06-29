import React from 'react';
import banner1 from '../assets/banner1.png';
import Button from './Button';

const Banner = () => {
  return (
    <section className="bg-white dark:bg-gray-900 transition-colors duration-300 font-serif">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          {/* Text Section */}
          <div className="max-w-lg md:max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Dr. Aisha Kareem
            </h2>

            <p className="mt-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
              Dr. Kareem is a compassionate and dedicated physician who has recently joined a specialized counselling program to further support her patients’ emotional and mental well-being. With over a decade of experience in family medicine,
              she believes in a holistic approach — one that treats both body and mind.
              <br /><br />
              Known for her warm demeanor and deep empathy, she’s especially passionate about supporting women and underserved communities through active listening and personalized care.
            </p>

            {/* Call to Action Button */}
            <div className="mt-6">
              <Button />
            </div>
          </div>

          {/* Image Section */}
          <div className="bg-[url('./shape.svg')] bg-no-repeat bg-[length:130%] bg-center rounded-lg w-full h-96 flex items-center justify-center p-2 shadow-md dark:shadow-lg">
            <img
              src={banner1}
              alt="Dr. Aisha Kareem"
              className="w-90-80bject-contain rounded-lg"    
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
