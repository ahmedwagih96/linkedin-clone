// Custom Hook
// Firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

// Custom Hook
import useLogin from "./useLogIn";

function useSignUp() {
  const loginToApp = useLogin();
  const register = (userInfo) => {
    createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: userInfo.name,
          photoURL: userInfo.profileURL,
        }).then(() => {
          loginToApp(userAuth.user);
        });
      })
      .catch((error) => {
        return alert(error);
      });
  };
  return [register];
}

export default useSignUp;
