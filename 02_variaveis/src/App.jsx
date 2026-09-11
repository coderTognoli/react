
import './App.css'

function App() {
  // Declaração das variáveis
  const sujeito = "Visitante"
  const adjetivo = "Imaculado aos olhos do criador deste projeto"
  const idade = 18
  
  const url = "https://placehold.co/400"
  
  function soma(a, b) {
    return a + b;
    
  }
  return (
    <div>
      <h2>Utilizando Variáveis - Dados</h2>
      <p>Você é um {sujeito} {adjetivo}.</p>
      <p>Voce tem {idade} anos de idade</p>
      <br/>
      <h2>Soma</h2>
      <p>Resultado {soma(15, 33)}</p>
      <br/>
      <h2>Imagem</h2>
      <img src={url} alt="Imagem"/>
    </div>
  )
}

export default App
