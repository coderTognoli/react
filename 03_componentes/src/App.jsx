import './App.css'
import './componentes/MeuComponente'
import MeuComponente from './componentes/MeuComponente'
import ExemploProps from './componentes/PropsExemplo'

function App() {

  return (
    <div className='app'>
      <h1>Trabalhando com Componentes</h1>
      <MeuComponente/>
      <ExemploProps/>
    </div>
  )
}

export default App