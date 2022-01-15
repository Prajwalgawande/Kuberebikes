import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Middle from './components/Middle';
import About from './components/About';
import Footer from './components/Footer';
function App() {
  return (
   <>
   <Navbar/>
   <Middle/>
   <About/>
   <Footer/>
   </>
  );
}

export default App;
