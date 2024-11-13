import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  };
  const removeValue = () => setCounter((prev) => prev - 1);

  return (
    <>
      <h1>React course with Counter </h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
