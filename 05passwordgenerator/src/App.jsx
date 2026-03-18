import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //useRef for copy button
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed, setPassword]);
  const copyPassword = useCallback(() => {
    if (passwordRef.current) {
      navigator.clipboard.writeText(passwordRef.current.value);
    }
  }, [passwordRef]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
      <div className="bg-lightblue w-[380px] rounded-2xl shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-black-900 mb-6">
          🔐 Password Generator
        </h1>

        {/* Password Input */}
        <div className="flex mb-4">
          <input
            type="text"
            value={password}
            placeholder="Your Password"
            readOnly
            ref={passwordRef}
            className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={copyPassword}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 rounded-r-lg"
          >
            copy
          </button>
        </div>

        {/* Length Slider */}
        <div className="mb-4">
          <label className="text-gray-700 font-medium">
            Password Length: {length}
          </label>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full cursor-pointer"
          />
        </div>

        {/* Options */}
        <div className="flex justify-between text-gray-700 mb-5">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)}
            />
            Numbers
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={characterAllowed}
              onChange={(e) => setCharacterAllowed(e.target.checked)}
            />
            Symbols
          </label>
        </div>

        {/* Generate Button Bottom */}
        <button
          onClick={generatePassword}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-xl font-semibold transition"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
