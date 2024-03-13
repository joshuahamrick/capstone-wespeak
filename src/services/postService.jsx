export const getAllPosts = () => {
  return fetch("http://localhost:8088/posts?_expand=user&_expand=group").then(
    (res) => res.json()
  );
};

export const getPostById = (postId) => {
  return fetch(
    `http://localhost:8088/posts?_expand=user&_expand=group&id=${postId}`
  ).then((res) => res.json());
};
