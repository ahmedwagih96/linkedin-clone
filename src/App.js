import "./App.css";
import { lazy, Suspense } from "react";
// Custom useUser Hook
import useUser from "./hooks/useUser";
// custom error hook
import useError from "./hooks/useError";
// Components
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
import Error from "./Components/Error/Error";

const Login = lazy(() => import("./Components/Login/Login"));
const Home = lazy(() => import("./Components/Home/Home"));

function App() {
  const { error } = useError();
  const [user] = useUser();
  return (
    <div className="app">
      {error.message ? <Error /> : null}
      <Suspense fallback={<LoadingSpinner />}>
        {user ? <Home /> : <Login />}
      </Suspense>
    </div>
  );
}

export default App;
