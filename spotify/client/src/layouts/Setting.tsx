import { CiSearch } from "react-icons/ci";

const Setting = () => {
  return (
    <div className="text-white w-[65%] mx-auto flex flex-col gap-6 mb-5">
      <div className="flex justify-between">
        <div className="font-bold text-2xl">Settings</div>
        <div>
          <CiSearch className="font-extrabold text-xl" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <span>Language</span>
          <span className="text-subtext text-sm">
            Choose language - Changes will be applied after restarting the app
          </span>
        </div>
        <div className="flex justify-end items-center">
          <select
            id="lang-select"
            className="bg-[#333] rounded text-sm font-normal pr-[32px] pl-[16px] h-[32px] py-1"
          >
            <option value="">English (English) </option>
            <option value="Hindi">Hindi</option>
            <option value="japanese">japanese</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <span>Display</span>
          <span className="text-subtext text-sm">
            Show the now-playing panel on click of play
          </span>
        </div>
        <div>
          <CiSearch />
        </div>
      </div>
    </div>
  );
};

export default Setting;
