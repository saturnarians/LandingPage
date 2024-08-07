import React, { useState } from 'react';
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

function IdVerification() {
  const [source, setSource] = useState("");

  const handleCapture = (target) => {
    if (target.files && target.files.length !== 0) {
      const file = target.files[0];
      const newUrl = URL.createObjectURL(file);
      setSource(newUrl);
    }
  };
  
   const classes = useStyles();const [source, setSource] = useState("");const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };

  return (
<<<<<<< HEAD
    <div style={{ height: '100%', textAlign: 'center' }}>
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
=======
    <div>
      <h2>ID Verification</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        {isCameraActive ? (
          <>
            <div className="relative">
              <video ref={videoRef} style={{ width: '100%', maxWidth: '400px' }} />
              <canvas ref={canvasRef} style={{ display: 'none' }} width="400" height="300"></canvas>
            </div>
            <div className="flex justify-center mt-4">
              <button type="button" onClick={capturePhoto} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Capture Photo</button>
              <button type="button" onClick={switchCamera} className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Switch Camera</button>
            </div>
          </>
        ) : (
          <button type="button" onClick={startCamera} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Start Camera</button>
        )}
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
      </form>
      {state.photo && (
        <div className="mt-4">
          <h2>Captured Photo:</h2>
          <img src={state.photo} alt="Captured" style={{ width: '100%', maxWidth: '400px' }} />
        </div>
      )}
      
       <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <h5>Capture your image</h5>
          {source &&
            <Box display="flex" justifyContent="center" border={1} className={classes.imgBox}>
              <img src={source} alt={"snap"} className={classes.img}></img>
            </Box>}
          <input
            accept="image/*"
            className={classes.input}
>>>>>>> fa5174c52c5f74a7c79eacd0557bf55710180042
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
<<<<<<< HEAD
              <PhotoCameraRoundedIcon fontSize="large" />
=======
              <PhotoCameraRoundedIcon fontSize="large" color="primary" />
>>>>>>> fa5174c52c5f74a7c79eacd0557bf55710180042
            </IconButton>
          </label>
        </Grid>
      </Grid>
<<<<<<< HEAD
=======
    </div>
      
      
      {state.error && <p>{state.error.message}</p>}
>>>>>>> fa5174c52c5f74a7c79eacd0557bf55710180042
    </div>
  );
}

export default IdVerification;