import { useCallback } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "../features/userSlice";
const useUserStore = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const logIn = useCallback((user) => dispatch(login(user)), [dispatch]);
  const logOut = useCallback(() => dispatch(logout()), [dispatch]);

  return { user, logIn, logOut };
};

export default useUserStore;
