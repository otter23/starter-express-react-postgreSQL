import React from 'react';

function User(props) {
  return (
    <>
      <div>Id: {props.user.id}</div>
      <div>Username: {props.user.username}</div>
      <br />
      <hr />
    </>
  );
}
export default User;
