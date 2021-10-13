// ! dependencies
import React, { useState } from 'react'
import Display from './components/Display/Display';
import Dropdow from './components/Dropdown/Dropdow';
import Features from './components/Features/Features';
import Hero from './components/Hero/Hero';
import InfoSection from './components/InfoSection/InfoSection';
import Navbar from './components/Navbar/Navbar';
import { InfoData } from './data/InfoData';
// ! imports the slider data from data folder
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalstyles';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdow isOpen={isOpen} toggle={toggle} />
      {/* pass in props that takes in the data from SliderData */}
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <Display />
      <Features />
    </>
  );
}

export default App;
