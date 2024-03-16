import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../components/home/Home";
import { Wespeak } from "../components/Wespeak/Wespeak";
import { NavBar } from "../components/nav/NavBar";
import { Explore } from "../components/explore/Explore";
import { Likes } from "../components/likes/Likes";
import { Profile } from "../components/profile/Profile";
import { PostDetails } from "../components/posts/PostDetails";
import { GroupDetails } from "../components/group/GroupDetails";
import { UserProfile } from "../components/users/UserProfile";

export const UserViews = () => {
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
        <Route index element={<Home />} />
        <Route path="posts/:postId" element={<PostDetails />} />
        <Route path="groups/:groupId" element={<GroupDetails />} />
        <Route path="users/:userId" element={<UserProfile />} />

        <Route path="explore" element={<Explore />} />
        <Route path="likes" element={<Likes />} />
        <Route path="profile" element={<Profile />} />
        <Route path="wespeak" element={<Wespeak />} />
      </Route>
    </Routes>
  );
};
