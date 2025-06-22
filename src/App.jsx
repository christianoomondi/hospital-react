import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Choosing from './components/Choosing';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
     <Hero />
     <br />
     <br />
     <Choosing />
    </>
  )
}

export default App
