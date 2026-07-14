// import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";

const MusicBar = ({ hide }: { hide: boolean }) => {
  return (
    <>
      <tr className="group hover:bg-bghover">
        <td className="rounded-tl-lg rounded-bl-lg w-10">
          <div className="flex items-center justify-center">
            <span className="group-hover:block hidden justify-center">
              <FaPlay className="text-white size-3" />
            </span>
            <span className="hidden">
              <FaPause />
            </span>
            <span className="group-hover:hidden block">1</span>
          </div>
        </td>
        <td
          className="text-left py-1"
          style={{ maxWidth: "200px", overflow: "hidden" }}
        >
          <div className="flex gap-2 items-center">
            <img
              src="	https://i.scdn.co/image/ab67616d000048518863bc11d2aa12b54f5aeb36"
              className="inline-block align-middle rounded-md size-8"
              alt=""
            />
            <div className="flex flex-col">
              <span className="text-base">Blinding Lights</span>
              <span className="text-sm text-subtext group-hover:text-white">
                The Weekend
              </span>
            </div>
          </div>
        </td>
        <td
          className="text-subtext text-sm group-hover:text-white"
          style={{
            textAlign: hide ? "left" : "center",
          }}
        >
          After Hours
        </td>
        <td
          className="text-subtext text-sm"
          style={{
            display: hide ? "none" : "",
          }}
        >
          2 weeks ago
        </td>
        <td className="text-subtext text-sm pr-2 rounded-tr-lg rounded-br-lg">
          <div className="flex justify-end items-center gap-4">
            <span className="opacity-0 group-hover:opacity-100">
              <FaHeart />
            </span>
            <span>3:20</span>
            <span className="opacity-0 group-hover:opacity-100 text-white">
              <BsThreeDots />
            </span>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MusicBar;
