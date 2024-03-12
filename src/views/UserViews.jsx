import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../components/home/Home";
import { Wespeak } from "../components/Wespeak/Wespeak";

export const UserViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {/* <NavBar/> */}
            <Outlet />
          </>
        }
      >
        <Route index element={<Wespeak />} />
      </Route>
    </Routes>
  );
};
