import Peli from "./Peli";
import pelis from "./API/pelis.json";
import { useState } from "react";

function MoviesList() {
  const urlImg = "http://image.tmdb.org./t/p/w300";
  const [filtro, setFiltro] = useState("");

  let res = [];

  if (filtro=="") {
    res = pelis;
  } else {
    res = pelis.filter((movie) => {
      movie.title.toLowerCase().includes(filtro.toLocaleLowerCase());
    });
  }
  return (
    <div>
      <input
        // value={filtro}
        placeholder="Buscar tu pelicula"
        type="text"
        onChange={(e) => {
          e.preventDefault();
          setFiltro(e.target.value);
        }}
      />

      <h1>Movies</h1>

      <ul>
        {res.map((pelicula) => {
          return (
            <Peli
              id={pelicula.id}
              titulo={pelicula.title}
              urlImg={urlImg}
              urlPeli={pelicula.url}
              sinopsis={pelicula.overview}
              urlPoster={pelicula.poster_path}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default MoviesList;
