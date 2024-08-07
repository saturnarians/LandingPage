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

  return (
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
    </div>
  );
}


export default IdVerification;