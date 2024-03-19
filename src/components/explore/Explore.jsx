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
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    getAllGroups().then((groups) => setGroups(groups));
  }, []);

  useEffect(() => {
    getAllUsers().then((allUsers) => setUsers(allUsers));
  }, []);

  useEffect(() => {
    setFilteredGroups(groups);
  }, [groups]);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  useEffect(() => {
    if (searchTerm) {
      const filteredBySearchTerm = users.filter((user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filteredBySearchTerm);
    } else {
      setFilteredUsers(users);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm) {
      const filteredBySearchTerm = groups.filter((group) =>
        group.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredGroups(filteredBySearchTerm);
    } else {
      setFilteredGroups(groups);
    }
  }, [searchTerm]);

  return (
    <div className="explore-page-container">
      <h1>Explore</h1>
      <ExploreFilterBar
        setShowGroups={setShowGroups}
        setSearchTerm={setSearchTerm}
      />
      {showGroups
        ? filteredGroups.map((group) => (
            <Link to={`/groups/${group.id}`} key={group.id}>
              <Groups group={group} key={group.id} />
            </Link>
          ))
        : filteredUsers.map((user) => (
            <Link to={`/users/${user.id}`} key={user.id}>
              <Users user={user} key={user.id} />
            </Link>
          ))}
    </div>
  );
};
