import { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { MovieCard } from '../movie-card/movie-card';

export const MovieList = () => {
  const storedToken = localStorage.getItem('token');
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);

  fetch('https://movie-pool.onrender.com/movies', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((response) => response.json())
    .then((movies) => {
      setMovies(movies);
    });

  return (
    <Row className='justify-content-md-center'>
      <h3>Favorite Movies - render all for now</h3>
      {movies.map((movie) => (
        <Col attribute='3' className='mb-5' key={movie._id} sm={6} md={4} xl={3}>
          <MovieCard movie={movie} />
          <Button variant='danger'>Remove from List</Button>
        </Col>
      ))}
    </Row>
  )
}
