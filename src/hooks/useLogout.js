// Firebase
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
// custom hooks
import useErrorStore from "./useErrorStore";
import useUserStore from "./useUserStore";
// React Router
import { useNavigate } from "react-router-dom";
function useLogout() {
  const navigate = useNavigate();
  const { newError } = useErrorStore();
  const { logOut } = useUserStore();
  const logoutOfApp = () => {
    signOut(auth)
      .then(() => {
        logOut();
        navigate("/login");
      })
      .catch((error) => {
        newError(error);
        return;
      });
  };
  return logoutOfApp;
}

export default useLogout;
