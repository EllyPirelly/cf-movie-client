import { Card } from 'react-bootstrap';

// using props makes the component re-render once updated
// `user` state is coming from MainView via prop
export const UserInfo = ({ user }) => {
  return (
    <>
      <h3>Your registration details:</h3>
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
  )
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('user'));
  //   // console.log(items.userName);
  //   // console.log(items.email);
  //   if (items) {
  //     setItems(items);
  //   }
  // }, []);
}