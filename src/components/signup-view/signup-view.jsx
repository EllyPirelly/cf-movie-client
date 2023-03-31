import { useState } from 'react';

export const SignupView = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  // makes an API call to the signup URL passing the form data
  const handleSubmit = (event) => {
    // prevents default reloading of the entire page
    event.preventDefault();

    const data = {
      userName: username,
      password: password,
      email: email,
      // TODO: check, birthday is not required in API models yet
      birthDate: birthday
    };

    // array test
    const test = [
      'test', 'test 2'
    ];

    // object test
    const objecttest = {
      Test: test
    };

    fetch('https://movie-pool.onrender.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(data)
      // body: JSON.stringify(test)
      body: JSON.stringify(objecttest)
    }).then((response) => {
      if (response.ok) {
        alert('Signup successful.');
        // reloads after successful alert has been shown
        window.location.reload();
      } else {
        alert('Signup failed.');
      }
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
          minLength='5'
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

      <label>
        Email:
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Birthday:
        <input
          type='date'
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
        />
      </label>

      <button type='submit'>Sign up</button>
    </form>
  );
};