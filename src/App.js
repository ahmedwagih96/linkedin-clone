import "./App.css";
import { lazy, Suspense, useEffect } from "react";
// Custom Hooks
import useUser from "./hooks/useUser";
import useError from "./hooks/useError";
// Components
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
import Error from "./Components/Error";
// React Router
import { Route, Routes,  useNavigate } from 'react-router-dom'
// Pages
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  const { error } = useError();
  const navigate = useNavigate()
  const [user] = useUser();
  useEffect(()=>{
    console.log(user);
    if(!user) {
      navigate("/login")
    }
  },[user, navigate])
  return (
    <div className="app">
      {error.message ? <Error /> : null}
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path = '/login' element={<Login/>}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
