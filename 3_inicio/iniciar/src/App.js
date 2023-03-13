
import './App.css';

import p2 from "./assets/p2.jpg";

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div ><img className="Porta" src="/p1.jpg" alt="uma porta" /></div>
      <div ><img className="Porta" src={p2} alt="Uma porta" /></div>
    </div>
  );
}

export default App;
