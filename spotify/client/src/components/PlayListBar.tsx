import { Link } from "react-router-dom";

const PlayListBar = () => {
  return (
    <>
      <Link
        to="/playlist/1"
        className="playlist-item flex group relative text-white transition-all duration-300 overflow-hidden items-center gap-2 rounded-md shadow-lg hover:shadow-xl outline-none bg-[rgba(255,255,255,0.14)] hover:bg-[rgba(255,255,255,0.22)] focus:bg-zinc-500/50"
      >
        <div className="h-14 w-12">
          <img
            src="https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776174/spotify-astro/playlist_1_yci5uf.jpg"
            alt="Electronic Party"
            className="object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
          ></img>
        </div>
        <div className="font-semibold block">Electronic Party</div>
        <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-green-500 hover:scale-105 shadow-md shadow-black/40 rounded-full flex items-center justify-center text-black h-10 w-10">
            <svg
              viewBox="0 0 24 24"
              className="h-10 w-10"
              astro-icon="mdi:play"
            >
              <path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </>
  );
};

export default PlayListBar;
