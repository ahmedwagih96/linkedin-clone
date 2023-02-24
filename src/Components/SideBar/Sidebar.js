import "./Sidebar.css";
import { Avatar } from "@mui/material";
import useUser from "../../hooks/useUser";
function Sidebar() {
  const [user] = useUser();

  const renderRecentItems = () => {
    return ["reactjs", "programming", "software engineering", "remotework"].map(
      (topic) => (
        <div key={topic} className="sidebar__recentItems">
          <span className="sidebar__hash">#</span>
          <p>{topic}</p>
        </div>
      )
    );
  };
  return (
    <div className="sidebar">
      {/* TOP */}
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"></img>
        <Avatar src={user.photoURL} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      {/* STATS */}
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,533</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2,043</p>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="sidebar__bottom">
        <p style={{ fontWeight: "bold" }}>Recent</p>
        {renderRecentItems()}
      </div>
    </div>
  );
}

export default Sidebar;
