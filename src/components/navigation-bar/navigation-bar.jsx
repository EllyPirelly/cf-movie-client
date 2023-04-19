import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// takes the props unser, onLoggedIn (also see MainView)
export const NavigationBar = ({ user, onLoggedOut, handleSearch }) => {

  const imageUrl = new URL(
    '../../img/svg.clapperboard.svg',
    import.meta.url
  );

  return (
    <div className='navbar-container fixed-top'>
      <Navbar expand='lg' bg='info' variant='dark'>
        <Container>
          <Navbar.Brand as={Link} to='/' onClick={() => setQuery('')}>
            <img src={imageUrl} className='svg-moviepool' alt='Movie Pool' />{' '}
            MoviePool
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />

          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto mt-2 mt-lg-0'>
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
                  <Nav.Link as={Link} to='/' onClick={() => setQuery('')}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to='/profile'>
                    Profile
                  </Nav.Link>
                  <Nav.Link onClick={onLoggedOut}>
                    Log out
                  </Nav.Link>
                  <Form className="d-flex mt-3 ms-lg-3 mt-lg-0">
                    <Form.Control
                      type="search"
                      placeholder="Search by Title"
                      className="me-2"
                      aria-label="Search"
                      onChange={handleSearch}
                    />
                  </Form>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
