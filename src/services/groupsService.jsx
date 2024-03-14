export const getAllGroups = () => {
  return fetch(`http://localhost:8088/groups`).then((res) => res.json());
};
