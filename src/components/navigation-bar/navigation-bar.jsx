import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

// takes the props unser, onLoggedIn (also see MainView)
export const NavigationBar = ({ user, onLoggedOut }) => {

  const imageUrl = new URL(
    "../../img/svg-clapperboard.svg",
    import.meta.url
  );

  const userUrl = new URL(
    "../../img/svg-user-avatar-square.svg",
    import.meta.url
  );

  return (
    <div className="navbar-container fixed-top">
      <Navbar expand="lg" bg="info" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={() => setQuery('')}>
            <img src={imageUrl} className="svg-moviepool" alt="Movie Pool" />{' '}
            MoviePool
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mt-2 mt-lg-0">
              {!user && (
                <>
                  <Nav.Link as={Link} to="/signup">
                    Sign up
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login">
                    Log in
                  </Nav.Link>
                </>
              )}
              {user && (
                <>
                  <Nav.Link as={Link} to="/" align="end" onClick={() => setQuery('')}>
                    All Movies
                  </Nav.Link>
                  <NavDropdown align="end" className="navbar-avatar-container" title={
                    <img src={userUrl} className="navbar-avatar" alt="avatar" />
                  }>
                    <NavDropdown.Item href="/profile">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={onLoggedOut}>
                      Log out
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </div >
  );
};
