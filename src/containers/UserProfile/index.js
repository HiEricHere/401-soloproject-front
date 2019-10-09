import React from 'react';
import UserDetails from '../../components/User/UserDetails';
// UserActivities

class UserProfile extends React.Component {
  render() {
    return (
      <>
        <h3>User Profile</h3>
        <UserDetails/>
      </>
    );
  }
}

export default UserProfile;
