import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export const UserUpdate = ({ storedUser, storedToken }) => {
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);

  const [username, setUsername] = useState(user.userName);
  const [password, setPassword] = useState(user.password);
  const [email, setEmail] = useState(user.email);
  const [birthday, setBirthday] = useState(user.birthDate);

  const updateUser = (userName) => {

    // http://localhost:1234/users/testuser31

    fetch(`https://movie-pool.onrender.com/users/${userName}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((updatedUser) => {
        if (updatedUser) {
          setUser(updatedUser);
          localStorage.setItem('user', JSON.stringify(updatedUser));
          window.location.reload();
        }
      })
      .catch((error) => {
        alert('fail');
        console.log(error);
      });
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    const userdata = {
      userName: username,
      password: password,
      email: email,
      birthDate: birthday
    };

    // http://localhost:1234/users/testuser31

    fetch('https://movie-pool.onrender.com/users/${storedUser.userName}', {
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
          updateUser();
        } else {
          alert('failed');
          return false;
        }
      }).catch((error) => {
        // alert('error');
        console.log(error);
      });
  };

  return (
    <div>
      <h3>Update User Info</h3>
      <Form onSubmit={handleUpdate}>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
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
          <Form.Label>Date of Birth:</Form.Label>
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
};