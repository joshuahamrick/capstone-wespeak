import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllPosts, getPostById } from "../../services/postService";

export const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPostById(postId).then((post) => setPost(post[0]));
  }, [postId]);

  return (
    <>
      <div className="back-bar">
        <div></div>
        <div className="back-button">
          <Link to="/">
            <button className="back-button-actual-button">Back</button>
          </Link>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="post-details-container">
        <div className="post">
          <header className="card-header">
            <div>{post.group?.name}</div>
            <div>
              {post.user?.userName} - {post.date ? post.date : ""}
            </div>
          </header>
          <div className="post-title">{post.title ? post.title : ""}</div>
          <div className="post-body">{post.body ? post.body : ""}</div>
          <footer className="post-footer">
            <div></div>
            <div></div>
            <div>Likes</div>
          </footer>
        </div>
      </div>
    </>
  );
};
