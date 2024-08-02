import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function IdVerification({ onNext }) {
  const [id, setId] = useState('');
  const { state, verifyId } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyId(id);
    if (!state.error) {
      onNext();
    }
  };

  return (
    <div>
      <h2>ID Verification</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {state.error && <p>{state.error.message}</p>}
    </div>
  );
}

export default IdVerification;
