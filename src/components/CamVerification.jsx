import React, { useState, useEffect, useRef, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function CameraVerification() {
  const [photo, setPhoto] = useState(null);
  const { state, verifyCamera } = useContext(AuthContext);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Access the user's camera
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        // Set the video source to the stream
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch(err => {
        console.error('Error accessing camera: ', err);
      });

    // Cleanup: stop the video stream when the component is unmounted
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const handleCapture = () => {
    const context = canvasRef.current.getContext('2d');
    // Draw the current video frame onto the canvas
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    // Get the image data URL from the canvas
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
    <div>
      <h1>Camera Verification</h1>
      <div>
        <video ref={videoRef} style={{ width: '100%', maxWidth: '400px' }} />
        <canvas ref={canvasRef} style={{ display: 'none' }} width="400" height="300"></canvas>
      </div>
      <button onClick={handleCapture}>Capture Photo</button>
      {photo && (
        <div>
          <h2>Captured Photo:</h2>
          <img src={photo} alt="Captured" style={{ width: '100%', maxWidth: '400px' }} />
        </div>
      )}
      <button onClick={handleVerification}>Verify with Camera</button>
      {state.error && <p>{state.error.message}</p>}
    </div>
  );
}

export default CameraVerification;
