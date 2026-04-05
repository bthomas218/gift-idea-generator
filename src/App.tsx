import { useState } from "react";
export default function App() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <div>
        <h1>Gift Idea Generator</h1>
        <p>Coming soon...</p>
      </div>

      <div>
        <h2>Interactivity Test</h2>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
    </>
  );
}
