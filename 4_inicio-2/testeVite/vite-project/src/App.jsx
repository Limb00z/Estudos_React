import './App.css'
import Header from './componentes/Header'
import Corpo from './componentes/Corpo'
import Dados from './componentes/Dados'
import Teste from './componentes/Teste'
// import Relogio from './componentes/Relogio'

function App() {
  const sorteado = Math.floor(Math.random() * 10 + 1);

  return (
    <div className="App">
      <Header/>
      <h2>Vite + React</h2>
      {/* <Relogio/> */}
      <Corpo/>
      <Dados um='Ruan' dois='Reis' tres='28'/> {/*Usa no props um dois tres, pra mostrar que o nome não precisa ser o mesmo*/}
      <Teste n={sorteado} />
    </div>
  )
}

export default App
