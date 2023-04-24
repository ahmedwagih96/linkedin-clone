// Material UI
import { Avatar } from "@mui/material";
// Custom Hook
import useUserStore from "../../hooks/useUserStore";

function HeaderOption({ Icon, title, avatar, onClick }) {
  const {user} = useUserStore();
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
