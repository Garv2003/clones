import { LuClock3 } from "react-icons/lu";
import { LuDot } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { BsListUl } from "react-icons/bs";
import MusicBar from "../components/MusicBar";

const PlayList = () => {
  return (
    <div className="flex flex-col p-[16px]">
      <div className="flex gap-7">
        <div className="w-[232px]">
          <img
            src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg"
            alt="playlist"
            className="w-full overflow-hidden rounded-md shadow-lg"
          />
        </div>
        <div className="flex flex-col text-white justify-end">
          <div className="font-sm">Playlist</div>
          <div className="text-8xl font-black ">Top 50 - Global</div>
          <div className="pt-7 font-sm">
            Your daily update of the most played tracks right now - Global.
          </div>
          <div>
            <span>Spotify</span>
            <LuDot className="inline-block align-middle" />
            <span>67,255 likes</span>
            <LuDot className="inline-block align-middle" />
            <span>150 songs</span>{" "}
            <LuDot className="inline-block align-middle" />
            <span>8 hr 41 min</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-5 text-white">
        <div className="flex gap-4 items-center">
          <div className=" transition-bottom duration-[0.5s]">
            <span className="bg-green-600 hover:scale-105 hover:bg-green-500 shadow-md shadow-black/40 rounded-full flex items-center justify-center text-black h-12 w-12">
              <svg viewBox="0 0 24 24" className="h-8 w-8">
                <path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path>
              </svg>
            </span>
          </div>
          <div>
            <FaRegHeart className="size-8" />
          </div>
          <div>
            <PiDotsThreeOutlineFill className="size-8" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>List</span>
          <BsListUl className="size-8" />
        </div>
      </div>
      <div className="text-white w-[100%] py-[16px]">
        <table className="w-full h-auto">
          <thead className="sticky top-[65px]">
            <tr className="items-center">
              <th className="pl-1">#</th>
              <th className="text-left py-2">Title</th>
              <th>Album</th>
              <th>Data added</th>
              <th className="flex justify-end items-center gap-4 text-white text-sm mt-2 mr-8">
                <LuClock3 className="text-xl" />
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            <MusicBar hide={false} />
            <MusicBar hide={false} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayList;
