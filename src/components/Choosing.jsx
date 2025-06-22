import React from 'react';
import { FaUserDoctor } from "react-icons/fa6";

const Choosing = () => {
    const HandleClickbtn1=()=>{
        return <p>With specializations across various medical fields, our physicians stay at the forefront of medical innovation and continuously update their skills to ensure accurate diagnosis, effective treatment, and compassionate support. When you choose us, you're placing your health in the hands of trusted professionals who prioritize your well-being every step of the way.</p>
    }
  return (
    <>
      <div className="my-6">
        <span className="flex items-center">
          <span className="h-px flex-1 bg-gray-300"></span>
          <span className="shrink-0 px-4 text-gray-900 text-xl font-semibold">Why Choose Us</span>
          <span className="h-px flex-1 bg-gray-300"></span>
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="rounded-2xl border border-gray-200 shadow-md p-6 bg-white">
            <FaUserDoctor />
          <h2 className="text-lg font-medium text-gray-900">Expert Doctor</h2>
          <p className="mt-2 text-gray-700">Our team of expert doctors brings years of experience, advanced medical training, and a deep commitment to patient-centered care. </p>
      <button onClick={HandleClickbtn1} className="mt-2 block rounded-sm border border-indigo-600 bg-indigo-600 px-2 py-0.5  font-medium text-white hover:bg-transparent hover:text-indigo-600 transition">
  More info
</button>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl border border-gray-200 shadow-md p-6 bg-white">
          <h2 className="text-lg font-medium text-gray-900">Emergency Car</h2>
          <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a
            className="mt-4 block rounded-sm border border-indigo-600 bg-indigo-600 px-8 py-2 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 transition"
            href="#"
          >
            More info
          </a>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl border border-gray-200 shadow-md p-6 bg-white">
          <h2 className="text-lg font-medium text-gray-900">24 Hours Service</h2>
          <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a
            className="mt-4 block rounded-sm border border-indigo-600 bg-indigo-600 px-8 py-2 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 transition"
            href="#"
          >
            More info
          </a>
        </div>
      </div>
    </>
  );
};

export default Choosing;
