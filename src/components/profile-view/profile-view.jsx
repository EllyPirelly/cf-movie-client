import { UserInfo } from './user-info';
import { UserUpdate } from './user-update';
import { UserMovielist } from './user-movie-list';

// as `user` state and `setUser` function is defined in MainView
// `user` can be used to display the user, also see UserInfo
// `setUser`can be used to update the user
export const ProfileView = ({ setUser, user }) => {

  return (
    <>
      <h2>User Profile</h2>
      <UserInfo user={user} />
      <br />
      <UserMovielist />
      <br />
      <UserUpdate setUser={setUser} />
    </>
  )
}
