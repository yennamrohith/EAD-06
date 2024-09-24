import './App.css'
import { useState, useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false);

  // Effect to handle the timer running
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } 
    return () => clearInterval(interval);
  }, [isRunning]);

  // Function to format time as HH:MM:SS
  const formatTime = (timeInSeconds) => {
    const hours = String(Math.floor(timeInSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((timeInSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(timeInSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <div className='title'>TIMER</div>
      <h1>{formatTime(time)}</h1>
      <div className="btns">
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={() => { setIsRunning(false); setTime(0); }}>Reset</button>
      </div>
    </div>
  );
};

export default App;