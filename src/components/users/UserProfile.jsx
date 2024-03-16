import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserById } from "../../services/userService";
import { getUserPostsById } from "../../services/postService";
import { Post } from "../posts/Post";

export const UserProfile = () => {
  const { userId } = useParams();
  const [usersPosts, setUsersPosts] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserById(userId).then((user) => setUser(user[0]));
  }, [userId]);
  useEffect(() => {
    getUserPostsById(userId).then((usersPosts) => setUsersPosts(usersPosts));
  }, [userId]);
  return (
    <>
      {/* back btn */}
      <div className="back-bar">
        <div></div>
        <div className="back-button">
          <Link to="/explore">
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
      {/* user profile card */}
      <div className="user-profile-info">
        <div className="user-username">{user.username}</div>
        <div className="user-name">{user.name}</div>
        <div className="user-profile-detailss">
          <span className="bold">Bio: </span>
          {user.bio}
        </div>
        <div className="user-profile-details">
          <span className="bold">Lives in </span>
          {user.location}
        </div>
        <div className="user-profile-details">{user.contact}</div>
      </div>
      {/* users posts */}
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
