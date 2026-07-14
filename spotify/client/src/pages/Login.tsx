import { useEffect } from "react";
import { BsSpotify } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    document.title = "Login - Spotify";
  }, []);
  return (
    <div className="flex flex-col h-screen overflow-x-hidden bg-black">
      <nav className="p-[32px] pr-0 pl-[51px]">
        <div className="h-[36px] text-left flex items-center gap-2 text-white">
          <BsSpotify className="text-4xl " />
          <span className="text-xl font-bold">Spotify</span>
        </div>
      </nav>

      <header className="bgcolor flex justify-center p-[32px] basis-0 shrink grow-[3]">
        <div className="max-w-[734px] w-full">
          <div className="flex flex-col rounded-lg pt-[32px] pb-[32px] pl-0 pr-0 bg-black">
            <h1 className="text-center m-[48px] mr-0 ml-0 text-5xl font-bold text-white">
              Log in to Spotify
            </h1>
            <ul className="flex flex-col mt-0 mb-0 mr-auto ml-auto w-[324px] items-center p-0">
              <li className="text-white group">
                <button className="mb-[8px] font-bold text-base text-center relative justify-center items-center rounded-3xl border-2 border-gray-500 group-hover:border-white  p-2 pr-8 pl-8 inline-flex gap-2">
                  <img
                    src="https://accounts.scdn.co/sso/images/new-google-icon.72fd940a229bc94cf9484a3320b3dccb.svg"
                    alt=""
                    className="w-5 h-5"
                  />
                  <span className="m-auto">Continue with Google</span>
                </button>
              </li>
              <li className="text-white group">
                <button className="mb-[8px] font-bold text-base text-center relative justify-center items-center rounded-3xl border-2 border-gray-500 group-hover:border-white p-2 pr-6 pl-6 inline-flex gap-2">
                  <img
                    src="https://accounts.scdn.co/sso/images/new-facebook-icon.eae8e1b6256f7ccf01cf81913254e70b.svg"
                    alt=""
                    className="w-5 h-5"
                  />
                  <span className="m-auto">Continue with Facebook</span>
                </button>
              </li>
              <li className="text-white group">
                <button className="mb-[8px] font-bold text-base text-center relative justify-center items-center rounded-3xl border-2 border-gray-500 group-hover:border-white p-2 pr-7 pl-7 inline-flex gap-2">
                  <img
                    src="https://accounts.scdn.co/sso/images/new-apple-icon.e356139ea90852da2e60f1ff738f3cbb.svg"
                    alt=""
                    className="w-5 h-5 mr-3"
                  />
                  <span className="m-auto">Continue with Apple</span>
                </button>
              </li>
              <li className="text-white group">
                <button className="mb-[8px] font-bold text-base text-center relative justify-center items-center rounded-3xl border-2 border-gray-500 group-hover:border-white p-2 pr-5 pl-4 inline-flex gap-4">
                  <span className="m-auto">Continue with Phone Number</span>
                </button>
              </li>
            </ul>

            <hr className="mt-[32px] mb-[32px] mr-[100px] ml-[100px] border-zinc-800" />

            <div className="w-[324px] m-auto text-white">
              <div className="pb-4 w-full">
                <div className="items-center font-bold flex text-sm pb-2">
                  <label>Email or username</label>
                </div>
                <input
                  type="text"
                  className="text-sm ps-[24px] pe-[4px] rounded-[4px] bg-transparent text-ellipsis border border-gray w-full pb-3 pt-3"
                  placeholder="Email or username"
                />
              </div>

              <div className="pb-4 w-full">
                <div className="items-center font-bold flex text-sm pb-2">
                  <label>Password</label>
                </div>
                <input
                  type="text"
                  className="text-sm ps-[24px] pe-[4px] rounded-[4px] bg-transparent text-ellipsis border border-gray w-full pb-3 pt-3"
                  placeholder="Password"
                />
              </div>

              <div className="flex gap-2 justify-content items-center">
                <input type="checkbox" />
                <span className="text-xs font-medium">Remember me</span>
              </div>

              <div className="flex justify-center mt-[32px] mb-[32px] w-full">
                <button className="text-sm font-bold text-center w-full pt-3 pb-3 rounded-3xl text-black bg-[#1ED760]">
                  LOG IN
                </button>
              </div>

              <div className="text-center text-sm">
                <Link to="#" className="underline font-medium">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <hr className="mt-[32px] mb-[32px] mr-[100px] ml-[100px] border-zinc-800" />

            <div className="text-center">
              <span className="text-sm text-zinc-300">
                Don't have an account?
              </span>{" "}
              <Link
                to="/signup"
                className="underline text-white text-sm font-medium"
              >
                Sign up for Spotify
              </Link>
            </div>
          </div>
        </div>
      </header>

      <footer>
        <div className="p-[32px] text-center text-gray-600 text-xs">
          <p>
            This site is protected by reCAPTCHA and the Google{" "}
            <Link to="#" className="underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link to="#" className="underline">
              Terms of Service
            </Link>{" "}
            apply.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Login;
