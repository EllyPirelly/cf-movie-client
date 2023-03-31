import { useState, useEffect } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('https://movie-pool.onrender.com/movies')
      .then((response) => response.json()
        .then((data) => {
          const moviesFromApi = data.map((movie) => {
            return {
              id: movie._id,
              description: movie.description,
              director: {
                directorName: movie.director.directorName,
                bio: movie.director.bio
              },
              genre: {
                genreName: movie.genre.genreName,
                description: movie.genre.description
              },
              imagePath: movie.imagePath,
              title: movie.title
            };
          });

          setMovies(moviesFromApi);
          console.log('movies from api: ', data);
        }));
  }, []);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => {
          setSelectedMovie(null);
        }}
      />
    );
  }

  if (movies.length === 0) {
    return (
      <div>The list is empty.</div>
    )
  };

  return (
    <div>
      {
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
          />
        ))
      }
    </div>
  );
};
