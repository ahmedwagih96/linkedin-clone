import "./App.css";
import { lazy, Suspense } from "react";

// Custom useUser Hook
import useUser from "./hooks/useUser";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";

const Login = lazy(() => import("./Components/Login/Login"));
const Home = lazy(() => import("./Components/Home/Home"));

function App() {
  const [user] = useUser();
  return (
    <div className="app">
      <Suspense fallback={<LoadingSpinner />}>
        {user ? <Home /> : <Login />}
      </Suspense>
    </div>
  );
}

export default App;
