// src/Accordion.js
import React, { useState } from 'react';

const Accordion = ({ title, children, isActive, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`w-full text-left py-4 px-6 border-b border-gray-200 ${
          isActive ? 'bg-gray-100' : 'bg-white'
        } hover:bg-gray-200 focus:outline-none focus:bg-gray-200`}
      >
        <div className="flex justify-between items-center">
          <span className="font-semibold">{title}</span>
          <span>{isActive ? '-' : '+'}</span>
        </div>
      </button>
      {isActive && <div className="p-6 bg-white">{children}</div>}
    </div>
  );
};

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <Accordion
            title="About Ledger Recover"
            isActive={activeIndex === 0}
            onClick={() => handleAccordionClick(0)}
          >
            <div className="space-y-2">
              <p>What is Ledger Recover?</p>
              <p>Why do I need Ledger Recover?</p>
              <p>Who has access to my wallet with Ledger Recover?</p>
              <p>
                What would happen to my Ledger Recover subscription and related
                data if one of the companies goes out of business?
              </p>
              <p>
                What should I do with my recovery sheet once I subscribe to
                Ledger Recover?
              </p>
              <p>What is Coincover?</p>
            </div>
          </Accordion>
          <Accordion
            title="Restrictions"
            isActive={activeIndex === 1}
            onClick={() => handleAccordionClick(1)}
          >
            <p>Content for restrictions.</p>
          </Accordion>
          <Accordion
            title="Managing Ledger Recover subscription"
            isActive={activeIndex === 2}
            onClick={() => handleAccordionClick(2)}
          >
            <p>Content for managing Ledger Recover subscription.</p>
          </Accordion>
          <Accordion
            title="Setting up Ledger Recover"
            isActive={activeIndex === 3}
            onClick={() => handleAccordionClick(3)}
          >
            <p>Content for setting up Ledger Recover.</p>
          </Accordion>
          <Accordion
            title="Managing Ledger Recover password"
            isActive={activeIndex === 4}
            onClick={() => handleAccordionClick(4)}
          >
            <p>Content for managing Ledger Recover password.</p>
          </Accordion>
          <Accordion
            title="Recovering access to your wallet"
            isActive={activeIndex === 5}
            onClick={() => handleAccordionClick(5)}
          >
            <p>Content for recovering access to your wallet.</p>
          </Accordion>
          <Accordion
            title="Data & Privacy"
            isActive={activeIndex === 6}
            onClick={() => handleAccordionClick(6)}
          >
            <p>Content for data & privacy.</p>
          </Accordion>
        </div>
        <div className="w-full md:w-2/3 pl-6">
          <div className="space-y-2">
            {activeIndex === 0 && (
              <div>
                <h2 className="font-bold text-xl mb-2">About Ledger Recover</h2>
                <p>What is Ledger Recover?</p>
                <p>Why do I need Ledger Recover?</p>
                <p>Who has access to my wallet with Ledger Recover?</p>
                <p>
                  What would happen to my Ledger Recover subscription and
                  related data if one of the companies goes out of business?
                </p>
                <p>
                  What should I do with my recovery sheet once I subscribe to
                  Ledger Recover?
                </p>
                <p>What is Coincover?</p>
              </div>
            )}
            {activeIndex === 1 && (
              <div>
                <h2 className="font-bold text-xl mb-2">Restrictions</h2>
                <p>Content for restrictions.</p>
              </div>
            )}
            {activeIndex === 2 && (
              <div>
                <h2 className="font-bold text-xl mb-2">
                  Managing Ledger Recover subscription
                </h2>
                <p>Content for managing Ledger Recover subscription.</p>
              </div>
            )}
            {activeIndex === 3 && (
              <div>
                <h2 className="font-bold text-xl mb-2">
                  Setting up Ledger Recover
                </h2>
                <p>Content for setting up Ledger Recover.</p>
              </div>
            )}
            {activeIndex === 4 && (
              <div>
                <h2 className="font-bold text-xl mb-2">
                  Managing Ledger Recover password
                </h2>
                <p>Content for managing Ledger Recover password.</p>
              </div>
            )}
            {activeIndex === 5 && (
              <div>
                <h2 className="font-bold text-xl mb-2">
                  Recovering access to your wallet
                </h2>
                <p>Content for recovering access to your wallet.</p>
              </div>
            )}
            {activeIndex === 6 && (
              <div>
                <h2 className="font-bold text-xl mb-2">Data & Privacy</h2>
                <p>Content for data & privacy.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
