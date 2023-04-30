import "./App.css";
import { lazy, Suspense, useEffect } from "react";
// Firebase
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
// Custom Hooks
import useUserStore from "./hooks/useUserStore";
import useErrorStore from "./hooks/useErrorStore";
// Components
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
import Error from "./Components/Error";
// React Router
import { Route, Routes, useNavigate } from "react-router-dom";
// Pages
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  const { error } = useErrorStore();
  const { logIn, logOut } = useUserStore();
  const navigate = useNavigate();
  useEffect(() => {
    // Check if user is logged in / out of the app
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // if logged in, add user to global state and navigate to homepage
        logIn(userAuth);
        navigate("/");
      } else {
        // if logged out, set user as null and navigate to login page
        logOut();
        navigate("/login");
      }
    });
  }, [logIn, logOut, navigate]);
  return (
    <div className="app">
      {/* ERROR MODAL */}
      {error.message ? <Error /> : null}
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
