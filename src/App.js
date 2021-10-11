// ! dependencies
import React from 'react'
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
// ! imports the slider data from data folder
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalstyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {/* pass in props that takes in the data from SliderData */}
      <Hero slides={SliderData}/>
    </>
  );
}

export default App;
