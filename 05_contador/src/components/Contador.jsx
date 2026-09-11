import { useState } from 'react'

function Contador() {
    // Variáveis de estados
    const [count, setCount] = useState(0)
  return (
    <div>
        <h2>Contador: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Aumentar</button>
        <button onClick={() => setCount(count - 1)}>Diminuir</button>
        <button onClick={() => setCount(0)}>Zerar</button>
    </div>
  )
}

export default Contador