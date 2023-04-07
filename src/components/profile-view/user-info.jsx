import { useState, useEffect } from 'react';

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
      <h4>display the bare minimum of user info as a start</h4>
      <div style={{ backgroundColor: 'white', color: 'black' }}>{items.userName}</div>
      <div style={{ backgroundColor: 'white', color: 'black' }}>{items.email}</div>
    </>
  )
}