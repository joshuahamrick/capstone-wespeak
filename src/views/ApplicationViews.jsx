import { useState, useEffect } from "react";
import { UserViews } from "./UserViews";

export const ApplicationViews = () => {
  const [currentUser, setCurrrentUser] = useState({});

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localHoneyUser);
    setCurrrentUser(honeyUserObject);
  }, []);

  return <UserViews />;
};
