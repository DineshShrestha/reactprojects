import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  /* const handleClick = (color) => {
    setColor(color);
  }; */
  return (
    <div
      className="text-center duration-200 h-screen"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-center mb-10 text-3xl ">Background Changer</h1>
      <button
        className="text-2xl ml-3 p-3 bg-green-500 rounded duration"
        onClick={() => setColor("green")}
      >
        Green
      </button>
      <button
        className="text-2xl ml-3 p-3 bg-blue-500 rounded "
        onClick={() => setColor("blue")}
      >
        Blue
      </button>
      <button
        className="text-2xl ml-3 p-3 bg-yellow-500 rounded"
        onClick={() => setColor("yellow")}
      >
        Yellow
      </button>
      <button
        className="text-2xl ml-3 p-3 bg-purple-500 rounded"
        onClick={() => setColor("purple")}
      >
        Purple
      </button>
      <button
        className="text-2xl ml-3 p-3 bg-slate-400 rounded"
        onClick={() => setColor("olive")}
      >
        Olvie
      </button>
    </div>
  );
}

export default App;
