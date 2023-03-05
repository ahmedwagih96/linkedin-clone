import { useCallback } from "react";
// Redux
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
// Firebase
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
// custom error hook
import useError from "./useError";

function useLogout() {
  const { newError } = useError();
  const dispatch = useDispatch();
  const logOut = useCallback(() => dispatch(logout()), [dispatch]);
  const logoutOfApp = () => {
    signOut(auth)
      .then(() => {
        logOut();
      })
      .catch((error) => {
        newError(error);
        return;
      });
  };
  return logoutOfApp;
}

export default useLogout;
