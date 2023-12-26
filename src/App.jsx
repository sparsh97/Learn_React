import { useState } from 'react'
function App() {
  let [count, setCount] = useState(0)
  function addValue() {
    count = count + 1;
    setCount(count);
  }
  function removeValue() {
    count = count - 1;
    setCount(count);
  }
  return (
    <>
      <div className="container">
        <p>Counter value is {count}</p>
        <button className="btn btn-primary p-3 mb-1" onClick={addValue}>Add Value</button>
        <br />
        <button className="btn btn-danger p-3" onClick={removeValue}>Remove Value</button>
      </div>
    </>
  )
}

export default App
