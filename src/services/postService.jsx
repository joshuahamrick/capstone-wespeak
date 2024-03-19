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
export const getUserPostsById = (userId) => {
  return fetch(
    `http://localhost:8088/posts?_expand=user&_expand=group&userId=${userId}`
  ).then((res) => res.json());
};

export const postNewPost = (post) => {
  return fetch("http://localhost:8088/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
};

export const deleteUsersPost = (currentPost) => {
  return fetch(`http://localhost:8088/posts/${currentPost.id}`, {
    method: "DELETE",
  });
};

export const updateUsersPost = (post) => {
  return fetch(`http://localhost:8088/posts/${post.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
};
