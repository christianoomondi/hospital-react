import React from 'react'

const DarkBox = () => {
  return (
    <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 transition-all">
      <h2 className="text-xl font-semibold mb-2">Appointment Form Section</h2>
      <p>
        This section will switch to a dark background when dark mode is toggled.
      </p>
    </div>
  );
};

export default DarkBox;

