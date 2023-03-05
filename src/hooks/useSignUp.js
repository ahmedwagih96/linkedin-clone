import { useCallback } from "react";
// Firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
// Redux
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
// custom error hook
import useError from "./useError";

function useSignUp() {
  const { newError } = useError();
  const dispatch = useDispatch();
  const logIn = useCallback((user) => dispatch(login(user)), [dispatch]);

  const register = (userInfo) => {
    createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: userInfo.name,
          photoURL: userInfo.profileURL,
        }).then(() => {
          logIn(userAuth.user);
        });
      })
      .catch((error) => {
        newError(error);
        return;
      });
  };
  return [register];
}

export default useSignUp;
