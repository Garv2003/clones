import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { TbMicrophone2 } from "react-icons/tb";
import { PiDesktopTower } from "react-icons/pi";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { BiVolumeLow } from "react-icons/bi";
import { BiVolumeFull } from "react-icons/bi";
import { BiVolume } from "react-icons/bi";
import { BiSolidPlaylist } from "react-icons/bi";
import { SlLoop } from "react-icons/sl";
import { TbArrowsShuffle } from "react-icons/tb";
import { CgMiniPlayer } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";

const Player = () => {
  return (
    <div className="bg-dark flex justify-center items-center relative h-[5.5em] pr-2 text-primary">
      <div className="absolute left-2 flex flex-row justify-start items-center gap-4 w-[25%]">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 shrink-0">
            <img
              src="https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/media/library-400/216_636967437355378335Your_Lie_Small_hq.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="title  hover:underline hover:text-white transition-all duration-200 cursor-pointer">
              Watashitachi wa Sou Yatte Ikite Iku Jinshu na no
            </p>
            <p className="artist hover:underline hover:text-white transition-all duration-200 text-secondarycol cursor-pointer">
              Masaru Yokoyama
            </p>
          </div>
        </div>
        <div className="flex gap-4 cursor-pointer">
          <FaHeart />
          {/* <CiHeart /> */}
        </div>
      </div>
      <div className="w-full flex justify-center flex-col items-center text-secondarycol">
        <div className="flex items-center gap-4">
          <TbArrowsShuffle className="text-xl  hover:text-white" />
          <MdSkipPrevious className="text-2xl  hover:text-white" />
          <button className="inline-block p-1 rounded-full bg-primary text-black hover:scale-105">
            <FaPlay className="size-6 pr-1 pl-1.5" />
            {/* <FaPause className="size-6 pr-1 pl-1" /> */}
          </button>
          <MdSkipNext className="text-2xl hover:text-white" />
          <SlLoop className="text-base hover:text-white" />
        </div>
        <div className="w-full flex items-center justify-center gap-4 text-xs">
          <span>0:49</span>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <span>3:15</span>
        </div>
      </div>
      <div className="absolute right-4 flex flex-row items-center gap-2">
        <AiOutlinePlaySquare className="rounded-full" />
        <TbMicrophone2 className="hover:text-white" />
        <BiSolidPlaylist className=" hover:text-white" />
        <PiDesktopTower className=" hover:text-white" />
        <div className="volume-bar group">
          {/* <BiVolume />
         <BiVolumeLow /> */}
          <BiVolumeFull className="group" />
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
        </div>
        <CgMiniPlayer />
      </div>
    </div>
  );
};

export default Player;
