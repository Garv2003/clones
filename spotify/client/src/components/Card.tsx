import { Link } from "react-router-dom";
import image from "../assets/img/card-1.jpeg";

type CardProps = {
  ImageUrl: string;
  title: string;
  description: string;
};

const Card = ({ ImageUrl, title, description }: CardProps) => {
  return (
    <div className="p-[13px] group hover:bg-[rgba(255,255,255,0.08)] rounded-lg bg-[#181818] relative transition duration-300 w-auto">
      <div className="flex-col">
        <div className="mb-[16px] relative overflow-hidden min-w-[50px] w-auto max-w-[300px]">
          <img
            src={image}
            // src={ImageUrl}
            alt="Image"
            className="rounded-lg shadow-inner relative drop-shadow-2xl shadow-black"
          />
          <Link to="#">
            <div className="absolute right-2 bottom-[-48px] group-hover:bottom-[10px] transition-bottom duration-[0.5s]">
              <span className="bg-green-600 hover:scale-105 hover:bg-green-500 shadow-md shadow-black/40 rounded-full flex items-center justify-center text-black h-12 w-12">
                <svg viewBox="0 0 24 24" className="h-8 w-8">
                  <path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path>
                </svg>
              </span>
            </div>
          </Link>
        </div>
        <div className="text-white font-bold">
          <Link to="#">
            Release Radar
            {/* {title} */}
          </Link>
          <div className="text-subtext font-normal text-sm mt-2 truncate">
            Catch all the latest music from artists you follow, plus new singles
            picked for you. Updates every Friday.
            {/* {description} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
