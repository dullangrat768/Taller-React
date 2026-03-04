// Autor: Jhan Rivera - Taller

import React from 'react';

// Importacion Ejercicio 1
import TarjetaContacto from "./components/TarjetaContacto";
import CatalogoPeliculas from './components/CatalogoPeliculas';
import ResultadoIMC from './components/ResultadoIMC';

// Importacion Ejercicio 2
import Avengers from './assets/Avengers.jpg'
import ultron from './assets/ultron.jpg'
import spiderman from './assets/spiderman.jpg'
import infinitywar from './assets/infinitywar.jpg'
import end from './assets/end.jpg'

function App() {
  // Ejercicio 2
  const peliculas = [
    { id: 1, titulo: "Los Vengadores", director: "Joss Whedon", año: 2012, genero: "Ciencia Ficción", calificacion: 4.8, poster: Avengers},
    { id: 2, titulo: "Vengadores: La Era de Ultrón", director: "Joss Whedon", año: 2015, genero: "Ciencia Ficción", calificacion: 3.6, poster: ultron},
    { id: 3, titulo: "Spider-Man: Into the Spider-Verse", director: "Peter Ramsey", año: 2018, genero: "Animación", calificacion: 4.7, poster: spiderman},
    { id: 4, titulo: "Vengadores: Infinity War", director: "Hermanos Russo", año: 2018, genero: "Fantasía", calificacion: 4.9, poster: infinitywar},
    { id: 5, titulo: "Vengadores: Endgame", director: "Hermanos Russo", año: 2019, genero: "Fantasía", calificacion: 5.0, poster: end}
  ];

  // Ejercicio 3
  const personas = [
    { id: 1, nombre: 'Jhan Rivera', peso: 54, altura: 1.70 },
    { id: 2, nombre: 'Gabriel Pinillo', peso: 60, altura: 1.80 },
    { id: 3, nombre: 'Laura Torres', peso: 80, altura: 1.64 },
    { id: 4, nombre: 'Jorge Pinilla', peso: 95, altura: 1.70 },
    { id: 5, nombre: 'Sofia Ramirez', peso: 48, altura: 1.68 }
  ];

  return (
    <div style={{ backgroundColor: '#111', minHeight: '100vh', paddingBottom: '50px' }}>
      
      {/* Ejercicio 1 */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
        <h1 style={{ width: '100%', textAlign: 'center', color: 'white' }}>Tarjetas de Contacto</h1>
        
        <TarjetaContacto 
          nombre="Jhan Rivera" telefono="3008504104" correo="jhanrivera@gmail.com"
          ciudad="Bogota" ocupacion="Desarrollador Frontend"
          colorFondo="linear-gradient(0deg, #358faf 0%, #ffffff 100%)"
        />

        <TarjetaContacto 
          nombre="Gabriel Pinillo" telefono="5486579428" correo="Gabriel.pinillo@outlook.com"
          ciudad="Medellín" ocupacion="Analista de Datos"
          colorFondo="linear-gradient(0deg, #9b59b6 0%, #ffffff 100%)"
        />

        <TarjetaContacto 
          nombre="Nicole Torres" telefono="3204455667" correo="Nicole.t@empresa.co"
          ciudad="Cali" ocupacion="Diseñadora UI/UX"
          colorFondo="linear-gradient(0deg, #2ecc71 0%, #ffffff 100%)"
        />
      </div>

      <hr style={{ borderColor: '#333', margin: '40px 0' }} />

      {/* Ejercicio 2 */}
      <CatalogoPeliculas peliculas={peliculas} />

      <hr style={{ borderColor: '#333', margin: '40px 0' }} />

      {/* Ejercicio 3 */}
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center', color: 'white', marginBottom: '30px' }}>Calculadora de IMC</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {personas.map(persona => (
            <ResultadoIMC 
              key={persona.id} 
              nombre={persona.nombre}
              peso={persona.peso}
              altura={persona.altura}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;