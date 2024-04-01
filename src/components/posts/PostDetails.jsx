import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteUsersPost, getPostById } from "../../services/postService";

export const PostDetails = ({ currentUser }) => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPostById(postId).then((post) => setPost(post[0]));
  }, [postId]);
  const handleDeletion = () => {
    deleteUsersPost(post);
    navigate("/");
  };
  return (
    <>
      <div className="back-bar">
        <div></div>
        {currentUser.id == post.userId ? (
          <>
            <div></div>
            <div></div>
            <div></div>
          </>
        ) : (
          ""
        )}
        <div className="back-button">
          <Link to="/">
            <button className="button">Back</button>
          </Link>
        </div>
        <div></div>
        <div></div>
        <div></div>
        {currentUser.id == post.userId ? (
          <>
            <div className="post-details-btn-container">
              <Link to={`/posts/edit/${post.id}`}>
                <button className="button">Edit</button>
              </Link>
              <button className="button" onClick={handleDeletion}>
                Delete
              </button>
            </div>
          </>
        ) : (
          ""
        )}
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="post-details-container">
        <div className="post">
          <header className="card-header">
            <div>{post.group?.name}</div>
            <div>
              {post.user?.username} - {post.date ? post.date : ""}
            </div>
          </header>

          <div
            className="post-title"
            onClick={(event) => {
              try {
                navigator.clipboard.writeText(event.target.innerHTML);
              } catch (error) {
                console.log("copy error");
              }
            }}
          >
            {post.title ? post.title : ""}
          </div>
          <div
            className="post-body"
            onClick={(event) => {
              try {
                navigator.clipboard.writeText(event.target.innerHTML);
              } catch (error) {
                console.log("copy error");
              }
            }}
          >
            {post.body ? post.body : ""}
          </div>
          <footer className="post-footer">
            <div></div>
            <div></div>
            <div>#{post.group?.num}</div>
          </footer>
        </div>
      </div>
    </>
  );
};
