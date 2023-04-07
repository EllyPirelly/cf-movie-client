import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

// import './movie-view.scss';

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie._id === movieId);

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Image className='img-fluid h-auto' src={movie.imagePath} />
        </Col>
        <Col xs={6}>
          <Link to={`/`}>
            <Button variant='secondary' className="w-100">Back to movies</Button>
          </Link>
          {/* TODO: if not favorite, add */}
          <Button className='w-100 mt-4'>Add to favorites</Button>
          {/* TODO: if already favorite, message that is */}
          {/* <div>This movie is already on your Favorites list.</div> */}
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          <h2>{movie.title}</h2>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          <div>
            <h4>Plot: </h4>
            <p>{movie.description}</p>
            <h4>Genre: </h4>
            <p>{movie.genre.genreName}</p>
            <h4>Director: </h4>
            <p>{movie.director.directorName}</p>
            <h4>More details about the genre {movie.genre.genreName}: </h4>
            <p>{movie.genre.description}</p>
            <h4>More details about the director {movie.director.directorName}: </h4>
            <p>{movie.director.bio}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};