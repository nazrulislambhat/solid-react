import { time } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

function TimerUseRef() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(timerRef.current);
  };
  const resetTimer = () => {
    clearInterval(timerRef.current);
    setSeconds(0);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current); // Cleanup on unmount
  }, []);

  return (
    <div
      style={{ fontFamily: 'monospace', textAlign: 'center', marginTop: 50 }}
    >
      <h1>⏱ Timer</h1>
      <h2>{seconds}s</h2>
      <button onClick={startTimer}>▶ Start</button>
      <button onClick={stopTimer} style={{ marginLeft: 8 }}>
        ⏸ Stop
      </button>
      <button onClick={resetTimer} style={{ marginLeft: 8 }}>
        🔄 Reset
      </button>
    </div>
  );
}

export default TimerUseRef;
