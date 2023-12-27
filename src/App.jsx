import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold underline bg-green-400 text-black p-4 rounded-xl">
        Hello world!
      </h1>
      <Card username="Juila"/>
    </>
  );
}

export default App;
