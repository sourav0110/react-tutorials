import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passWordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "#@$%^&?<>";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{

    passWordRef.current?.select()
    passWordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)

  },[password])


  useEffect(()=>{

    passwordGenerator()    
  }, [length, numberAllowed,charAllowed, passwordGenerator ])

  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-6 py-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-center text-white">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white my-4 text-black">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref = {passWordRef}
          ></input>

          <button className="outline-none bg-blue-700 text-white px-4 rounded-md shrink-0"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>

        <div className="flex ">

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          </div>
          <label>Length : {length} </label>
        </div>

        <div className="flex mx-4 items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="Number Input"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />

          <label>Number Allowed </label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="Character Input"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />

          <label>Character Allowed</label>
        </div>

        </div>

        
      </div>
    </>
  );
}

export default App;
