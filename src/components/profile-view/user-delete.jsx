import { Button } from 'react-bootstrap';

export const UserDelete = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedToken = localStorage.getItem('token');

  const handleDelete = (event) => {
    event.preventDefault();

    fetch(`https://movie-pool.onrender.com/users/${storedUser.userName}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${storedToken}`,
        'Content-Type': 'application/json'
      },
    })
      .then((response) => {
        if (response.ok) {
          alert(`You successfully deleted the account with the username of '${userName}'.`);
          localStorage.clear();
        } else if (response.status === 400) {
          alert('User was not found.');
        } else if (response.status === 401) {
          alert('Access denied.');
        }
      })
      .catch((error) => {
        console.log('Error: ' + error);
      })
  }

  return (
    <Button onClick={handleDelete} variant='danger'>Delete your account</Button>
  )
}