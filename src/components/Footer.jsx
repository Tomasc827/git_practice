import React, { useState } from 'react';

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1; // Generates a number between 1 and 100
    setRandomNumber(number);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Random Number Generator</h1>
      <button onClick={generateRandomNumber} style={{ padding: '10px', fontSize: '16px' }}>
        Generate Random Number
      </button>
      {randomNumber !== null && (
        <p style={{ marginTop: '20px', fontSize: '24px' }}>Random Number: {randomNumber}</p>
      )}
    </div>
  );
};

export default RandomNumberGenerator;
