// ! dependencies
import React, { useState } from 'react'
import Dropdow from './components/Dropdown/Dropdow';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
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
    </>
  );
}

export default App;
