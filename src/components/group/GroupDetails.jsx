import { Link, useParams } from "react-router-dom";
import { getGroupById } from "../../services/groupsService";
import { useEffect, useState } from "react";

export const GroupDetails = () => {
  const { groupId } = useParams();
  const [group, setGroup] = useState({});
  useEffect(() => {
    getGroupById(groupId).then((group) => setGroup(group));
  }, [groupId]);
  return (
    <>
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
      <div className="group-details-card">
        <div className="group-name">{group.name}</div>
        <div className="group-description">{group.description}</div>
        <div className="group-members">#{group.num}</div>
      </div>
    </>
  );
};
