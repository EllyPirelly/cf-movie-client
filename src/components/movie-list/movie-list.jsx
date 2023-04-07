import { Button, Col, Row } from 'react-bootstrap';
import { MovieCard } from '../movie-card/movie-card';

export const MovieList = () => {
  return (
    <Row className='justify-content-md-center'>
      <Col xs={12}>
        <h2>Favorite Movies</h2>
        <Col>
          Render Movie Card here - no selection for the moment
          {/* <MovieCard movie={movie} /> */}
        </Col>
        <Button variant='secondary'>Remove from List</Button>
      </Col>
    </Row>
  )
}
