export const Groups = ({ group }) => {
  return (
    <div className="group">
      <div className="group-name">{group.name}</div>
      <div className="group-members"># members</div>
    </div>
  );
};
