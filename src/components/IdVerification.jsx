import React, { useState, useContext, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';

function IdVerification({ onNext }) {
  const [id, setId] = useState('');
  const { state, verifyId, setPhoto } = useContext(AuthContext);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyId(id);
    if (!state.error) {
      onNext();
    }
  };

  return (
    <div>
      <h2>ID Verification</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        {isCameraActive ? (
          <>
            <video ref={videoRef} style={{ display: 'block', width: '100%', maxWidth: '400px' }} />
            <canvas ref={canvasRef} style={{ display: 'none' }} width="400" height="300"></canvas>
            <button type="button" onClick={capturePhoto}>Capture Photo</button>
            <button type="button" onClick={switchCamera}>Switch Camera</button>
          </>
        ) : (
          <button type="button" onClick={startCamera}>Start Camera</button>
        )}
        <button type="submit">Submit</button>
      </form>
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

export default IdVerification;
