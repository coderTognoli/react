import { useState } from 'react'

function UseState() {
    // contador simples
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount((prevCount) => prevCount + 1) //SetCount(count + 1)
    }

    // Objeto usuário 
    const [user, setUser] = useState({
        nome: "Merlotto",
        idade: 17,
        hobbies: ["Conversar", "Celular"]
    })

    // Atualizar idade
    const updateUserAge = () => {
        setUser((prevUser) => ({
            ...prevUser, // Operador Spread. Usado para exibir arrays
            idade: prevUser.idade + 1
        }))
    }

    return (
    <div>
        <h2>Contador</h2>
        <p>Você clicou {count} vezes</p>
        <button onClick={increment}>Incrementar</button>

        <p>{user.nome}</p>
        <p>{user.idade}</p>
        <p>{user.hobbies}</p>

        <button onClick={updateUserAge}>Aumentar Idade</button>
    </div>
  )
}

export default UseState