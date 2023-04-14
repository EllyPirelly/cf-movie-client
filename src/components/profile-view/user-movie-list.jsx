import { Button, Col, Row } from 'react-bootstrap';
import { MovieCard } from '../movie-card/movie-card';

export const UserMovielist = ({ updateUserInfo }) => {

  const [isFavorite, setIsFavorite] = useState('');

  return (
    <Row className='justify-content-md-center'>
      <h3>Favorite Movies</h3>
      {isFavorite
        ? <MovieCard updateUserInfo={updateUserInfo} />
        : <div>list is empty</div>
      }
      {/* <MovieCard /> */}
    </Row>
  )
};
