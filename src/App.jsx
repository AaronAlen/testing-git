import { useState, useMemo, useCallback } from "react";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  console.log("👨 Parent Rendered");

  // useMemo
  const factorial = useMemo(() => {
    console.log("🧮 Calculating Factorial...");

    function fact(n) {
      if (n <= 1) return 1;
      return n * fact(n - 1);
    }

    return fact(number);
  }, [number]);

  // useCallback
  const show = useCallback(() => {
    alert("Hello from Parent!");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Optimization Demo</h1>

      <hr />

      <h2>Count : {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <hr />

      <h2>Number : {number}</h2>

      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>

      <h2>Factorial : {factorial}</h2>

      <Child onShow={show} />
    </div>
  );
}

export default App;