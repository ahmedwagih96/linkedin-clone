import "./Header.css";
// Material UI Icons
import {
  SupervisorAccount,
  Home,
  Search,
  BusinessCenter,
  Chat,
  Notifications,
} from "@mui/icons-material";
// Images
import LinkedIn from "../../images/linkedin-logo.png";
// Components
import Container from "../Container/Container";
import HeaderOption from "../HeaderOption/HeaderOption";
// Redux
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
// Firebase
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="header">
      <Container>
        <div className="header__left">
          <img src={LinkedIn} alt="LinkedIn Icon"></img>
          <div className="header__search">
            <Search />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="header__right">
          <HeaderOption Icon={Home} title="Home" />
          <HeaderOption Icon={SupervisorAccount} title="My Network" />
          <HeaderOption Icon={BusinessCenter} title="Jobs" />
          <HeaderOption Icon={Chat} title="Messaging" />
          <HeaderOption Icon={Notifications} title="Notifications" />
          <HeaderOption avatar={true} title="me" onClick={logoutOfApp} />
        </div>
      </Container>
    </div>
  );
}

export default Header;
