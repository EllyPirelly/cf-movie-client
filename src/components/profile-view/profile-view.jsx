import { Link } from 'react-router-dom';
import { Button, Card, Form, Col, Row } from 'react-bootstrap';

export const ProfileView = () => {

  return (
    <>
      <h2>User Profile</h2>
      <Card className='bg-info'>
        <Card.Body>
          <Card.Title>Current User Info</Card.Title>
          <Card.Text>
            <span>Your name: John</span>
            <br />
            <span>Your email: something@something.com</span>
          </Card.Text>
        </Card.Body>
      </Card>

      <Row className='justify-content-md-center'>
        <Col xs={12}>
          <h2>Favorite Movies</h2>
          <Col className='mb-5' sm={6} md={4} xl={3}>
            {/* <Link to={`/movies/${_id}`}></Link> */}
            <Link>
              <div>img tag with movie image</div>
              <h3>movie title</h3>
              <div>more???</div>
            </Link>
            <Button variant='secondary'>Remove from List</Button>
          </Col>
        </Col>
      </Row>

      <div>
        <h3>Update User Info</h3>
        <Form>
          <Form.Group>
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type='text'
              // value={username}
              // onChange={(e) => handleUpdate(e)}
              required
              minLength='5'
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type='password'
              // value={password}
              // onChange={(e) => handleUpdate}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type='email'
              // value={email}
              // onChange={(e) => handleUpdate(e)}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Date of Birth:</Form.Label>
            <Form.Control
              type='date'
              // value={birthday}
              // onChange={(e) => handleUpdate(e)}
              required
            />
          </Form.Group>

          <Button className='mt-3 mb-3' type='submit' variant='primary'>Update User Info</Button>
        </Form>
      </div>
    </>
  );
}
