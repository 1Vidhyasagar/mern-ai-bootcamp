// Step 1: Import React hook for state
import { useState } from "react";

function App() {
  // Step 2: Create a state variable called 'count' with initial value 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter App</h1>
      <p>Current count: {count}</p>

      {/* Step 3: Add buttons */}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
