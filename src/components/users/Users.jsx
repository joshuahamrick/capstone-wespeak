export const Users = ({ user, currentUser }) => {
  if (currentUser.id !== user.id) {
    return (
      <div className="user">
        <div className="user-username">{user.username}</div>
        <div className="user-name">{user.name}</div>
        <div className="user-location">{user.location}</div>
      </div>
    );
  } else {
    return;
  }
};
