import React from 'react';
import { FaUserDoctor } from "react-icons/fa6";

const Choosing = () => {
  const handleClickBtn1 = () => {
    alert(
      "With specializations across various medical fields, our physicians stay at the forefront of medical innovation and continuously update their skills to ensure accurate diagnosis, effective treatment, and compassionate support."
    );
  };

  return (
    <>
      {/* Section Header */}
      <div className="my-10">
        <div className="flex items-center justify-center">
          <span className="h-px flex-1 bg-gray-300 dark:bg-gray-600"></span>
          <span className="px-4 text-2xl font-semibold text-gray-900 dark:text-white font-[Poppins]">
            Why Choose Us
          </span>
          <span className="h-px flex-1 bg-gray-300 dark:bg-gray-600"></span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-[Poppins]">
        {/* Card 1 */}
        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md p-6 bg-white dark:bg-gray-800 transition duration-300">
          <FaUserDoctor className="text-indigo-600 text-3xl mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Expert Doctor</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Our team of expert doctors brings years of experience, advanced medical training,
            and a deep commitment to patient-centered care.
          </p>
          <button
            onClick={handleClickBtn1}
            className="mt-4 inline-block rounded-md border border-indigo-600 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 dark:hover:bg-indigo-500 dark:hover:text-white transition"
          >
            More info
          </button>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md p-6 bg-white dark:bg-gray-800 transition duration-300">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Emergency Car</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Our fully equipped emergency ambulances are available 24/7 to provide rapid medical
            assistance and safe transport to our hospital. Staffed by trained paramedics and
            equipped with state-of-the-art life support tools.
          </p>
          <button
            className="mt-4 inline-block rounded-md border border-indigo-600 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 dark:hover:bg-indigo-500 dark:hover:text-white transition"
          >
            More info
          </button>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md p-6 bg-white dark:bg-gray-800 transition duration-300">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">24 Hours Service</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Our hospital operates 24/7, ensuring expert care is always available, even in emergencies.
            We’re always ready—day or night—to serve you with compassion and efficiency.
          </p>
          <button
            className="mt-4 inline-block rounded-md border border-indigo-600 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 dark:hover:bg-indigo-500 dark:hover:text-white transition"
          >
            More info
          </button>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-10">
        <button className="px-6 py-2 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition dark:hover:bg-indigo-500">
          View All Services
        </button>
      </div>
    </>
  );
};

export default Choosing;
