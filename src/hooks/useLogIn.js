// Custom Hook
import useInput from "./useInput";
// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

// Redux
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

function useSignUp() {
  const [userInfo, updateUserInfo] = useInput();
  const dispatch = useDispatch();
  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  return [loginToApp, userInfo, updateUserInfo]
}

export default useSignUp;
