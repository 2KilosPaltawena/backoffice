import { BrowserRouter as Router,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import Footer from './components/Footer';
import './components2/styles/carrito.css';
import { useState } from 'react';



function App() {

  return (
    
      <div className='bg-[#2e0057]'>
        <PreNavbar/>
        <Navbar ></Navbar>
        

          <Footer/>
          
      </div>
   
  );
}

export default App;
