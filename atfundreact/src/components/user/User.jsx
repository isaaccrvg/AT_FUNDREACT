import React from 'react';

const User = ({ user, onClick }) => {
  return (
    <div className="user-card" onClick={onClick}>
      <h2>{user.name}</h2>
      <p>{user.company.catchPhrase}</p>
    </div>
  );
}

export default User;
