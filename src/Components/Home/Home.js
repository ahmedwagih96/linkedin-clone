// Components
import Feed from "../Feed/Feed";
import Header from "../Header/Header";
import SideBar from "../SideBar/Sidebar";
import Widgets from "../Widgets/Widgets";
import Container from "../Container/Container";

function Home() {
  return (
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
  );
}

export default Home;
