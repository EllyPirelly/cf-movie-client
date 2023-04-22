import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { ProfileView } from "../profile-view/profile-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { Col, Row, Form } from "react-bootstrap";

export const MainView = () => {

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredmovies] = useState([]);

  useEffect(() => {
    if (!token) {
      return;
    };

    fetch("https://movie-pool.onrender.com/movies", {
      headers: {
        // Bearer Authorization enables authenticated API requests
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies);
      });
    // dependency array; ensures fetch is called every time token changes
  }, [token]);

  // as user info will be updated by multiple components it's best to set it in MainView and pass it from here to any component that changes the user info
  const updateUserInfo = (user) => {
    delete user.password;
    // set localStorage user to overwrite the existing one
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  useEffect(() => {
    setFilteredmovies(movies);
  }, [movies]);

  // always start from the complete movies array
  // movies is the comprehensive storage of all movies
  // setFilteredmovies call tempArray, that has just the movies that have the searchQuery in the title
  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    let tempArray = movies.filter((index) => index.title.toLowerCase().includes(searchQuery));
    setFilteredmovies(tempArray);
  }

  return (
    <BrowserRouter>
      <NavigationBar
        user={user}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
        handleSearch={handleSearch}
      />

      <Row className="main-view__container justify-content-md">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col xs={12}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col xs={12}>
                    <LoginView
                      onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                      }} />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Col xs={12}>
                    {/* provide user (and with that, details about the user), updateUserInfo (to update user info) and all movies to other components as props */}
                    <ProfileView user={user} updateUserInfo={updateUserInfo} movies={movies} />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/movies/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col md={12}>The list is empty.</Col>
                ) : (
                  <Col md={12}>
                    {/* provide user (and with that, details about the user), updateUserInfo (to update user info) and all movies to other components as props */}
                    <MovieView movies={movies} user={user} updateUserInfo={updateUserInfo} />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col md={12}>The list is empty.</Col>
                ) : (
                  <>
                    <Col xs={12} className="d-flex justify-content-md-center">
                      <Form xs={12} className="mt-4 mb-5 w-100">
                        <Form.Control
                          type="search"
                          placeholder="Search by title"
                          className="movie-search"
                          aria-label="Search"
                          onChange={handleSearch}
                        />
                      </Form>
                    </Col>
                    {filteredMovies.map((movie) => (
                      <Col className="mb-5" key={movie._id} sm={6} md={4} xl={3}>
                        {/* provide user (and with that, details about the user), updateUserInfo (to update user info) and single movie to other components as props */}
                        <MovieCard movie={movie} user={user} updateUserInfo={updateUserInfo} />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
