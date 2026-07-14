import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";
import { FaList } from "react-icons/fa";
import PlayBar from "../components/PlayBar";

const NavBar = () => {
  return (
    <div className=" relative w-[330px] rounded-lg flex-col hidden lg:flex h-[89vh] overflow-hidden">
      <div className="flex flex-col flex-1 gap-2  h-full min-h-0">
        <div className="bg-midnight rounded-lg">
          <ul>
            <li>
              <NavLink
                to="/"
                className="px-5 py-3.5 text-zinc-300 font-semibold gap-1 hover:text-zinc-100 transition-all duration-200 flex items-center"
              >
                <FaSpotify className="font-bold text-2xl" />
                <span className="text-xl">Spotify</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="px-5 py-3.5 text-zinc-400 font-semibold gap-4 hover:text-zinc-100 transition-all duration-200 flex items-center"
                // style={({isActive}:Props) => {
                //   return {
                //     color: isActive ?  : "",
                //   };
                // }}
              >
                <GoHomeFill className="font-bold text-2xl" />
                <span className="text-xl">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/search"
                className="flex items-center px-5 py-3.5 text-zinc-400 text-lg font-semibold gap-4 hover:text-zinc-100 transition-all duration-200"
              >
                <FaSearch className="font-bold text-2xl" />
                <span className="text-xl">Search</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="bg-midnight rounded-lg flex-1 px-5 gap-4  overflow-y-auto h-screen scrollbar-hidden">
          <ul className="sticky top-0">
            <li>
              <div className="flex justify-between items-center py-3.5 text-zinc-300 text-lg font-semibold gap-4 hover:text-zinc-100 transition-all duration-200">
                <div className="flex items-center gap-3">
                  <VscLibrary />
                  <span>Your libray</span>
                </div>
                <FaPlus />
              </div>
            </li>
          </ul>
          <div className="text-zinc-400 flex justify-between ">
            {" "}
            <button className="w-8 h-8 rounded-full items-center justify-center inline-flex hover:bg-zinc-800">
              {" "}
              <FaSearch className="font-bold" />
            </button>
            <button className="flex items-center gap-2 hover:text-zinc-100">
              <span className="text-sm">Recents</span>
              <FaList />
            </button>
          </div>
          <ul className="flex-col flex-gap-10  relative"
          >
            <PlayBar />
            <PlayBar />
            <PlayBar />
            <PlayBar />
            <PlayBar />
            <PlayBar />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
