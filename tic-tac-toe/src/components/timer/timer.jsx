import React from 'react';
import { TimerContainer } from './timer-style';

function Timer({ timeLeft }) {
  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <TimerContainer >
      <h1>{formatTime(timeLeft)}</h1>
    </TimerContainer>
  );
}

export default Timer;
