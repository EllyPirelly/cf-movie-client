import { Col, Row } from 'react-bootstrap';
import { MovieCard } from '../movie-card/movie-card';

export const UserMovielist = ({ updateUserInfo, movies, user }) => {

  // filter movies to only select those on user's fav list
  const favoriteMovies = movies.filter(movie => user.favoriteMovies.includes(movie._id));

  return (
    <Row className='justify-content-md'>
      <h3>Favorite Movies</h3>
      {/* loop through filtered fav movies: if fav movies present, display via MovieCard; if none present, display list is empty */}
      {favoriteMovies.length
        ? favoriteMovies.map(movie => (
          <Col className='mb-5' key={movie._id} sm={6} md={4} xl={3}>
            <MovieCard movie={movie} user={user} updateUserInfo={updateUserInfo} />
          </Col>
        )) : <div>The favorite movies list is empty. Go ahead and add some!</div>
      }
    </Row>
  )
};
