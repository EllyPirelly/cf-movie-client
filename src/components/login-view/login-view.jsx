// import React from 'react';
import { useState } from 'react';

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

    // array test
    const test = [
      'test', 'test 2'
    ];

    // object test
    const objecttest = {
      Test: test
    };

    fetch('https://movie-pool.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(data)
      // body: JSON.stringify(test)
      body: JSON.stringify(objecttest)
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
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>

      <label>
        Password:
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <button type='submit'>Log In</button>
    </form>
  );
};