import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react"


function App() {
  const [toDo, setToDo ] = useState("")
  const onChange = (e) => setToDo(e.target.value)

  return (
      <div >
        <input onChange={onChange} value={toDo} type="text" placeholder="write"/>
      </div>
  );
}

export default App;