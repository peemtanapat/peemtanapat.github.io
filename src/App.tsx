import {BrowserRouter as Router, Route} from "react-router-dom";
import React from 'react';
import './App.css';

import Fade from 'react-reveal/Fade';
import Intro from './components/Intro';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Fade top duration={1000} distance="40px">
          <div className="container">
              {/* <Header /> Here */}
          </div>
          <Intro />
      </Fade>
      <Footer />
    </div>
  );
}

export default App;
