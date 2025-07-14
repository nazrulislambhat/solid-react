// import { useRef, useEffect, useState } from 'react';

// function RefHook() {
//   const [count, setCount] = useState(0);
//   const prevCount = useRef(0);

//   useEffect(() => {
//     prevCount.current = count;
//   }, [count]);

//   return (
//     <div>
//       <h1>Current Count:{count}</h1>
//       <h2>Previous Count: {prevCount.current}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default RefHook;
// import { useRef } from 'react';

// function RefHook() {
//   const timeoutRef = useRef(null);

//   const handleChange = (e) => {
//     clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(() => {
//       console.log('Debounced Value:', e.target.value);
//     }, 500);
//   };
//   return <input onChange={handleChange} placeholder="Search..." />;
// }

// export default RefHook;
import { useState, useRef } from 'react';

export default function UseRefHook() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
