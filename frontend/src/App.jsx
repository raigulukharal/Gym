// App.jsx
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero';
import WorkOutSection from './components/WorkOutSection';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BMICalculator from './components/BMICalculator.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Hero />
      <WorkOutSection />

      <div id="gallery"><Gallery /></div>
      <div id="pricing"><Pricing /></div>
      <div id="contact"><Contact /></div>
      <div id="bmi"><BMICalculator /></div>
     

      <Footer />
      <ToastContainer theme='dark' position='top-center' />
    </Router>
  )
}

export default App;
