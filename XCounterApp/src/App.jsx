import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((prev) => prev + 1);
  };

  const decrement = () => {
    setValue((prev) => prev - 1);
  };
  return (
    <>
      <h1>Counter App</h1>
      <div>Count: {value}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
