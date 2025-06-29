import React from 'react'
import nurse2 from '../assets/nurse2.jpg'; // Replace with your actual image path

const Popularquestions = () => {
  return (
<>
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* FAQ Section */}
        <div className="flow-root">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white font-serif">
            Frequently Asked Questions
          </h2>
          <div className="-my-4 flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
            {[1, 2, 3].map((item) => (
              <details key={item} className="group py-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between gap-2 text-lg font-medium cursor-pointer">
                  <span>What services does your hospital offer?</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="block size-5 shrink-0 group-open:hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m0-6h6m-6 0H6" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden size-5 shrink-0 group-open:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                  </svg>
                </summary>
                <p className="pt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  Our hospital offers a wide range of services including outpatient care, emergency treatment, surgery, and specialized diagnostics. We focus on compassionate care tailored to each patient's needs.
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={nurse2}
            alt="FAQ illustration"
            className="max-w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>


</>
  )
}

export default Popularquestions