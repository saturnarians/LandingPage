import React, { useRef, useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

function CameraVerification() {
  const { state, verifyCamera, setPhoto } = useContext(AuthContext);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [facingMode, setFacingMode] = useState('user'); // Default to front camera

  const startCamera = () => {
    setIsCameraActive(true);
    navigator.mediaDevices.getUserMedia({ video: { facingMode } })
      .then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch(err => {
        console.error('Error accessing camera: ', err);
      });
  };

  const capturePhoto = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    const dataUrl = canvasRef.current.toDataURL('image/png');
    setPhoto(dataUrl);
    verifyCamera(dataUrl);
    stopCamera();
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      setIsCameraActive(false);
    }
  };

  const switchCamera = () => {
    setFacingMode(prevMode => (prevMode === 'user' ? 'environment' : 'user'));
    stopCamera();
    startCamera();
  };

  return (
    <div>
      <h1>Camera Verification</h1>
      {isCameraActive ? (
        <>
          <video ref={videoRef} style={{ display: 'block', width: '100%', maxWidth: '400px' }} />
          <canvas ref={canvasRef} style={{ display: 'none' }} width="400" height="300"></canvas>
          <button onClick={capturePhoto}>Capture Photo</button>
          <button onClick={switchCamera}>Switch Camera</button>
        </>
      ) : (
        <button onClick={startCamera}>Start Camera</button>
      )}
      {state.photo && (
        <div>
          <h2>Captured Photo:</h2>
          <img src={state.photo} alt="Captured" style={{ width: '100%', maxWidth: '400px' }} />
        </div>
      )}
      {state.error && <p>{state.error.message}</p>}
    </div>
  );
}

export default CameraVerification;
