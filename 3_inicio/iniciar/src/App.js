
import './App.css';

import p2 from "./assets/p2.jpg"; /*importando uma imagem da pasta assets, para usar*/

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div ><img className="Porta" src="/p1.jpg" alt="uma porta" /></div> {/*Importando via pasta public*/}
      <div ><img className="Porta" src={p2} alt="Uma porta" /></div> {/*Importando via pasta assets, precisa ser importada, no inicio.*/}
    </div>
  );
}

export default App;
