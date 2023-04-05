import { Button, Image } from 'react-bootstrap';

export const MovieView = ({ movie, onBackClick }) => {
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

      <Button onClick={onBackClick} variant='secondary'>Back</Button>
    </div>
  );
};