import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPostById, updateUsersPost } from "../../services/postService";
import { getAllGroups } from "../../services/groupsService";

export const EditPost = ({ currentUser }) => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllGroups().then((groupsArr) => setGroups(groupsArr));
  }, []);
  useEffect(() => {
    getPostById(postId).then((currentPost) => setPost(currentPost[0]));
  }, [postId]);
  const handleChange = (event) => {
    const postCopy = { ...post };
    postCopy[event.target.name] = event.target.value;
    setPost(postCopy);
  };
  const handleSave = (event) => {
    event.preventDefault();
    if (post.title && post.body && post.encrypted && post.groupId) {
      const postObj = {
        id: post.id,
        title: post.title,
        body: post.body,
        date: post.date,
        encrypted: post.encrypted,
        userId: currentUser.id,
        groupId: parseInt(post.groupId),
      };
      updateUsersPost(postObj);
      navigate(`/posts/${postId}`);
    } else {
      window.alert("Please fill in all fields.");
    }
  };
  const displayEncrypted = () => {
    if (post.encrypted == "true") {
      return "Encrypted";
    } else if (post.encrypted == "false") {
      return "Non-Encrypted";
    }
  };

  return (
    <>
      <div className="back-bar">
        <div></div>
        <div className="back-button">
          <Link to={`/posts/${postId}`}>
            <button className="button">Back</button>
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
            <div>
              {post.user?.username} - {post.date ? post.date : ""}
            </div>
          </header>
          <form>
            <fieldset>
              <div className="form-group">
                <input
                  name="title"
                  type="text"
                  required
                  value={post.title ? post.title : ""}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <input
                  name="body"
                  type="text"
                  value={post.body ? post.body : ""}
                  required
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </fieldset>
            <fieldset>
              <select
                name="groupId"
                className="filter-option"
                onChange={handleChange}
              >
                <option value={post.groupId}>{post.group?.name}</option>
                {groups.map((group) => (
                  <option key={group.id} value={group.id}>
                    {group.name}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset>
              <select
                name="encrypted"
                className="filter-option"
                onChange={handleChange}
              >
                <option value={post.encrypted}>{displayEncrypted()}</option>
                <option value="true">Encrypted</option>
                <option value="false">Non-Encrypted</option>
              </select>
            </fieldset>
            <fieldset>
              <button onClick={handleSave}>Save</button>
            </fieldset>
          </form>
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
