import NavBarP from "../layouts/NavBarP";
import FooterP from "../layouts/FooterP";
import { FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { Profile, ProfileType } from "../constants/constant";
import { MdOutlineEdit } from "react-icons/md";
import { FiRotateCw } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { AiOutlineTag } from "react-icons/ai";
import { CiCreditCard1 } from "react-icons/ci";
import { FaHistory } from "react-icons/fa";
import { RiQuestionLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdOutlineGridView } from "react-icons/md";
import { HiOutlineBell } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoArrowForwardOutline } from "react-icons/io5";

const iconComponents = {
  FaSpotify,
  MdOutlineEdit,
  FiRotateCw,
  FiHome,
  AiOutlineTag,
  CiCreditCard1,
  FaHistory,
  RiQuestionLine,
  MdOutlineRemoveRedEye,
  IoLockClosedOutline,
  MdOutlineGridView,
  HiOutlineBell,
  RxHamburgerMenu,
  IoArrowForwardOutline,
};

type IconProps = {
  icon: keyof typeof iconComponents;
};

const Icon = ({ icon }: IconProps) => {
  const IconComponent = iconComponents[icon];
  return <IconComponent className="text-xl" />;
};
const Account = () => {
  return (
    <div className=" bg-midnight text-white">
      <NavBarP />
      <div className="text-subtext max-w-[1050px] mx-auto">
        <div className="min-h-64 w-[70%] mx-auto mb-6 rounded-md flex">
          <div className="bg-bglight rounded-lg p-3 w-[70%] h-auto flex flex-col justify-between hover:bg-[#1a1a1a]">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <div className="text-sm font-semibold text-white">
                  Your Plan
                </div>
                <div className="text-3xl font-bold">Spotify Free</div>
              </div>
              <FaSpotify className="text-3xl" />
            </div>
            <div className="flex justify-end">
              <button className="px-3 py-1 border border-gray-500 hover:border-white text-white text-sm rounded-3xl">
                Explore plans
              </button>
            </div>
          </div>
          <div
            className="w-[30%] h-auto rounded-lg p-3 ml-3 flex justify-center items-center transition-all duration-110 cursor-pointer"
            style={{
              background:
                "linear-gradient(219.47deg, rgb(59, 58, 123) 6.36%, rgb(122, 22, 98) 91.17%)",
            }}
          >
            <div className="flex flex-col items-center justify-center gap-2 text-white">
              <IoDiamondOutline className="text-2xl" />
              <div className="text-base font-bold">Join Premium</div>
            </div>
          </div>
        </div>
        {Profile.map((item: ProfileType, index: number) => (
          <div
            className="bg-bglight w-[70%] mx-auto rounded-md pb-3 mb-6 flex flex-col"
            key={index}
          >
            <h1 className="p-3 text-base font-bold text-white">{item.title}</h1>
            {item.list.map((list) => (
              <div className="w-full flex justify-between items-center p-3 hover:bg-[#1a1a1a] rounded-md transition-all duration-110">
                <div className="flex items-center gap-3">
                  <div className="size-8 flex justify-center items-center bg-bgicon rounded">
                    {Icon({ icon: list.icon as keyof typeof iconComponents })}
                  </div>
                  <div className="text-white">{list.name}</div>
                </div>
                <div>
                  <IoIosArrowForward />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <FooterP />
    </div>
  );
};

export default Account;
