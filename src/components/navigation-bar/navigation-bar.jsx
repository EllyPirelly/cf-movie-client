import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// takes the props unser, onLoggedIn (also see MainView)
export const NavigationBar = ({ user, onLoggedOut }) => {

  const imageUrl = new URL(
    '../../img/svg.clapperboard.svg',
    import.meta.url
  );

  return (
    <div className='navbar-container fixed-top'>
      <Navbar expand='lg' bg='info' variant='dark'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img src={imageUrl} className='svg-moviepool' alt='Movie Pool' />{' '}
            MoviePool
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />

          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              {!user && (
                <>
                  <Nav.Link as={Link} to='/login'>
                    Log in
                  </Nav.Link>
                  <Nav.Link as={Link} to='/signup'>
                    Sign up
                  </Nav.Link>
                </>
              )}
              {user && (
                <>
                  <Nav.Link as={Link} to='/'>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to='/profile'>
                    Profile
                  </Nav.Link>
                  <Nav.Link onClick={onLoggedOut}>
                    Log out
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
