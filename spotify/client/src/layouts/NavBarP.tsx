import { FaSpotify } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBarP = () => {
  return (
    <div className="max-w-[1050px] m-auto">
      <div className="flex justify-between min-h-[80px] items-center">
        <Link to="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <FaSpotify className="text-4xl" />
            <span className="text-2xl font-bold">Spotify</span>
          </div>
        </Link>
        <div className="flex gap-8 items-center">
          <div className="flex gap-8 border-r-2 pr-8">
            <span className="text-base font-semibold cursor-pointer hover:text-green-400">
              Premium
            </span>
            <span className="text-base font-semibold cursor-pointer hover:text-green-400">
              Help
            </span>
            <span className="text-base font-semibold cursor-pointer hover:text-green-400">
              Download
            </span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-green-400">
            <CgProfile className="text-3xl" />
            <span className="text-base font-bold">Profile</span>
            <FaChevronDown className="text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarP;
