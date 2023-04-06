import { Button, Col, Row } from 'react-bootstrap';
import { UserInfo } from './user-info';
import { UserUpdate } from './user-update';
import { MovieCard } from '../movie-card/movie-card';

export const ProfileView = ({ user, movies }) => {
  const storedToken = localStorage.getItem('token');
  const storedUser = JSON.parse(localStorage.getItem('user'));

  let favoriteMovs = movies.filter((movie) => user.favoriteMovies.includes(movie._id));

  return (
    <>
      <UserInfo user={user} />

      <Row className='justify-content-md-center'>
        <Col xs={12}>
          <h2>Favorite Movies</h2>

          {favoriteMovs.map((movie) => (
            <Col className='mb-5' key={movie._id} sm={6} md={4} xl={3}>
              <MovieCard movie={movie} />

              <Button variant='secondary'>Remove from List</Button>
            </Col>
          ))}
        </Col>
      </Row>

      <UserUpdate storedToken={storedToken} storedUser={storedUser} />
    </>
  );
}
