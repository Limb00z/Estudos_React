import './App.css'
import Header from './componentes/Header'
import Corpo from './componentes/Corpo'
import Dados from './componentes/Dados'

function App() {
  

  return (
    <div className="App">
      <Header/>
      <h2>Vite + React</h2>
      <Corpo/>
      <Dados um='Ruan' dois='Reis' tres='28'/> {/*Usa no props um dois tres, pra mostrar que o nome não precisa ser o mesmo*/}
    </div>
  )
}

export default App
