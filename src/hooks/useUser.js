import { useEffect, useCallback } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "../features/userSlice";
// Firebase
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
// React Router
import {useNavigate } from 'react-router-dom'
const useUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const logIn = useCallback((user) => dispatch(login(user)), [dispatch]);
  const logOut = useCallback(() => dispatch(logout()), [dispatch]);
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        logIn(userAuth);
        navigate("/")
      } else {
        logOut();
        navigate("/login")
      }
    });

  }, [dispatch, logIn, logOut, navigate]);

  return [user];
};

export default useUser;
