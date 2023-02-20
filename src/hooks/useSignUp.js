// Custom Hook
import useInput from "./useInput";
// Firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

// Redux
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

function useSignUp() {
  const [userInfo, updateUserInfo] = useInput();
  const dispatch = useDispatch();
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: userInfo.name,
          photoURL: userInfo.profileURL,
        }).then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              photoURL: userAuth.user.photoURL,
            })
          );
        });
      })
      .catch((error) => {
        return alert(error);
      });
  };
  return [register, userInfo, updateUserInfo];
}

export default useSignUp;
