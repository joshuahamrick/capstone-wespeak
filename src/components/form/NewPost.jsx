import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllGroups } from "../../services/groupsService";
import { postNewPost } from "../../services/postService";
export const NewPost = ({ currentUser }) => {
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
    date: "",
    encrypted: "",
    userId: 0,
    groupId: 0,
  });
  useEffect(() => {
    getAllGroups().then((groupsArr) => setGroups(groupsArr));
  }, []);
  const handleChange = (event) => {
    const postCopy = { ...newPost };
    postCopy[event.target.name] = event.target.value;
    setNewPost(postCopy);
  };
  const handleSave = (event) => {
    event.preventDefault();
    if (newPost.title && newPost.body && newPost.encrypted && newPost.groupId) {
      const postCopy = { ...newPost };
      postCopy.userId = currentUser.id;
      postCopy.groupId = parseInt(postCopy.groupId);
      const date = new Date();
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
      }).format(date);
      postCopy.date = formattedDate;
      postNewPost(postCopy);
      navigate("/");
    } else {
      window.alert("Please fill out form.");
    }
  };
  return (
    <>
      <h1>New Post</h1>
      <form>
        <fieldset>
          <input
            name="title"
            type="text"
            placeholder="Title"
            required
            onChange={handleChange}
            className="form-control"
          />
        </fieldset>
        <fieldset>
          <input
            name="body"
            type="text"
            placeholder="Body"
            required
            onChange={handleChange}
            className="form-control"
          />
        </fieldset>
        <fieldset>
          <select
            name="encrypted"
            className="filter-option"
            onChange={handleChange}
          >
            <option value="">Type</option>
            <option value="true">Encrypted</option>
            <option value="false">Non-Encrypted</option>
          </select>
        </fieldset>
        <fieldset>
          <select
            name="groupId"
            className="filter-option"
            onChange={handleChange}
          >
            <option value="">Groups</option>
            {groups.map((group) => (
              <option key={group.id} value={group.id}>
                {group.name}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset>
          <button onClick={handleSave}>Submit</button>
        </fieldset>
      </form>
    </>
  );
};
