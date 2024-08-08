import React, { useRef, useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PhotoCameraRoundedIcon from '@mui/icons-material/PhotoCameraRounded';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});

const ImgBox = styled(Box)({
  maxWidth: "80%",
  maxHeight: "80%",
  margin: "10px",
  display: 'flex',
  justifyContent: 'center',
  border: '1px solid black',
});

const Img = styled('img')({
  height: 'inherit',
  maxWidth: 'inherit',
});

function CameraVerification({ onNext }) {
  const { state, verifyCamera, setPhoto } = useContext(AuthContext);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(false);

  const startCamera = () => {
    setIsCameraActive(true);
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.error) {
      onNext();
    }
  };

  // Mobile
  const [source, setSource] = useState("");

  const handleCapture = (target) => {
    if (target.files && target.files.length !== 0) {
      const file = target.files[0];
      const newUrl = URL.createObjectURL(file);
      setSource(newUrl);
    }
  };

  return (
    <div>
      <div className="hidden 2xl:block">
        <h1 className="text-2xl font-bold mb-4">Camera Verification</h1>
        {isCameraActive ? (
          <>
            <div className="relative mb-4">
              <video ref={videoRef} className="w-full max-w-md" />
              <canvas ref={canvasRef} className="hidden" width="400" height="300"></canvas>
            </div>
            <div className="flex justify-center mb-4">
              <button onClick={capturePhoto} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Capture Photo</button>
            </div>
          </>
        ) : (
          <button onClick={startCamera} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Start Camera</button>
        )}
        {state.photo && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Captured Photo:</h2>
            <img src={state.photo} alt="Captured" className="w-full max-w-md" />
            <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
          </div>
        )}
        {state.error && <p className="text-red-500 mt-2">{state.error.message}</p>}
      </div>

      <div className="2xl:hidden" style={{ height: '100%', textAlign: 'center' }}>
        <Grid container>
          <Grid item xs={12}>
            <h5>Capture your image</h5>
            {source && (
              <ImgBox>
                <Img src={source} alt="snap" />
              </ImgBox>
            )}
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              capture="environment"
              onChange={(e) => handleCapture(e.target)}
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCameraRoundedIcon fontSize="large" />
              </IconButton>
            </label>
          </Grid>
        </Grid>
        {state.error && <p className="text-red-500 mt-2">{state.error.message}</p>}
      </div>
    </div>
  );
}

export default CameraVerification;
