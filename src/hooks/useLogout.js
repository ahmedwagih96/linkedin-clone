import { useCallback } from "react";
// Redux
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";

// Firebase
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function useLogout() {
  const dispatch = useDispatch();
  const logOut = useCallback(() => dispatch(logout()), [dispatch]);
  const logoutOfApp = () => {
    signOut(auth)
      .then(() => {
        logOut();
      })
      .catch((error) => alert(error));
  };
  return logoutOfApp;
}

export default useLogout;
