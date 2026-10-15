import afterlifeImage from '../assets/afterlife.jpg'
import harryPotterImage from '../assets/harrypotter.jpg'
import mowgliImage from '../assets/mowgli.jpg'
import shiftImage from '../assets/shift.png'
import squidGameImage from '../assets/squidgame.webp'
import transformersImage from '../assets/transformers.jpg'
import './Main.css'

const movies = [
  { title: 'Afterlife', image: afterlifeImage },
  { title: 'Transformers', image: transformersImage },
  { title: 'Mogli: O Menino Lobo', image: mowgliImage },
  { title: 'Day Shift', image: shiftImage },
  { title: 'Round 6', image: squidGameImage },
  { title: 'Harry Potter e a Pedra Filosofal', image: harryPotterImage },
]

function Main() {
  return (
    <section className="movie-banner" aria-labelledby="movie-banner-title">
      <div className="banner-copy" id="sobre">
        <h1 id="movie-banner-title">Seus Filmes</h1>
        <p>
          Aqui, você pode escolher o filme que deseja assistir.
          <br />
          Caso queira escolher mais, clique no botão.
        </p>
        <a className="more-button" href="#categorias">
          Mais
        </a>
      </div>

      <div className="movie-gallery" id="filmes">
        <div className="movie-grid" id="categorias" aria-label="Filmes disponíveis">
          {movies.map((movie) => (
            <article className="movie-card" key={movie.title}>
              <img src={movie.image} alt={`Pôster do filme ${movie.title}`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Main