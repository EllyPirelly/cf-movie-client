import { UserInfo } from './user-info';
import { UserUpdate } from './user-update';
import { UserMovielist } from './user-movie-list';

// as user state and updateUserInfo function is defined in MainView:
// user can be used to display the user (also see UserInfo)
// updateUserInfo can be used to update the user
export const ProfileView = ({ user, updateUserInfo }) => {

  return (
    <>
      <h2>User Profile</h2>
      <UserInfo user={user} />
      <br />
      <UserMovielist />
      <br />
      <UserUpdate updateUserInfo={updateUserInfo} />
    </>
  )
};
