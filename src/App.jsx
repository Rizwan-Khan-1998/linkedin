import Header from "./component/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Jobs from "./component/jobs/Jobs";
import Network from "./component/network/Network";
import Messaging from "./component/messaging/Messages";
import Notification from "./component/notification/Notification";



export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="network" element={<Network />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="messages" element={<Messaging />} />
        <Route path="notification" element={<Notification />} />
      </Routes>
    </>
  );
}
