export const getAllGroups = () => {
  return fetch(`http://localhost:8088/groups`).then((res) => res.json());
};

export const getGroupById = (groupId) => {
  console.log(groupId);
  return fetch(`http://localhost:8088/groups/${groupId}`).then((res) =>
    res.json()
  );
};
