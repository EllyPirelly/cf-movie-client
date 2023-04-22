import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Row, Col } from 'react-bootstrap';

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

        <Row>
          <Form.Group as={Col} xs={12} md={6} controlId='formEmail' className='mb-3'>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type='email'
              placeholder='Email'
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} xs={12} md={6} controlId='formBirthday' className='mb-3'>
            <Form.Label>Birthday:</Form.Label>
            <Form.Control
              type='date'
              value={birthday}
              required
              onChange={(e) => setBirthday(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Button className='mt-3' type='submit' variant='primary'>Sign up</Button>
      </Form>
    </>
  );
};