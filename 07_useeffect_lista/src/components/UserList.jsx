import { useState, useEffect} from 'react'

function UserList() {
    const [users, setUsers] = useState([]) // Pegar elementos da lista
    const [loading, setLoading] = useState(true) // Carregar a lista
    const [error, setError] = useState(null) // Erro ao carregar API

    // Carregar dados da API (useEffect)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          if (!res.ok) throw new Error('Erro na resposta da API')
            return res.json()
        })
        .then((data) => setUsers(data)) // Carrega a lista
        .catch((err) => setError(err.message)) // Retorna mensagem de erro
        .finally(() => setLoading(false)) // Exibir a lista
    }, []) // Lista as dependências

    if (loading) return <p>Carrgando usuários...</p>
    if (error) return <p>Erro: {error}</p>

  return (
    <div>
        <h2>Lista de Usuários</h2>
        {/* <ul>{users.map((user) => 
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          )}
        </ul> */}

      <table border={1}>

        <thead>
          <tr>
            <th>Nome</th>
            <th>e-mail</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => 
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          )}

        </tbody>

      </table>
    </div>
  )
}

export default UserList