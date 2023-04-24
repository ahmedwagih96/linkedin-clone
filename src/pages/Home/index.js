// Components
import Feed from "../../Components/Feed";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar";
import Widgets from "../../Components/Widgets";
import Container from "../../Components/Container";

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
