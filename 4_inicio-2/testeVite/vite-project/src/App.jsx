import { useState } from 'react'
import Comparacao from './assets/comparacao.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <h1>Aprendendo sobre:</h1>
      </div>
      <h2>Vite + React</h2>
      <img src={Comparacao} className="foto"/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          contador: {count}
        </button>
       </div>
    </div>
  )
}

export default App
