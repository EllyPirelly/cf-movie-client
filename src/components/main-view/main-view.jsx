import { useState, useEffect } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const storedToken = localStorage.getItem('token');
  const [token, setToken] = useState(storedToken ? storedToken : null);

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
        // Bearer Authorization enables authenticated API requests
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies);
      });
    // dependency array; ensures fetch is called every time `token` changes
  }, [token]);

  return (
    <Row className='justify-content-md-center'>
      {!user ? (
        <Col xs={12}>
          <h2>Log in</h2>
          <LoginView onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }} />
          <h2>Or sign up</h2>
          <SignupView />
          {/* <Button variant='secondary' className='w-100' onClick={() => {
            setUser(null);
            setToken(null);
            localStorage.clear();
          }}>Logout</Button> */}
        </Col>
      ) : selectedMovie ? (
        <Col md={12}>
          <MovieView
            movie={selectedMovie}
            onBackClick={() => {
              setSelectedMovie(null);
            }}
          />

        </Col>
      ) : movies.length === 0 ? (
        <div>The list is empty.</div>
      ) : (
        <>
          {movies.map((movie) => (
            <Col className='mb-5' key={movie._id} sm={6} md={4} xl={3}>
              <MovieCard
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                }}
              />
            </Col>
          ))}

          <Button variant='secondary' className='w-50' onClick={() => {
            setUser(null);
            setToken(null);
            localStorage.clear();
          }}>Logout</Button>
        </>
      )}
    </Row>
  );
};
