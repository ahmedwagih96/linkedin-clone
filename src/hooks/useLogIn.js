import { useCallback } from "react";
// Redux
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
// custom error hook
import useError from "./useError";
// React Router
import { useNavigate } from 'react-router-dom'
function useLogIn() {
  const navigate = useNavigate()
  const { newError } = useError();
  const dispatch = useDispatch();
  const logIn = useCallback((user) => dispatch(login(user)), [dispatch]);

  const loginToApp = (userInfo) => {
    signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userAuth) => {
        logIn(userAuth.user);
        navigate("/")
      })
      .catch((error) => {
        newError(error);
        return;
      });
  };
  return loginToApp;
}

export default useLogIn;
