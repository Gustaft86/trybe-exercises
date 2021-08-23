import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [menssage, setMessage] = useState('');
  
  // useEffect(() => {
  //   const number = Math.floor(Math.random()*100);
  //   console.log(number);
  //   setTimeout(() => (setRandomNumber(number)), 10000);
  // }, [ randomNumber ]);

  useEffect(() => {
    setInterval(() => {
      const number = Math.floor(Math.random()*100);
      setRandomNumber(number)
    }, 10000);
  }, []);

  useEffect(() => {
    if (randomNumber % 3 === 0 || randomNumber % 5 === 0) {
      setMessage('Acertou!');
    }
  }, [randomNumber]);

  useEffect(() => {
    setTimeout(() => (setMessage('')), 4000)
  });

  return (
    <div>
      { randomNumber }
      { console.log(randomNumber) }
      <br />
      { menssage }
    </div>
  );
}

export default App;
