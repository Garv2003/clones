import Player from "../components/Player";
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import MainSection from "../layouts/MainSection";
import Search from "../pages/Search";
import { Routes, Route } from "react-router-dom";
import PlayList from "../layouts/PlayList";
import Section from "../layouts/Section";
import Profile from "../layouts/Profile";
import Queue from "../layouts/Queue";
import ContentFeed from "./ContentFeed";
import RightNavBar from "../layouts/RightNavBar";
import Setting from "../layouts/Setting";

const Home = () => {
  return (
    <div className="relative flex-col items-stretch p-2 overflow-hidden h-screen">
      <div className="flex gap-2">
        <NavBar />
        <div className="rounded-lg bg-midnight flex-1 mx-auto">
          <div className="relative overflow-y-auto h-[89vh] rounded-lg">
            <RightNavBar />
            <Routes>
              <Route path="" element={<MainSection />} />
              <Route path="/search" element={<Search />} />
              <Route path="/playlist/:id" element={<PlayList />} />
              <Route path="/section/:id" element={<Section />} />
              <Route path="/user/:id" element={<Profile />} />
              <Route path="/queue" element={<Queue />} />
              <Route path="/content-feed" element={<ContentFeed />} />
              <Route path="/preferences" element={<Setting />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
      <Player />
    </div>
  );
};

export default Home;
