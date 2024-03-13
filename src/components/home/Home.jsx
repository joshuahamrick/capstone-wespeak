import { useState, useEffect } from "react";
import { getAllPosts } from "../../services/postService";
import { PostList } from "../posts/postList.jsx";
export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((allPosts) => setPosts(allPosts));
  }, [posts]);

  return (
    <div>
      <h1>Home</h1>
      <PostList posts={posts} />
    </div>
  );
};
