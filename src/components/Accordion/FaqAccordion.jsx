import React, { useState, useEffect, useRef } from 'react';
import sections from './AccordionData';
import { SlArrowDown, SlArrowUp, SlArrowRight } from "react-icons/sl";

const FaqAccordion = () => {
  const [visibleSection, setVisibleSection] = useState('About Ledger Recover');
  const [visibleSectionMobile, setVisibleSectionMobile] = useState(null);
  const [openQuestionIndexMobile, setOpenQuestionIndexMobile] = useState(null);
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
  const buttonRefs = useRef({});

  // useEffect(() => {
  //   // Focus the button of the visible section on load and when visibleSection changes
  //   if (buttonRefs.current[visibleSection]) {
  //     buttonRefs.current[visibleSection].focus();
  //   }
  // }, [visibleSection]);

  const handleButtonClick = (sectionTitle) => {
    setVisibleSection(sectionTitle);
    setOpenQuestionIndex(null); // Reset question visibility when changing sections

    // Ensure the button is focused when clicked
    if (buttonRefs.current[sectionTitle]) {
      buttonRefs.current[sectionTitle].focus();
    }
  };

  return (
    <div className="w-full p-6 rounded-lg h-full  ">
      <h1 className="xl:text-[50px] text-left text-[28px] ml-2  xl:ml-20 font-bold mb-6 xl:mb-6">Frequently Asked Questions</h1>
      <div className="flex flex-col space-y-8 relative">
        {sections.map((section, index) => (
          <div key={index}>

            {/* Mobile view starts*/}
            <button
              className="w-full font-semibold text-left  hover:bg-veryLightGrey hover:ring-customLightGrey hover:w-[full] focus:bg-customGrey focus:text-white focus:w-[100%]
              rounded-md h-[50px] 2xl:hidden px-4"
              aria-expanded={visibleSectionMobile === section.title}
              onClick={() => {
                setVisibleSectionMobile(visibleSectionMobile === section.title ? null : section.title);
                setOpenQuestionIndexMobile(null); // Reset question visibility when changing sections
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold tracking-tight">{section.title}</span>
                <span className="text-xl ">{visibleSectionMobile === section.title}<SlArrowDown className='w-[10px]'/></span>
              </div>
            </button>

            {visibleSectionMobile === section.title && (
              <div className="ml-2 mt-2 text-left 2xl:hidden ">
                <div className="flex flex-col">
                  {section.questions.map((item, questionIndex) => (
                    <div key={questionIndex} className="my-4 border-b-2">
                      <button
                        className="w-full text-left font-semibold tracking-tighter"
                        onClick={() => setOpenQuestionIndexMobile(openQuestionIndexMobile === questionIndex ? null : questionIndex)}>
                        {item.question}
                        <span className='absolute max-md:left-[270px] lg:left-[360px] xl:left-[690px] pt-[6px] font-semibold '>{openQuestionIndexMobile === questionIndex  ? <SlArrowUp className="w-[10px]"/>:<SlArrowDown className="w-[10px]"/> }</span>
                      </button>
                      {openQuestionIndexMobile === questionIndex && (
                        <div className="text-gray-600 mt-2">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Desktop view */}
            <button
              className="px-2 hover:bg-veryLightGrey hover:ring-customLightGrey hover:w-[270px] focus:bg-customGrey focus:text-white focus:w-[270px]
               w-[260px] rounded-md h-[50px] max-2xl:hidden 2xl:ml-20 relative text-[16px]"
              aria-expanded={visibleSection === section.title}
              onClick={() => handleButtonClick(section.title)}
              ref={el => buttonRefs.current[section.title] = el}
            >
             
              <div className="flex items-center font-semibold  max-2xl:hidden">
                <span className="text-left max-2xl:hidden">{section.title}</span>
                <span className='relative'>{visibleSection === section.title }</span>
              </div>
              <SlArrowRight className='absolute left-[250px] bottom-[15px] h-[14px] w-[20px] font-black '/>
            </button>
            
            
           
            {visibleSection === section.title && (
              <div className=" text-left 2xl:absolute 2xl:left-[420px] top-[3px] max-2xl:hidden">
                <div className=" max-2xl:hidden">
                {section.questions.map((item, questionIndex) => (
                    <div key={questionIndex} className="my-2 border-b-2">
                      <button
                        className="w-[700px] text-left font-semibold max-2xl:hidden flex relative mb-10"
                        onClick={() => setOpenQuestionIndex(openQuestionIndex === questionIndex ? null : questionIndex)}
                      >
                        {item.question }
                      <span className='absolute 2xl:left-[800px] pt-[6px] font-semibold'>{openQuestionIndex === questionIndex ? <SlArrowUp/>:<SlArrowDown/> }</span>  
                      </button>
                      {openQuestionIndex === questionIndex && (
                        <div className="text-customGrey mt-2 mb-6 max-2xl:hidden">
                          {item.answer}
                        </div>
                      )}
                    </div>
                    
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
