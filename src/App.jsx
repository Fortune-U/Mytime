import { useState } from 'react'
import Hero from './components/Hero';
import Ad from './components/Ad';
import Testimonies from './components/Testimonies';
import Market from './components/Market';
import Adtwo from './components/Adtwo';
import { Adthree } from './components/Adthree';
import Footer from './components/Footer';


function App() {
 

  return (
    <>
   <Hero />
   <Ad/>
   {/* <Testimonies /> */}
   <Market />
   <Adtwo />
   <Adthree />
   <Footer/>
       
    </>
  )
}

export default App
