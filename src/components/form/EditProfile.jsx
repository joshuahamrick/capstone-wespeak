import { useEffect, useState } from "react";
import {
  deleteUserProfile,
  getUserById,
  updateUser,
} from "../../services/userService";
import { useNavigate } from "react-router-dom";

export const EditProfile = ({ currentUser }) => {
  const navigate = useNavigate();
  const [currentUserObj, setCurrrentUserObj] = useState({});
  useEffect(() => {
    getUserById(currentUser.id).then((userArr) => {
      const userObj = userArr[0];
      return setCurrrentUserObj(userObj);
    });
  }, [currentUser]);

  const handleChange = (event) => {
    const stateCopy = { ...currentUserObj };
    stateCopy[event.target.name] = event.target.value;
    setCurrrentUserObj(stateCopy);
  };
  const handleSave = (event) => {
    event.preventDefault();
    updateUser(currentUserObj);
    navigate("/profile");
  };
  return (
    <>
      <h1>Edit Profile</h1>
      <form className="edit-profile">
        <fieldset>
          <div className="form-group">
            <label>User Name: </label>
            <input
              type="text"
              name="username"
              value={currentUserObj?.username ? currentUserObj.username : ""}
              required
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={currentUserObj?.username ? currentUserObj.username : ""}
              required
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label>Bio: </label>
            <input
              name="bio"
              type="text"
              value={currentUserObj?.bio ? currentUserObj.bio : ""}
              required
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label>Location: </label>
            <input
              name="location"
              type="text"
              required
              value={currentUserObj?.location ? currentUserObj.location : ""}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label>Contact Info: </label>
            <input
              name="contact"
              type="text"
              value={currentUserObj?.contact ? currentUserObj.contact : ""}
              required
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <button className="form-btn" onClick={handleSave}>
              Save
            </button>
          </div>
        </fieldset>
      </form>
      <div className="form-group">
        <button
          className="form-btn"
          onClick={() => {
            deleteUserProfile(currentUser.id);
            localStorage.removeItem("honey_user");
            navigate("/", { replace: true });
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};
