import CardList from "./CardList";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import MusicBar from "../components/MusicBar";

const Profile = () => {
  return (
    <div className="w-full">
      <div className="bg-[rgb(83,83,83)] w-full p-[32px] shadow-sm flex gap-10">
        <div className="size-[232px] flex justify-center items-center rounded-full bg-[#282828] group cursor-pointer transition-all duration-300 ease-in-out drop-shadow-xl">
          <IoPersonOutline className="text-subtext size-20 group-hover:hidden" />
          <div className="justify-center items-center hidden flex-col group-hover:flex text-white">
            <MdOutlineEdit className="size-20" />
            <span>Choose Photo</span>
          </div>
        </div>
        <div className="mt-10 text-white flex flex-col leading-[0px]">
          <span className="font-semibold">Profile</span>
          <span className="text-8xl font-bold">Garv</span>
          <div className="pt-3">
            <span>3 Public Playlists </span>
            {"\u00A0"}
            <span>•</span>
            {"\u00A0"}
            <span>0 Following</span>
          </div>
        </div>
      </div>
      {/* <div className="w-full text-white">
        <div>
          <span>Top tracks this month</span>
          <span>Only visible to you</span>
        </div>
        <div>Show all</div>
      </div> */}
      <div className="mt-5 p-3">
        <table className="w-full text-white">
          <tbody>
            <MusicBar hide={false} />
            <MusicBar hide={false} />
          </tbody>
        </table>
      </div>
      <div>
        <CardList />
        <CardList />
      </div>
    </div>
  );
};

export default Profile;
