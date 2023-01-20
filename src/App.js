import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const onPlus = () => {
    setCount((prev) => prev + 1);
  };
  const onMinus = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <h1>Count</h1>
      <h1>{count}</h1>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
    </div>
  );
}

export default App;
