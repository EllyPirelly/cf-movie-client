import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';
import { ProfileView } from '../profile-view/profile-view';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { Col, Row } from 'react-bootstrap';

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const storedToken = localStorage.getItem('token');
  const [token, setToken] = useState(storedToken ? storedToken : null);

  useEffect(() => {
    if (!token) {
      return;
    }
    fetch('https://movie-pool.onrender.com/movies', {
      headers: {
        // Bearer Authorization enables authenticated API requests
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies);
      });
    // dependency array; ensures fetch is called every time `token` changes
  }, [token]);

  return (
    <BrowserRouter>
      <NavigationBar
        user={user}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
      />

      <Row className='justify-content-md-center mt-4'>
        <Routes>
          <Route
            path='/signup'
            element={
              <>
                {user ? (
                  <Navigate to='/' />
                ) : (
                  <Col xs={12}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path='/login'
            element={
              <>
                {user ? (
                  <Navigate to='/' />
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
            path='/profile'
            element={
              <>
                {!user ? (
                  <Navigate to='/login' replace />
                ) : (
                  <Col xs={12}>
                    <ProfileView />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path='/movies/:movieId'
            element={
              <>
                {!user ? (
                  <Navigate to='/login' replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty.</Col>
                  // <div>The list is empty.</div>
                ) : (
                  <Col md={12}>
                    <MovieView movies={movies} />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path='/'
            element={
              <>
                {!user ? (
                  <Navigate to='/login' replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty.</Col>
                  // <div>The list is empty.</div>
                ) : (
                  <>
                    {movies.map((movie) => (
                      <Col className='mb-5' key={movie._id} sm={6} md={4} xl={3}>
                        <MovieCard movie={movie} />
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
