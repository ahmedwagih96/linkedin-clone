import "./App.css";

// Components
import Feed from "./Components/Feed/Feed";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/Sidebar";
import Login from "./Components/Login/Login";
import Widgets from "./Components/Widgets/Widgets";
import Container from "./Components/Container/Container";

// Custom useUser Hook
import useUser from "./hooks/useUser";

function App() {
  const { user } = useUser();
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
