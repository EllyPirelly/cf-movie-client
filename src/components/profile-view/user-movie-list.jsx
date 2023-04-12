import { Button, Col, Row } from 'react-bootstrap';
import { MovieCard } from '../movie-card/movie-card';

export const UserMovielist = ({ movies, movie, user }) => {
  const [isFavorite, setIsFavorite] = useState(user.favoriteMovies.includes(movie._id));

  let favoriteMovies = movies.filter(movie => user.favoriteMovies.includes(movie._id));

  const removeFavorite = (event) => {
    event.preventDefault();

    fetch(`https://movie-pool.onrender.com/users/${user.userName}/movies/${movieId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        if (response.ok) {
          alert('Successfully deleted.');
          return response.json();
        } else {
          alert("Fail");
        }
      })
      .then((user) => {
        if (user) {
          alert("Success");
          setIsFavorite(false);
        }
      })
      .catch((error) => {
        alert('Error message: ' + error);
      });
  }

  return (
    <Row className='justify-content-md-center'>
      <h3>Favorite Movies</h3>
      {favoriteMovies.map((movie) => (
        <Col attribute='3' className='mb-5' key={movie._id} sm={6} md={4} xl={3}>
          <MovieCard movie={movie} />
          <Button onClick={removeFavorite} variant='danger'>Remove from List</Button>
        </Col>
      ))}
    </Row>
  )
}
