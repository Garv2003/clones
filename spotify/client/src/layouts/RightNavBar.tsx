import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegBell, FaSearch } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const RightNavBar = () => {
  const location = useLocation();

  function goPreviousPage() {
    window.history.back();
  }

  function goNextPage() {
    window.history.forward();
  }

  return (
    <div className="sticky top-0 z-50 py-4 px-8 flex justify-between bg-midnight">
      <div className="flex gap-3">
        <div className="flex text-zinc-100 justify-center items-center gap-1">
          <button
            className={`bg-btncolor w-8 h-8 rounded-full items-center justify-center inline-flex ${
              window.history.state.idx === 0
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={goPreviousPage}
            disabled={window.history.state.idx === 0}
          >
            <IoChevronBackOutline />
          </button>
          <button
            className={`bg-btncolor w-8 h-8 rounded-full items-center justify-center inline-flex ${
              window.history.state.idx === window.history.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={goNextPage}
            disabled={window.history.state.idx === window.history.length - 1}
          >
            <IoChevronForward />
          </button>
        </div>
        {location.pathname === "/search" ? (
          <div className=" relative flex items-center ">
            <FaSearch className="absolute left-4 text-zinc-100" />
            <input
              className="bg-[#242424] text-zinc-100 w-[350px] h-8 rounded-full px-10 py-5 hover:bg-[#303030] transition duration-200 ease-in-out text-xs"
              type="text"
              placeholder="what do you want to listen to?"
            />
          </div>
        ) : null}
      </div>
      <div className="flex gap-6">
        {/* {location.pathname === "/search" ? null : (
          <button className="px-3 py-2 bg-white text-black font-bold rounded-2xl hover:scale-105">
            Explore Premium
          </button>
        )} */}
        <NavLink to="/signup">
          <button className="font-bold text-zinc-300 hover:text-zinc-100 px-4 py-1">
            Sign up
          </button>
        </NavLink>
        <NavLink to="/login">
          <button className="px-3 py-1 text-center text-black bg-white rounded-3xl hover:scale-105 font-bold transition-all duration-100">
            Login in
          </button>
        </NavLink>
        {/* <NavLink to="/content-feed">
          <button className="bg-btncolor w-8 h-8 rounded-full items-center justify-center inline-flex text-zinc-400 hover:text-zinc-100 hover:scale-105">
            <FaRegBell />
          </button>
        </NavLink>
        <button className="bg-btncolor w-8 h-8 rounded-full items-center justify-center inline-flex text-zinc-400 hover:text-zinc-100 hover:scale-105">
          <IoPersonOutline />
        </button> */}
      </div>
    </div>
  );
};

export default RightNavBar;
