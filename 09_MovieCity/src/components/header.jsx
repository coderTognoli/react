import './header.css'

function Header() {
  return (
    <header className="site-header">
      <a className="site-logo" href="#filmes" aria-label="MovieCity - início">
        MovieCity
      </a>
      <nav className="site-nav" aria-label="Navegação principal">
        <a href="#filmes">Filmes</a>
        <a href="#categorias">Categoria</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
      </nav>
      <a className="login-button" href="#contato">
        Login
      </a>
    </header>
  )
}

export default Header