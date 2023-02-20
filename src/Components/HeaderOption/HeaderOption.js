import "./HeaderOption.css";
// Material UI
import { Avatar } from "@mui/material";
// Custom Hook
import useUser from "../../hooks/useUser";

function HeaderOption({ Icon, title, avatar, onClick }) {
  const {user} = useUser()
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
