import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-subtext">
      <div className="w-full p-[16px] flex-col">
        <div className="w-full p-[16px] flex justify-between">
          <div className="flex gap-20 flex-wrap">
            <ul className="flex flex-col gap-2">
              <li className="text-white font-medium">Company</li>
              <li className="cursor-pointer hover:text-white hover:underline">
                About{" "}
              </li>
              <li className="cursor-pointer hover:text-white hover:underline">
                Jobs
              </li>
              <li className="cursor-pointer hover:text-white hover:underline">
                {" "}
                For the Record
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="text-white font-medium">Communities</li>
              <li className="cursor-pointer hover:text-white hover:underline">
                For Artists
              </li>
              <li className="cursor-pointer hover:text-white hover:underline">
                Developers
              </li>
              <li className="cursor-pointer hover:text-white hover:underline">
                Advertising
              </li>
              <li className="cursor-pointer hover:text-white hover:underline">
                Investors
              </li>
              <li className="cursor-pointer hover:text-white hover:underline">
                Vendors
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="cursor-pointer text-white font-medium">Useful links</li>
              <li className="cursor-pointer hover:text-white hover:underline">
                Support
              </li>
              <li className="cursor-pointer hover:text-white hover:underline">
                Free Mobile App
              </li>
            </ul>
          </div>
          <div className="flex gap-2">
            <div className="bg-iconbtn w-10 h-10 rounded-full items-center justify-center inline-flex hover:bg-zinc-600">
              {" "}
              <FaInstagram />
            </div>
            <div className="bg-iconbtn w-10 h-10 rounded-full items-center justify-center inline-flex hover:bg-zinc-600">
              {" "}
              <FaTwitter />
            </div>
            <div className="bg-iconbtn w-10 h-10 rounded-full items-center justify-center inline-flex hover:bg-zinc-600">
              {" "}
              <FaFacebook />
            </div>
          </div>
        </div>
        <hr className="mt-4 mb-4 font-xs" />
        <div className="pt-[16px] w-full flex justify-between h-[150px]">
          <ul className="flex gap-4 flex-wrap">
            <li className="cursor-pointer hover:text-white">Legal</li>
            <li className="cursor-pointer hover:text-white">Privacy Center</li>
            <li className="cursor-pointer hover:text-white">Privacy Policy</li>
            <li className="cursor-pointer hover:text-white">Cookies</li>
            <li className="cursor-pointer hover:text-white">About Ads</li>
            <li className="cursor-pointer hover:text-white">Accessibility</li>
          </ul>
          <div>© 2023 Spotify AB</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
