import Banner from './components/banner.jsx'
import Header from './components/header.jsx'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
      </main>
      <footer className="site-footer" id="contato">
        MovieCity — escolha sua próxima história.
      </footer>
    </>
  )
}

export default App
