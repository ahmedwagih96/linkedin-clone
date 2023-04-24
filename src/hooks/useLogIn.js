// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
// custom hooks
import useErrorStore from "./useErrorStore";
import useUserStore from "./useUserStore";
// React Router
import { useNavigate } from "react-router-dom";
function useLogIn() {
  const navigate = useNavigate();
  const { newError } = useErrorStore();
  const { logIn } = useUserStore();

  const loginToApp = (userInfo) => {
    signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userAuth) => {
        logIn(userAuth.user);
        navigate("/");
      })
      .catch((error) => {
        newError(error);
        return;
      });
  };
  return loginToApp;
}

export default useLogIn;
