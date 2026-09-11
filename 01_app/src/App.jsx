import './App.css'
function App() {
  // declaração de variável
const sujeito = "Visitante"
const cidade = "São Paulo - SP"
const idade = 18
  return (
    <>
      <h1>Aula de React</h1>
      <h3>Seja bem-vindo(a) {sujeito}!</h3>
      <p>Primeiro projeto com React.js</p>
      <br />
      <q>Estamos em {cidade} e você tem {idade} anos de idade</q>
    </>
  )
}

export default App
