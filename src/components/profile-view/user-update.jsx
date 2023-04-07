import { Button, Form } from 'react-bootstrap';

export const UserUpdate = () => {

  const handleUpdate = (event) => {
    event.preventDefault();
  }

  return (
    <div xs={12}>
      <h3>Update your information here: - Static for now</h3>
      <Form onSubmit={handleUpdate}>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type='text'
            required
            minLength='5'
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type='password'
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type='email'
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Date of Birth:</Form.Label>
          <Form.Control
            type='date'
            required
          />
        </Form.Group>

        <Button className='mt-3 mb-3' type='submit' variant='primary'>Update User Info</Button>
      </Form>
    </div>
  )
}