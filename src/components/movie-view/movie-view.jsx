import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

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

    const token = localStorage.getItem("token");

    fetch(`https://movie-pool.onrender.com/users/${user.userName}/movies/${movie._id}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Fail");
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
        alert("Error message: " + error);
      });
  };

  const deleteFavorite = () => {

    const token = localStorage.getItem("token");

    fetch(`https://movie-pool.onrender.com/users/${user.userName}/movies/${movie._id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Something went wrong.");
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
        alert("Error message: " + error);
      });
  };

  return (
    <Container className="d-flex justify-content-md-center movie-view-container">
      <Row>
        <Col xs={12} md={6} lg={4}>
          <Image className="img-fluid h-auto" src={movie.imagePath} />
        </Col>

        <Col xs={12} md={6} lg={8} className="mt-4">
          <h2>{movie.title}</h2>
          <h4>Plot</h4>
          <p>{movie.description}</p>
          {/* toggle button based on whether the movie is listed in the user's favorites or not */}
          {isFavorite
            ? (
              <Button
                onClick={deleteFavorite}
                variant="warning"
                className="movie-fav-button mt-4">
                Remove from List
              </Button>
            )
            : (
              <Button
                onClick={addFavorite}
                variant="success"
                className="movie-fav-button mt-4">
                Add to favorites
              </Button>
            )
          }
        </Col>
      </Row>

      <Row className="mt-4">
        <Col xs={12}>
          <h4>Director</h4>
          <p>{movie.director.directorName}</p>
          <h4>More details about {movie.director.directorName}</h4>
          <p>{movie.director.bio}</p>
          <h4>Genre</h4>
          <p>{movie.genre.genreName}</p>
          <h4>More details about the genre {movie.genre.genreName}</h4>
          <p>{movie.genre.description}</p>
        </Col>
      </Row>
    </Container>
  );
};
