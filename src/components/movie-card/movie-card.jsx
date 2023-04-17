import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

// user prop holds user info - including fav movies!
export const MovieCard = ({ movie, user, updateUserInfo }) => {

  const [isFavorite, setIsFavorite] = useState(false);

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
          alert(`You successfully added the movie '${movie.title}' to your favorites list.`);
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
          alert('Something went wrong.');
        }
      })
      .then((user) => {
        if (user) {
          alert(`You deleted the movie '${movie.title}' off of your favorites list.`);
          setIsFavorite(false);
          updateUserInfo(user);
        }
      })
      .catch((error) => {
        alert('Error message: ' + error);
      });
  };

  return (
    <Card className='movie-view__card h-100 text-center bg-info'>
      <Card.Img className='img-fluid' variant="top" src={movie.imagePath} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director.directorName}</Card.Text>
      </Card.Body>

      <Link to={`/movies/${encodeURIComponent(movie._id)}`} className='ms-3 me-3'>
        <Button variant='secondary' className='w-100'>See more</Button>
      </Link>

      {/* toggle button based on whether the movie is listed in the user's favorites or not */}
      {isFavorite
        ? (<Button onClick={deleteFavorite} variant='warning' className='m-3'>Remove from favorites</Button>)
        : (<Button onClick={addFavorite} variant='success' className='m-3'>Add to favorites</Button>)
      }
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
  }).isRequired
};
