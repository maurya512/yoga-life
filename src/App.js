// ! dependencies
import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import Dropdow from './components/Dropdown/Dropdow';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import GlobalStyle from './globalstyles';
import Home from './pages';
import About from './pages/About';
import Sessions from './pages/Sessions';
import Results from './pages/Results';

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
      <Switch >
        {/* define the routes for each component */}
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/sessions" exact component={Sessions} />
        <Route path="/results" exact component={Results} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
