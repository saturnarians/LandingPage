import React, { createContext, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
  isVerified: false,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'VERIFY_ID':
    case 'VERIFY_SEED_PHRASE':
    case 'VERIFY_CAMERA':
      return { ...state, isVerified: action.payload.success, error: null };
    case 'AUTH_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const verifyId = (id) => {
    if (id === 'valid-id') {
      dispatch({ type: 'VERIFY_ID', payload: { success: true } });
    } else {
      dispatch({ type: 'AUTH_ERROR', payload: { message: 'Invalid ID!' } });
    }
  };

  const verifySeedPhrase = (seedPhrase) => {
    if (seedPhrase === 'valid-seed-phrase') {
      dispatch({ type: 'VERIFY_SEED_PHRASE', payload: { success: true } });
    } else {
      dispatch({ type: 'AUTH_ERROR', payload: { message: 'Invalid Seed Phrase!' } });
    }
  };

  const verifyCamera = (photo) => {
    if (photo) {
      dispatch({ type: 'VERIFY_CAMERA', payload: { success: true } });
    } else {
      dispatch({ type: 'AUTH_ERROR', payload: { message: 'Invalid Photo!' } });
    }
  };

  return (
    <AuthContext.Provider value={{ state, verifyId, verifySeedPhrase, verifyCamera }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
