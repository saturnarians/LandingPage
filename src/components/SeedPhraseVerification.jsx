import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function SeedPhraseVerification({ onNext }) {
  const [seedPhrase, setSeedPhrase] = useState('');
  const { state, verifySeedPhrase } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (seedPhrase.trim() === '') {
      alert('Seed phrase is required');
      return;
    }
    verifySeedPhrase(seedPhrase);
    if (!state.error) {
      onNext();
    }
  };

  return (
    <div>
      <h1>Seed Phrase Verification</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Enter your Secret Recovery Phrase:</label>
        <textarea
          type="text"
          value={seedPhrase}
          onChange={(e) => setSeedPhrase(e.target.value)}
          className="w-full border h-[100px] flex justify-start border-gray-300 rounded-md p-2 required"
        />
        <button type="submit" disabled={seedPhrase.trim() === ''}>Submit</button>
      </form>
      {state.error && <p>{state.error.message}</p>}
    </div>
  );
}

export default SeedPhraseVerification;
