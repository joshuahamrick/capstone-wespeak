export const getUserGroups = () => {
  return fetch("http://localhost:8088/userGroups").then((res) => res.json());
};
