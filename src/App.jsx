import { useState, useCallback, useRef, useEffect } from "react";
// import "./App.css";

function App() {
  let [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += ";':<>,./?{}[]";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);
  useEffect(passwordGenerator, [length, numAllow, charAllow]);
  const copyPaaword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-00">
      <h1 className="text-4xl text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className="btn btn-primary"
            onClick={copyPaaword}>Copy</button>
        </div>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="range"
            min={6}
            max={50}
            onClick={(e) => setLength(e.target.value)}            
          />
          <label htmlFor="">Length: {length}</label>
          <input type="checkbox"
            onClick={() => setNumAllow(prev => !prev)}
          />
          <label htmlFor="">Number</label>

          <input type="checkbox"
            onChange={() => setCharAllow(prev => !prev)}
          />
          <label htmlFor="">Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
