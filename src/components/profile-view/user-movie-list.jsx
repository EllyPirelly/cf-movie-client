import { Button, Col, Row } from 'react-bootstrap';
import { MovieCard } from '../movie-card/movie-card';

export const UserMovielist = ({ updateUserInfo }) => {

  return (
    <Row className='justify-content-md-center'>
      <h3>Favorite Movies</h3>
      {/* <MovieCard updateUserInfo={updateUserInfo} /> */}
    </Row>
  )
};
