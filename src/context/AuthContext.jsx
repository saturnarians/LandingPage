


import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
const [state, setState] = useState({
    photo: null,
    seedPhrase: '',
    photoId: '',
    pin:'',
    // Add other state variables as needed
  });

  const setPhoto = (photo) => {
    setState((prevState) => ({
      ...prevState,
      photo,
    }));
  };

  const setPhotoId = (photoId) => {
    setState((prevState) => ({
      ...prevState,
      photoId,
    }));
  };

  const verifySeedPhrase = (seedPhrase) => {
    if (seedPhrase === 'valid-seed-phrase') {
      setState((prevState) => ({
        ...prevState,
        seedPhrase,
        error: null,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        error: { message: 'Invalid seed phrase.' },
      }));
    }
  };

  const setSource = (newUrl) => {
    setState((prevState) => ({
      ...prevState,
      photoId: newUrl,
    }));
  };

  const verifyPin = (pin) => {
    if (pin === 'valid-pin') {
      setState((prevState) => ({
        ...prevState,
        pin,
        error: null,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        error: { message: 'Invalid pin.' },
      }));
    }
  };

  return (
    <AuthContext.Provider value={{ state, setPhoto, setPhotoId, verifySeedPhrase, verifyPin, setSource }}>
      {children}
    </AuthContext.Provider>
  );
};

