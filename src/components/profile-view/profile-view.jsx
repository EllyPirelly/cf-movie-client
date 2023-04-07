import { Button, Col, Row } from 'react-bootstrap';
import { UserInfo } from './user-info';
import { UserUpdate } from './user-update';
import { MovieList } from '../movie-list/movie-list';

export const ProfileView = () => {

  return (
    <>
      <h2>User Profile</h2>
      <UserInfo />
      <br />
      <MovieList />
      <br />
      <UserUpdate />
    </>
  )
}
