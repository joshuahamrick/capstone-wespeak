export const getUserByEmail = (email) => {
  return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
    res.json()
  );
};

export const createUser = (customer) => {
  return fetch("http://localhost:8088/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  }).then((res) => res.json());
};

export const getAllUsers = () => {
  return fetch(`http://localhost:8088/users`).then((res) => res.json());
};

export const getUserById = (userId) => {
  return fetch(`http://localhost:8088/users?id=${userId}`).then((res) =>
    res.json()
  );
};

export const updateUser = (userUpdate) => {
  return fetch(`http://localhost:8088/users/${userUpdate.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userUpdate),
  });
};

export const deleteUserProfile = (userId) => {
  return fetch(`http://localhost:8088/users/${userId}`, { method: "DELETE" });
};
