// Firebase
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
// Redux
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";

function useLogout() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => alert(error));
  };
  return logoutOfApp
}

export default useLogout;
