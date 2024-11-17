import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);

  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionRange(0, 4);
  };
  return (
    <div className="w-full shadow-md px-4 py-5 my-8  bg-gray-800 text-center text-2xl flex-1 mt-10 justify-center">
      <h1 className="bg-stone-950 p-6 rounded-md mb-4 text-white">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0"
          onClick={copyPasswordToClipboard}
        >
          Copy
        </button>
      </div>
      <div className="flex my-5 text-sm gap-x-4">
        <div className="flex items-center gap-x-1 text-white">
          <input
            type="range"
            main={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="cursor-pointer"
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1 text-white">
          <input
            type="checkbox"
            value={length}
            onChange={(e) => setNumberAllowed((prev) => !prev)}
            defaultChecked={numberAllowed}
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1 text-white">
          <input
            type="checkbox"
            value={charAllowed}
            onChange={(e) => setCharAllowed((prev) => !prev)}
            defaultChecked={charAllowed}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
