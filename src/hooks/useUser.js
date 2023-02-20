import { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser, login } from "../features/userSlice";
// Firebase
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return { user };
};

export default useUser;
