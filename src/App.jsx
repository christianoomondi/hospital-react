import React, { useState, useEffect } from 'react';

import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Choosing from './components/Choosing';
import Banner from './components/Banner';
import Forms from './components/Forms';
import Blogs from './components/Blogs';
import Popularquestions from './components/Popularquestions';
import Footer from './components/Footer';


function App() {

  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);



  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-all">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Choosing />
      <Banner />

      <div className="flex items-center my-10">
        <span className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></span>
        <span className="px-4 text-gray-900 dark:text-white">Make an Appointment</span>
        <span className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></span>
      </div>

      <Forms />
      <Blogs />
      <Popularquestions />
      <Footer />
    </div>
  );
}



export default App
