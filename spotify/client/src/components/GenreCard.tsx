import { Link } from "react-router-dom";

export type GenreCardProps = {
  title: string;
  path: string;
  image: string;
  background: string;
};

const GenreCard = ({ title, path, image, background }:GenreCardProps) => {
  return (
    <>
      <Link
        to={path}
        style={{ background: background }}
        className="rounded-lg w-full shadow-lg shadow-black overflow-hidden"
      >
        {" "}
        <div className="p-[10px] relative transition duration-300 h-[180px] ">
          <span className="font-bold text-white text-2xl">{title}</span>
          <img
            loading="lazy"
            className="rotate-[25deg] rounded-lg object-cover absolute top-1/2 left-1/2 transform translate-x-[18%] translate-y-[-2%] w-[100px]"
            src={image}
            alt=""
          />
        </div>
      </Link>
    </>
  );
};

export default GenreCard;
