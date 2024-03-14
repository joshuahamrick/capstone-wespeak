import { useEffect, useState } from "react";
import { getAllGroups } from "../../services/groupsService";

export const FilterBar = ({ setSearchTerm, setGroup, setType }) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    getAllGroups().then((allGroups) => setGroups(allGroups));
  }, []);

  const handleGroupChange = (event) => {
    setGroup(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div className="filter-bar-container">
      <div></div>
      <div></div>
      <div className="filter-bar">
        {/* input bar */}
        <input
          type="text"
          placeholder="Search"
          className="filter-option"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />

        {/* Groups Drop Down */}
        <select className="filter-option" onChange={handleGroupChange}>
          <option value="">Groups</option>
          {groups.map((group) => (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          ))}
        </select>

        {/* Encrypted drop down */}
        <select className="filter-option" onChange={handleTypeChange}>
          <option value="">Type</option>
          <option value="true">Encrypted</option>
          <option value="false">Non-Encrypted</option>
        </select>
      </div>
    </div>
  );
};
