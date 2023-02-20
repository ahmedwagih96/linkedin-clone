import "./HeaderOption.css";
// Material UI
import { Avatar } from "@mui/material";
// Redux
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function HeaderOption({ Icon, title, avatar, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoURL}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
