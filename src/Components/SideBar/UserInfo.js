import { Avatar } from "@mui/material";
import useUserStore from "../../hooks/useUserStore";
function UserInfo() {
  const {user} = useUserStore();
  return (
    <div className="sidebar__userInfo">
      <img
        src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="cover background"
      />
      <Avatar src={user?.photoURL} className="sidebar__avatar">
        {user?.email[0]}
      </Avatar>
      <h2>{user?.displayName}</h2>
      <h4>{user?.email}</h4>
    </div>
  );
}

export default UserInfo;
