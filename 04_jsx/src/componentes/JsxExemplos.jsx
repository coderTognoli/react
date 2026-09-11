const JsxExemplos = () => {
    // Declaração de Variáveis
    const userName =  'Visitante'
    // Objeto usuário
    const user = {
        name: 'Visi',
        lastName: 'tante'
    }
    // Variáveis para usuário
    const userIsLoggedIn = false // TROQUE PARA FALSO PARA MUDAR A MENSAGEM FINAL.
    const UserRole = 'admin'
    // Declaração de Lista
    const users = [
        {id: 1, name: 'Bruno', idade: 18},
        
        {id: 2, name: 'Pedro', idade: 43},
        
        {id: 3, name: 'Moana', idade: 67},

        {id: 4, name: 'Andressa', idade: 23},
        
        {id: 5, name: 'Victor Cabelinho', idade: 37}

    ]
    function saudacao(name) {
        return `Olá, ${name}!`
    }
    return (
        <div>
            <h2>Utilizando o JSX</h2>
            <p>Olá, {userName}!</p>
            <br />

            <p>Usuário: {user.name} - {user.lastName}</p>
            <br />

            <p>{saudacao(userName)}</p>
            <br />

            {/* Botão*/}
            <button onClick={ () => alert('Olha a mensagem!')}>Clique Aqui</button>
            <br />

            {/*Renderização Condicional */}
            {userIsLoggedIn ? (
                // Se o usuário está logado IF
                <div>
                    <p>Está logado.</p>
                </div>
                // Se o usuário não está logado ELSE
                ) : (
                    <p>Não está logado.</p>
            )}
            <br />

            <p> {UserRole === 'admin' && 'Você é admin'} </p>
            <br/> 
            {/*Renderização de Lista*/}
            <h2>Listas</h2>
            <div>
                {users.map((users) => (
                    <li key={users.id}>
                        **id:** {users.id} {users.name} **idade:** {users.idade}
                    </li>
                ))}
            </div>
        </div>
    )
}

export default JsxExemplos