import { UserInfo } from './user-info';
import { UserUpdate } from './user-update';

export const ProfileView = () => {

  return (
    <>
      <h2>User Profile</h2>
      <UserInfo />
      <br />
      <UserUpdate />
    </>
  )
}
