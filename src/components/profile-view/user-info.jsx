import { Card } from 'react-bootstrap';

export const UserInfo = ({ user }) => {
  return (
    <>
      <h2>UserProfile</h2>
      <Card className='bg-info'>
        <Card.Body>
          <Card.Title>Current User Info</Card.Title>
          <Card.Text>
            <span>Your name: {user.userName}</span>
            <br />
            <span>Your email: {user.email}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
