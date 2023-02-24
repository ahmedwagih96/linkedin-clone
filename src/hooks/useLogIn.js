import { useCallback } from "react";
// Redux
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
// Custom Hook

function useLogIn() {
  const dispatch = useDispatch();
  const logIn = useCallback((user) => dispatch(login(user)), [dispatch]);

  const loginToApp = (userInfo) => {
    signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userAuth) => {
        logIn(userAuth.user);
      })
      .catch((error) => alert(error));
  };
  return loginToApp;
}

export default useLogIn;
