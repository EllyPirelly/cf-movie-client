import { useState, useEffect } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedToken = localStorage.getItem('token');
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // TODO: delete in the process
  // useEffect(() => {
  //   fetch('https://movie-pool.onrender.com/movies')
  //     .then((response) => response.json()
  //       .then((data) => {
  //         const moviesFromApi = data.map((movie) => {
  //           return {
  //             id: movie._id,
  //             description: movie.description,
  //             director: {
  //               directorName: movie.director.directorName,
  //               bio: movie.director.bio
  //             },
  //             genre: {
  //               genreName: movie.genre.genreName,
  //               description: movie.genre.description
  //             },
  //             imagePath: movie.imagePath,
  //             title: movie.title
  //           };
  //         });

  //         setMovies(moviesFromApi);
  //         console.log('movies from api: ', data);
  //       }));
  // }, []);

  useEffect(() => {
    if (!token) {
      return;
    }
    fetch('https://movie-pool.onrender.com/movies', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies);
      });
  }, [token]);

  if (!user) {
    return (
      // Fragment, to group items into one
      <>
        <h1>Signup and Login View</h1>
        <LoginView onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
        }} />
        <h2>or</h2>
        <SignupView />
      </>
    );
  }

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
    // Fragment, to group items into one
    <>
      <h1>Movie List and Logout</h1>
      <div>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
          />
        ))}
      </div>

      <button onClick={() => {
        setUser(null);
        setToken(null);
        localStorage.clear();
      }}>Logout</button>
    </>
  );
};
