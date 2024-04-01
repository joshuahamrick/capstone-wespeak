import { useState, useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar";
import { Home } from "../components/home/Home";
import { PostDetails } from "../components/posts/PostDetails";
import { GroupDetails } from "../components/group/GroupDetails";
import { UserProfile } from "../components/users/UserProfile";
import { Explore } from "../components/explore/Explore";
import { Profile } from "../components/profile/Profile";
import { Wespeak } from "../components/Wespeak/Wespeak";
import { EditProfile } from "../components/form/EditProfile";
import { NewPost } from "../components/form/NewPost";
import { EditPost } from "../components/form/EditPost";

export const ApplicationViews = () => {
  const [currentUser, setCurrrentUser] = useState({});

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localHoneyUser);
    setCurrrentUser(honeyUserObject);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Home currentUser={currentUser} />} />
        <Route
          path="posts/:postId"
          element={<PostDetails currentUser={currentUser} />}
        />
        <Route
          path="posts/edit/:postId"
          element={<EditPost currentUser={currentUser} />}
        />
        <Route path="groups/:groupId" element={<GroupDetails />} />
        <Route path="users/:userId" element={<UserProfile />} />

        <Route path="explore" element={<Explore currentUser={currentUser} />} />
        {/* <Route path="likes" element={<Likes />} /> */}
        <Route path="newpost" element={<NewPost currentUser={currentUser} />} />
        <Route path="profile" element={<Profile currentUser={currentUser} />} />
        <Route path="wespeak" element={<Wespeak />} />
        <Route
          path="editprofile"
          element={<EditProfile currentUser={currentUser} />}
        />
      </Route>
    </Routes>
  );
};
