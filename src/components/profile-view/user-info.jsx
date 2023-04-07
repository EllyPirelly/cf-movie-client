import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

export const UserInfo = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('user'));
    console.log(items.userName);
    console.log(items.email);
    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <>
      <h3>Your registration details:</h3>
      <Card className='bg-info'>
        <Card.Body>
          <Card.Title>Current User Info</Card.Title>
          <Card.Text>
            <span>Your name: {items.userName}</span>
            <br />
            <span>Your email: {items.email}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}