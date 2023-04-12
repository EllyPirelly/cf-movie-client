import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

export const MovieView = ({ movies, user }) => {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie._id === movieId);
  const [isFavorite, setIsFavorite] = useState(user.favoriteMovies.includes(movie._id));

  let favoriteMovies = movies.filter(movie => user.favoriteMovies.includes(movie._id));

  const addFavorite = (event) => {
    event.preventDefault();

    fetch(`https://movie-pool.onrender.com/users/${user.userName}/movies/${movieId}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        if (response.ok) {
          alert('Successfully added.');
          return response.json();
        } else {
          alert("Fail");
        }
      })
      .then((user) => {
        if (user) {
          alert("Success");
          setIsFavorite(true);
        }
      })
      .catch((error) => {
        alert('Error message: ' + error);
      });
  }

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
          <Button onClick={addFavorite} className='w-100 mt-4'>Add to favorites</Button>
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