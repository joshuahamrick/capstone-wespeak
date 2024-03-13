import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllPosts, getPostById } from "../../services/postService";

export const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPostById(postId).then((post) => setPost(post[0]));
  }, [postId]);

  return (
    <div className="post">
      <header className="card-header">
        <div>{post.group?.name}</div>
        <div>
          {post.user?.userName} - {post.date ? post.date : ""}
        </div>
      </header>
      <div className="post-title">{post.title ? post.title : ""}</div>
      <footer className="post-footer">
        <div></div>
        <div></div>
        <div>Likes</div>
      </footer>
    </div>
  );
};
