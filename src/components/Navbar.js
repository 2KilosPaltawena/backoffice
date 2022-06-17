import React from 'react'
import Alogo from './assets/alogo.png'
//import Icon from '@mdi/react';
//import { mdiCartOutline, mdiClose } from '@mdi/js';



 export default function Navbar(){
  return (
    <nav className="flex items-center bg-[#f6d3ff]">
  <div className=" flex items-center flex-shrink-0 text-black mr-6">
  <img src= {Alogo} className=' w-[120px] p-1'/> 
  
  </div>
  <div className="text-xl pr-2 ">

      <a href="/AdmProducts" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
        Productos
      </a>

      <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
        Categorias
      </a>

      <a href="/Zapatos" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
        Stock 
      </a>

      
      <a href="/Zapatos" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
        Carecterísticas 
      </a>

      

    </div>  
</nav>
  );



  

}




