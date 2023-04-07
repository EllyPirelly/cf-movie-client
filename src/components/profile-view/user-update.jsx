import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

export const UserUpdate = () => {
  const storedToken = localStorage.getItem('token');
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleUpdate = (event) => {
    event.preventDefault();

    const userdata = {
      userName: username,
      password: password,
      email: email,
      birthDate: birthday
    };

    useEffect(() => {
      if (!token) {
        return;
      }

      // http://localhost:1234/users/testuser31
      // grabbed remote URL needs to be something like this:
      // hhttps://movie-pool.onrender.com/users/{userName}

      fetch(`https://movie-pool.onrender.com/users/testuser31`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userdata)
      })
        .then((response) => {
          if (response.ok) {
            alert('ok');
            response.json();
          } else {
            alert('failed');
            return false;
          }
        })
        .then(user => {
          if (user) {
            alert('success')
            updateUser(user)
          }
        })
        .catch((error) => {
          alert(error);
        });
    })
  };

  return (
    <div xs={12}>
      <h3>Update your information here - not working:</h3>
      <Form onSubmit={handleUpdate}>
        <Form.Group>
          <Form.Label>Username: test - {username}</Form.Label>
          <Form.Control
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength='5'
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Birthday:</Form.Label>
          <Form.Control
            type='date'
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
        </Form.Group>

        <Button className='mt-3 mb-3' type='submit' variant='primary'>Update User Info</Button>
      </Form>
    </div>
  );
}
