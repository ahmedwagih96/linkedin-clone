import "./App.css";
import { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser, login } from "./features/userSlice";
// Components
import Feed from "./Components/Feed/Feed";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/Sidebar";
import Login from "./Components/Login/Login";
import Widgets from "./Components/Widgets/Widgets";
import Container from "./Components/Container/Container";
// Firebase
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
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
  }, []);
  return (
    <div className="app">
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <Container>
              <div className="app__body">
                <SideBar />
                <Feed />
                <Widgets />
              </div>
            </Container>
          </>
        )}
    </div>
  );
}

export default App;
