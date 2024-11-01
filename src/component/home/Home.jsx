import LeftSideBar from "./LeftSideBar";
import Main from "./Main";
import Messages  from "./Messages";




function Home() {
  return (
    <div className="container page-layout">
      <LeftSideBar />
      <Main />
      <Messages/>
    </div>
  );
}
export default Home;
