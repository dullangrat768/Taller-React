// Jhan Rivera - Ejercicio 2

import TarjetaPelicula from "./TarjetaPelicula";

function CatalogoPeliculas({ peliculas }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: 'white' }}>PELICULAS</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {peliculas.map((pelicula) => (
          <TarjetaPelicula 
            key={pelicula.id}
            titulo={pelicula.titulo}
            director={pelicula.director}
            año={pelicula.año}
            genero={pelicula.genero}
            calificacion={pelicula.calificacion}
            poster={pelicula.poster}
          />
        ))}
      </div>
    </div>
  );
}

export default CatalogoPeliculas;