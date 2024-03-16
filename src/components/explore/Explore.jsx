import { useEffect, useState } from "react";
import { ExploreFilterBar } from "../filter/ExploreFilterBar";
import { Groups } from "../group/Groups";
import "./Explore.css";
import { getAllGroups } from "../../services/groupsService";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../services/userService";
import { Users } from "../users/Users";
export const Explore = () => {
  const [groups, setGroups] = useState([]);
  const [users, setUsers] = useState([]);
  const [showGroups, setShowGroups] = useState(true);

  useEffect(() => {
    getAllGroups().then((groups) => setGroups(groups));
  }, []);

  useEffect(() => {
    getAllUsers().then((allUsers) => setUsers(allUsers));
  }, []);

  return (
    <div className="explore-page-container">
      <h1>Explore</h1>
      <ExploreFilterBar setShowGroups={setShowGroups} />
      {showGroups
        ? groups.map((group) => (
            <Link to={`/groups/${group.id}`} key={group.id}>
              <Groups group={group} key={group.id} />
            </Link>
          ))
        : users.map((user) => (
            <Link to={`/users/${user.id}`} key={user.id}>
              <Users user={user} key={user.id} />
            </Link>
          ))}
      {/* {groups.map((group) => {
        return (
          <Link to={`/groups/${group.id}`} key={group.id}>
            <Groups group={group} key={group.id} />
          </Link>
        );
      })}
      {users.map((user) => {
        return (
          <Link to={`/users/${user.id}`} key={user.id}>
            <Users user={user} key={user.id} />
          </Link> 
      ); })}*/}
    </div>
  );
};
