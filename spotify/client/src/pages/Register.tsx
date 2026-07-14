import { BsSpotify } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Register = () => {
  useEffect(() => {
    document.title = "Sign up - Spotify";
  }, []);

  return (
    <div className="absolute top-0 left-0 flex flex-col overflow-auto bg-midnight w-screen h-screen">
      <header className="p-[32px] w-screen text-white flex items-center gap-1">
        <span>
          <BsSpotify className="size-7" />
        </span>
        <div className="text-lg font-semibold">Spotify</div>
      </header>

      <section className="grow flex pl-[32px] pr-[32px]">
        <div className="w-full flex justify-center">
          <div className="w-[300px] md:h-auto sm:h-[324px]">
            <header className="mb-[40px]">
              <h1 className="text-4xl box-border font-bold text-white break-words">
                Sign up to start listening
              </h1>
            </header>
            <form>
              <div>
                <div className="block w-full">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-zinc-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@domain.com"
                    id="email"
                    className="w-full bg-transparent text-white text-sm font-medium rounded-md p-3 mt-1 mb-1 border-stone-500 border-2 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  />
                </div>
              </div>

              <Link to="#">
                <span className="text-xs underline text-[#1ED760] font-bold">
                  Use phone number instead
                </span>
              </Link>

              <button className="w-full bg-[#1ED760] rounded-full font-bold text-center text-base pt-2 pb-2 mt-4">
                Next
              </button>
            </form>

            <div>
              <div className="mt-[32px] mb-[25px] flex items-center">
                <hr className="flex-grow border-zinc-800" />
                <span className="text-xs text-zinc-300 mx-[16px]">OR</span>
                <hr className="flex-grow border-zinc-800" />
              </div>
            </div>
            <div>
              <ul className="flex flex-col mt-0 mb-0 mr-auto ml-auto items-center">
                <li className="text-white group w-full">
                  <button className="w-full mb-[8px] font-bold text-base text-center relative justify-center items-center rounded-3xl border-2 border-gray-500 group-hover:border-white  p-2 pr-8 pl-8 inline-flex gap-2">
                    <img
                      src="https://accounts.scdn.co/sso/images/new-google-icon.72fd940a229bc94cf9484a3320b3dccb.svg"
                      alt=""
                      className="w-5 h-5"
                    />
                    <span className="m-auto">Continue with Google</span>
                  </button>
                </li>
                <li className="text-white group w-full">
                  <button className="mb-[8px] w-full font-bold text-base text-center relative justify-center items-center rounded-3xl border-2 border-gray-500 group-hover:border-white p-2 pr-6 pl-6 inline-flex gap-2">
                    <img
                      src="https://accounts.scdn.co/sso/images/new-facebook-icon.eae8e1b6256f7ccf01cf81913254e70b.svg"
                      alt=""
                      className="w-5 h-5"
                    />
                    <span className="m-auto">Continue with Facebook</span>
                  </button>
                </li>
              </ul>
            </div>

            <hr className="mt-[32px] mb-[32px] border-zinc-800" />

            <div className="text-center">
              <span className="text-sm text-zinc-300">
                Don't have an account?
              </span>{" "}
              <Link
                to="/login"
                className="underline text-white text-sm font-medium"
              >
                Log in here
              </Link>
            </div>
          </div>
        </div>
      </section>
      <footer className="p-[24px] text-gray-100 mx-auto w-[324px]">
        <span className="text-center">
          <p className="font-medium text-xs">
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
        </span>
      </footer>
    </div>
  );
};

export default Register;
