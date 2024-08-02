import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import Gallery from './components/Gallery';
import Accordion from './components/Accordion/FaqAccordion';
import Subfooter from './components/Subfooter';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import IdVerification from './components/IdVerification';
// import SeedPhraseVerification from './components/SeedPhraseVerification';
// import CameraVerification from './components/CamVerification';
// import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <section className="h-full font-['ui-sans-serif','system-ui'] ring-black bg-gradient-to-left-top bg-cover w-[auto]">
      <Navbar />
      <Hero />  
      <div className="flex justify-center items-center h-full bg-black ">
      <Gallery />
      </div>
      <div className="flex justify-center items-center h-full bg-white">
        <Product />
      </div>
      <div className=" bg-veryLightGrey border-customLightGrey">
        <Accordion />
      </div>
      <div className="flex justify-center items-center h-full bg-white">
        <Subfooter />
      </div>
      <div className="">
      <Footer />
      </div>

    {/* <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/id-verification" element={<IdVerification />} />
          <Route path="/seed-phrase-verification" element={<SeedPhraseVerification />} />
          <Route path="/camera-verification" element={<CameraVerification />} />
        </Routes>
      </div>
    </AuthProvider> */}
    </section>


  );
};

export default App;