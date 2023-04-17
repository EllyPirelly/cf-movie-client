import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

export const SignupView = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const navigate = useNavigate();

  // makes an API call to the signup URL passing the form data
  // callback tells the login API to validate username, password, email, birthday
  const handleSubmit = (event) => {
    // prevents default reloading of the entire page
    event.preventDefault();

    const data = {
      userName: username,
      password: password,
      email: email,
      birthDate: birthday
    };

    fetch('https://movie-pool.onrender.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.ok) {
          alert('You\'ve successfully signed up, please log in.');
          navigate('/login');
        } else {
          alert('Signup failed.');
        }
      });
  };

  return (
    <>
      <h2>Sign up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formGroupUsername'>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength='5'
          />
        </Form.Group>

        <Form.Group controlId='formGroupPassword'>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId='formGroupEmail'>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId='formGroupBirthday'>
          <Form.Label>Birthday:</Form.Label>
          <Form.Control
            type='date'
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
        </Form.Group>

        <Button className='mt-3 mb-3' type='submit' variant='primary'>Sign up</Button>
      </Form>
    </>
  );
};