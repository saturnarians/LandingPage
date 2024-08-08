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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Seed Phrase Verification</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-gray-700">Enter your Secret Recovery Phrase:</label>
        <textarea
          value={seedPhrase}
          onChange={(e) => setSeedPhrase(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
          aria-required="true"
          rows="4"
          placeholder='Input your SecretPhrase accordingly...'
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          disabled={seedPhrase.trim() === ''}
        >
          Submit
        </button>
      </form>
      {state.error && <p className="text-red-500 mt-2">{state.error.message}</p>}
    </div>
  );
}

export default SeedPhraseVerification;
