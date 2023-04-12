import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MovieCard = ({ movie }) => {

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
    <Card className='movie-view__card h-100 text-center bg-info'>
      <Card.Img className='img-fluid h-100 w-auto' variant="top" src={movie.imagePath} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director.directorName}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
          <Button variant='secondary' className='w-100'>See More</Button>
        </Link>
      </Card.Body>
      <Button onClick={addFavorite} variant='secondary' className='w-100'>Add to favorites</Button>
    </Card>
  );

  // alternative with whole card linked - TODO: maybe use
  // return (
  //   <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
  //     <Card className='h-100 text-center bg-info'>
  //       <Card.Img className='img-fluid h-100 w-auto' variant="top" src={movie.imagePath} />
  //       <Card.Body>
  //         <Card.Title>{movie.title}</Card.Title>
  //         <Card.Text>{movie.director.directorName}</Card.Text>
  //         <Button variant='secondary' className='w-100'>See More</Button>
  //       </Card.Body>
  //     </Card>
  //   </Link>
  // );
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
