import { Link } from "react-router-dom";
import Card from "../components/Card";

const CardList = () => {
  return (
    <div className="flex-col px-6 text-white mt-8">
      <div className="flex-col">
        <div className="flex justify-between mb-[20px]">
          <Link to="section/1" className="font-bold text-xl hover:underline">
            Made For Garv
          </Link>
          <Link to="section/1" className="hover:underline font-semibold">
            Show all
          </Link>
        </div>
        <div className="grid gap-5 grid-cols-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default CardList;
