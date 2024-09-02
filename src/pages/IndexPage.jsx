import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Product from "../components/Product/Product";
import Gallery from '../components/Gallery';
import Accordion from '../components/Accordion/FaqAccordion';
import Subfooter from '../components/Subfooter';
import Header from '../components/Header';

const IndexPage = () => {
  return (
    <>
    <Header className="relative z-500"/>
    <div className="h-full font-[ui-sans-serif, system-ui]
     bg-gradient-to-left-top bg-center bg-cover w-[auto] relative">
      <Navbar className='relative z-20'/>
      <Hero className='' />
      <div className="flex justify-center items-center bg-black">
        <Gallery />
      </div>
      <div className="flex justify-center items-center bg-white">
        <Product />
      </div>
      <div className="bg-veryLightGrey border-customLightGrey">
        <Accordion />
      </div>
      <div className="flex justify-center items-center bg-white">
        <Subfooter />
      </div>
      <Footer />
    </div>
    </>
  );
};

export default IndexPage;
