import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';

// import './movie-view.scss';

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie._id === movieId);

  return (
    <div>
      <div>
        <Image className="img-fluid w-50 h-auto" src={movie.imagePath} />
      </div>

      <h3>{movie.title}</h3>

      <div>
        <h4>Description: </h4>
        <p>{movie.description}</p>
      </div>

      <div>
        <h4>Genre: </h4>
        <p>{movie.genre.genreName}</p>
        <h4>Genre Description: </h4>
        <p>{movie.genre.description}</p>
      </div>

      <div>
        <h4>Director: </h4>
        <p>{movie.director.directorName}</p>
        <h4>Director Bio: </h4>
        <p>{movie.director.bio}</p>
      </div>

      <Link to={`/`}>
        <Button variant='secondary'>Back</Button>
      </Link>
    </div>
  );
};