import { Link } from "react-router-dom";
import { BsPinAngleFill } from "react-icons/bs";


const PlayBar = () => {
  return (
    <>
      <li>
        <Link
          to="/collection/tracks"
          className="playlist-item flex relative py-2 pl-1.5 text-white transition-all duration-300 hover:bg-[rgba(255,255,255,0.04)] overflow-hidden items-center gap-2 rounded-md outline-none"
        >
          <div className="h-10 w-10">
            <img
              src="https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776174/spotify-astro/playlist_1_yci5uf.jpg"
              alt="liked songs"
              className="object-cover h-full w-full"
            ></img>
          </div>
          <div className="flex flex-col">
            <span className="">Liked Songs</span>
            <div className="flex gap-2 items-center">
              {" "}
              <BsPinAngleFill className="text-green-600" />
              <span className="text-sm text-subtext">Playlist . 1 song</span>
            </div>
          </div>
        </Link>
      </li>
      <li>
        <Link
          to="/playlist/1"
          className="playlist-item flex py-2 pl-1.5 relative text-white transition-all duration-300 overflow-hidden items-center gap-2 rounded-md hover:bg-[rgba(255,255,255,0.04)] outline-none"
        >
          <div className="h-10 w-10">
            <img
              src="https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776174/spotify-astro/playlist_1_yci5uf.jpg"
              alt="Electronic Party"
              className="object-cover h-full w-full"
            ></img>
          </div>
          <div className="flex flex-col">
            <span className="">Your Top Songs 2023</span>
            <span className="text-sm text-subtext">Playlist . Spotify</span>
          </div>
        </Link>
      </li>
    </>
  );
};

export default PlayBar;
