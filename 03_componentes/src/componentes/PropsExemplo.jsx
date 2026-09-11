const ExemploProps = ({sujeito = "visitante", idade = "18"}) => {
    return (
        <div>
            <h3>Olá, {sujeito}!</h3>
            <p>Eu tenho {idade} anos</p>
        </div>
    )
}

export default ExemploProps