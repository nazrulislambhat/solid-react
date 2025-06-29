import { useState, useRef, useEffect } from 'react';

export default function UseRefUndo() {
  const [count, setCount] = useState(0);
  const previousCountRef = useRef(count); // Store previous count in a ref

  useEffect(() => {
    if (previousCountRef.current !== count) {
      console.log(
        'Count changed:',
        count,
        '(Previous:',
        previousCountRef.current,
        ')'
      );
    }
    previousCountRef.current = count; // Update the ref
  }, [count]); // Run the effect only when count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
