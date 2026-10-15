import { useState } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <a className="site-logo" href="#filmes" aria-label="MovieCity - início">
        MovieCity
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isMenuOpen}
        aria-controls="site-menu"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <div
        className={`header-menu${isMenuOpen ? ' is-open' : ''}`}
        id="site-menu"
      >
        <nav className="site-nav" aria-label="Navegação principal">
          <a href="#filmes" onClick={closeMenu}>Filmes</a>
          <a href="#categorias" onClick={closeMenu}>Categoria</a>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </nav>
        <a className="login-button" href="#contato" onClick={closeMenu}>
          Login
        </a>
      </div>
    </header>
  )
}

export default Header