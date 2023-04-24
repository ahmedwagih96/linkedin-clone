import "./Sidebar.css";
import Recent from "./Recent";
import Stats from "./Stats";
import UserInfo from "./UserInfo";
function Sidebar() {

  return (
    <div className="sidebar">
      <UserInfo />
      <Stats />
      <Recent />
    </div>
  );
}

export default Sidebar;
