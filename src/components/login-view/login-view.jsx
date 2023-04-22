import { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

// takes the prop onLoggedIn (also see MainView)
export const LoginView = ({ onLoggedIn }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // makes an API call to the login URL passing the form data
  // callback tells the login API to validate username and password
  const handleSubmit = (event) => {
    // prevents default reloading of the entire page
    event.preventDefault();

    const data = {
      userName: username,
      password: password
    };

    fetch('https://movie-pool.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      // transforms response to JSON object
      .then((response) => response.json())
      .then((data) => {
        // console.log('Login response: ', data);
        if (data.user) {
          // localStorage to persist user and token data
          // user will stay authenticated between page loads
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem('token', data.token);
          // call prop onLoggedIn
          // pass user and token back to MainView so they can be used in subsequent API requests
          onLoggedIn(data.user, data.token);
        } else {
          alert('No such user, please check your credentials or sign-up.');
        }
      })
      .catch((error) => {
        alert('Something went wrong: ' + error);
      });
  };

  return (
    <>
      <h2>Log in</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} xs={12} md={6} controlId='formUsername' className='mb-3'>
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Username'
              value={username}
              minLength='5'
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} xs={12} md={6} controlId='formPassword' className='mb-3'>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Button className='mt-3' type='submit' variant='primary'>Log in</Button>
      </Form>
    </>
  );
};