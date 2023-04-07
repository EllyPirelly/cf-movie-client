import { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { MovieCard } from '../movie-card/movie-card';

export const MovieList = () => {
  const storedToken = localStorage.getItem('token');
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);

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
      <h3>Favorite Movies - render all for now</h3>
      {movies.map((movie) => (
        <Col attribute='3' className='mb-5' key={movie._id} sm={6} md={4} xl={3}>
          <MovieCard movie={movie} />
          <Button variant='secondary'>Remove from List</Button>
        </Col>
      ))}
    </Row>
  )
}
