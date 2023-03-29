import { useState } from 'react';

export const SignupView = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      // TODO: check, birthday is not required in API models yet
      Birthday: birthday
    };

    // TODO: add signup URL
    fetch('https://movie-pool.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringyfy(data)
    }).then((response) => {
      if (response.ok) {
        alert('Signup successful.');
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