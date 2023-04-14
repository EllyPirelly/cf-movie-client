import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

// user prop holds user info - including fav movies!
export const MovieView = ({ user, movies, updateUserInfo }) => {

  const [isFavorite, setIsFavorite] = useState(false);
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie._id === movieId);

  useEffect(() => {
    if (user.favoriteMovies && movie._id) {
      setIsFavorite(user.favoriteMovies.includes(movie._id))
    }
  }, [movie]);

  const addFavorite = () => {

    const token = localStorage.getItem('token');

    fetch(`https://movie-pool.onrender.com/users/${user.userName}/movies/${movie._id}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert('Fail');
        }
      })
      .then((user) => {
        if (user) {
          alert('Successfully added.');
          setIsFavorite(true);
          updateUserInfo(user);
        }
      })
      .catch((error) => {
        alert('Error message: ' + error);
      });
  };

  const deleteFavorite = () => {

    const token = localStorage.getItem('token');

    fetch(`https://movie-pool.onrender.com/users/${user.userName}/movies/${movie._id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert('Fail');
        }
      })
      .then((user) => {
        if (user) {
          alert('Successfully deleted.');
          setIsFavorite(false);
          updateUserInfo(user);
        }
      })
      .catch((error) => {
        alert('Error message: ' + error);
      });
  };

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
          {/* toggle button based on whether the movie is listed in the user's favorites or not */}
          {isFavorite
            ? (<Button onClick={deleteFavorite} variant='warning' className='w-100 mt-4'>Remove from List</Button>)
            : (<Button onClick={addFavorite} variant='success' className='w-100 mt-4'>Add to favorites</Button>)
          }
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
