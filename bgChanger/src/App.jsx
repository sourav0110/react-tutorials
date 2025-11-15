import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-screen h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-3 py-2">
          <button
            className="outline-none px-4 py-3 "
            style={{ backgroundColor: "red" }}
            onClick={()=>{setColor("red")}}
          >
            Red
          </button>

          <button
            className="outline-none px-4 py-3 "
            style={{ backgroundColor: "blue" }}
            onClick={()=>{setColor("blue")}}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-3 "
            style={{ backgroundColor: "Green" }}
            onClick={()=>{setColor("green")}}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
