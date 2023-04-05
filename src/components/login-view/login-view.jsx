import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// takes the prop `onLoggedIn`
export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
        console.log('Login response: ', data);
        if (data.user) {
          // localStorage to persist `user` and `token` data
          // user will stay authenticated between page loads
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem('token', data.token);
          // call prop `onLoggedIn`
          // pass `user` and `token` back to `MainView` so they can be used in subsequent API requests
          onLoggedIn(data.user, data.token);
        } else {
          alert('No such user.');
        }
      })
      .catch((e) => {
        alert('Something went wrong.');
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='formUsername'>
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength='5'
        />
      </Form.Group>

      <Form.Group controlId='formPassword'>
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Button className='mt-3 mb-3' type='submit' variant='primary'>Log In</Button>
    </Form>
  );
};