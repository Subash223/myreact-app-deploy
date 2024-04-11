import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
 let [count, setCount] = useState()
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  );
}

export default App;
