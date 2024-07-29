import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Product from "./components/Product/Product";
import Gallery from './components/Gallery';
import Accordion from './components/FaqAccordion';
import Subfooter from './components/Subfooter';

const App = () => {
  return (
    <section className="h-full font-['ui-sans-serif','system-ui'] bg-gradient-to-left-top bg-cover sm:bg-top bg-center">
      <Navbar />
      <Hero />      
      <div className="flex justify-center items-center h-full bg-black ">
      <Gallery />
      </div>
      <div className="flex justify-center items-center h-full bg-white">
        <Product />
      </div>
      <div className="flex justify-center items-center h-full bg-white">
        <Accordion />
      </div>
      <div className="flex justify-center items-center h-full bg-white">
        <Subfooter />
      </div>
      <div className="">
      <Footer />
      </div>
    </section>
  );
};

export default App;