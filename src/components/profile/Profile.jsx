import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import { useEffect, useState } from "react";
import { getUserById } from "../../services/userService";
import { getUserPostsById } from "../../services/postService";
import { Post } from "../posts/Post";
export const Profile = ({ currentUser }) => {
  const [currentUserObj, setCurrrentUserObj] = useState({});
  const [usersPosts, setUsersPosts] = useState([]);

  //set currentUserObj
  useEffect(() => {
    getUserById(currentUser.id).then((userArr) => {
      const userObj = userArr[0];
      return setCurrrentUserObj(userObj);
    });
  }, [currentUser]);
  //set user posts
  useEffect(() => {
    getUserPostsById(currentUser.id).then((userPosts) =>
      setUsersPosts(userPosts)
    );
  }, [currentUser]);

  const navigate = useNavigate();
  return (
    <>
      <h1>Profile</h1>
      <div className="btn-container">
        {localStorage.getItem("honey_user") ? (
          <Link
            className="navbar-link"
            to=""
            onClick={() => {
              localStorage.removeItem("honey_user");
              navigate("/", { replace: true });
            }}
          >
            <button className="button">Logout</button>
          </Link>
        ) : (
          ""
        )}
        <Link to="/editprofile">
          <button className="button">Edit</button>
        </Link>
      </div>
      <div className="user-profile-info">
        <div className="user-username">{currentUserObj?.username}</div>
        <div className="user-name">{currentUserObj?.name}</div>
        {currentUserObj?.bio ? (
          <div className="user-profile-detailss">
            <span className="bold">Bio: </span>
            {currentUserObj?.bio}
          </div>
        ) : (
          ""
        )}
        {currentUserObj?.location ? (
          <div className="user-profile-details">
            <span className="bold">Lives in </span>
            {currentUserObj?.location}
          </div>
        ) : (
          ""
        )}
        {currentUserObj?.contact ? (
          <div className="user-profile-details">{currentUserObj?.contact}</div>
        ) : (
          ""
        )}
      </div>
      <div className="profiles-posts">Posts</div>

      <div className="profile-posts-sizer">
        {usersPosts.map((postObj) => {
          return (
            <Link key={postObj.id} to={`/posts/${postObj.id}`}>
              <Post post={postObj} key={postObj.id} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
