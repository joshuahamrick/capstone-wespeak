import { useState, useEffect } from "react";
import { getAllPosts } from "../../services/postService";
import { PostList } from "../posts/postList.jsx";
import { FilterBar } from "../filter/FilterBar.jsx";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [group, setGroup] = useState(0);
  const [type, setType] = useState("");

  useEffect(() => {
    if (group) {
      const filteredByGroup = posts.filter((post) => post.groupId == group);
      setFilteredPosts(filteredByGroup);
    } else {
      setFilteredPosts(posts);
    }
  }, [group]);

  useEffect(() => {
    const filteredBySearchTerm = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filteredBySearchTerm);
  }, [searchTerm, posts]);

  useEffect(() => {
    getAllPosts().then((allPosts) => setPosts(allPosts));
  }, []);

  useEffect(() => {
    if (type) {
      const filteredByEncrypted = posts.filter(
        (post) => post.encrypted === type
      );
      setFilteredPosts(filteredByEncrypted);
    } else {
      setFilteredPosts(posts);
    }
  }, [type]);

  return (
    <div>
      <h1>Home</h1>
      <FilterBar
        setSearchTerm={setSearchTerm}
        setGroup={setGroup}
        setType={setType}
      />
      <PostList filteredPosts={filteredPosts} />
    </div>
  );
};
