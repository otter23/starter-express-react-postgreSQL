import React from 'react';
import { useSelector } from 'react-redux';

import User from './User';

function UsersList(props) {
  const users = useSelector((state) => state.users.usersByUserId);

  const userComponents = Object.values(users).map((user) => (
    <User key={user.id} user={user} />
  ));
  return (
    <>
      <h1>User List: </h1>
      {userComponents}
    </>
  );
}

export default UsersList;
