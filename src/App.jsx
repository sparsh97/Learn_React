import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Login from "./components/Login";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <Login/>
      <Card/>
    </UserContextProvider>
  );
}

export default App;
