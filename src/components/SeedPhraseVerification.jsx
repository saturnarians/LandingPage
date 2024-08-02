import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function SeedPhraseVerification() {
  const [seedPhrase, setSeedPhrase] = useState('');
  const { state, verifySeedPhrase } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifySeedPhrase(seedPhrase);
  };

  return (
    <div>
      <h1>Seed Phrase Verification</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your Seed Phrase:
          <input type="text" value={seedPhrase} onChange={(e) => setSeedPhrase(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {state.error && <p>{state.error.message}</p>}
    </div>
  );
}

export default SeedPhraseVerification;
