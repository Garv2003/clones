import img from "../assets/img/contentfeed.jpeg";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const ContentFeed = () => {
  return (
    <div className="min-h-[60dvh] p-[16px]">
      <div className="flex flex-col">
        <div className="text-3xl text-white font-bold">What's New</div>
        <div className="text-subtext text-sm">
          The Latest releases from artists , podcasts and shows you follow.
        </div>
        <div className="flex gap-2 mt-3 text-white text-sm">
          <button className="px-2 py-1 rounded-full bg-[#FFFFFF12] hover:bg-iconbtn">
            Music
          </button>
          <button className="px-2 py-1 rounded-full bg-[#FFFFFF12] hover:bg-iconbtn">
            Podcast & Shows
          </button>
        </div>
      </div>
      {/* <div className="flex flex-col text-white justify-center items-center mt-[120px] gap-4">
        <h2 className="text-3xl font-bold">We don't have any updates for you yet</h2>
        <span>
          When there's news, we'll post it here. Follow your favorite artists
          and podcasts to stay updated on them too.
        </span>
      </div> */}
      <div className="flex flex-col">
        <span className="mr-2 text-white font-bold pb-6 mt-5 text-xl">New</span>
        <div className="flex gap-8 group hover:bg-bghover w-[600px] h-[200px] rounded-lg p-3">
          <div className="relative w-32 h-32">
            <img src={img} alt="" className="w-full h-full" />
          </div>
          <div className="text-white">
            <span className="text-white font-bold">
              <Link to="#">Rasigaa Rasigaa - Trap Mix</Link>
            </span>
            <span>
              <span className="flex gap-2 text-subtext">
                <Link to="#">Rithick J</Link>
                <Link to="#">Rithick J</Link>
              </span>
            </span>
            <div>
              <span className="mr-2">Single</span>
              {` • `}
              <span className="ml-2">2021</span>
            </div>
            <div className="flex justify-between mt-10">
              <div className="flex gap-4 mt-3">
                <div>
                  <FaHeart className="text-red-500 text-xl cursor-pointer" />
                </div>
                <div>
                  <BsThreeDots className="text-white text-xl hidden group-hover:block cursor-pointer" />
                </div>
              </div>
              <span className="rounded-full bg-white size-10 relative hover:scale-110 cursor-pointer">
                <FaPlay className="text-black text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pl-0.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentFeed;
