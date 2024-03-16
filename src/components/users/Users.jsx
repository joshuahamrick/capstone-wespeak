export const Users = ({ user }) => {
  return (
    <div className="user">
      <div className="user-username">{user.username}</div>
      <div className="user-name">{user.name}</div>
      <div className="user-location">{user.location}</div>
    </div>
  );
};
