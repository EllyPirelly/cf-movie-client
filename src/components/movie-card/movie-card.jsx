import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card className='h-100 text-center bg-info'
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      <Card.Img className='img-fluid h-100 w-auto' variant="top" src={movie.imagePath} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director.directorName}</Card.Text>
        <Button variant='secondary' className='w-100'>See More</Button>
        {/* shouldn't this be an <a></a> as we are not submitting anything?? */}
        {/* <a href='#' variant='primary' className='w-100'>See More</a> */}
      </Card.Body>

    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.shape({
      genreName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
    director: PropTypes.shape({
      directorName: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
    }),
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};
