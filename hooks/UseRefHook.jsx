import React, { useRef, useState } from 'react';

function UseRefHook() {
  const intervalRef = useRef(null); // Holds interval ID
  const timeRef = useRef(0); // Holds elapsed time in ms
  const lastTickRef = useRef(null); // Holds timestamp of last tick
  const [seconds, setSeconds] = useState(0); // For UI update only

  const start = () => {
    if (intervalRef.current) return; // Already running

    lastTickRef.current = Date.now();

    intervalRef.current = setInterval(() => {
      const now = Date.now();
      const delta = now - lastTickRef.current;
      timeRef.current += delta;
      lastTickRef.current = now;

      // Only update UI when full second passed
      const wholeSeconds = Math.floor(timeRef.current / 1000);
      setSeconds(wholeSeconds);
    }, 100); // check every 100ms (or less)
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    timeRef.current = 0;
    setSeconds(0);
  };

  return (
    <div
      style={{ fontFamily: 'monospace', textAlign: 'center', marginTop: 50 }}
    >
      <h1>⏱ Stopwatch</h1>
      <h2>{seconds}s</h2>
      <button onClick={start}>▶ Start</button>
      <button onClick={stop} style={{ marginLeft: 8 }}>
        ⏸ Stop
      </button>
      <button onClick={reset} style={{ marginLeft: 8 }}>
        🔄 Reset
      </button>
    </div>
  );
}

export default UseRefHook;
