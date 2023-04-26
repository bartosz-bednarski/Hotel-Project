import { useState } from "react";
import logo from "../../../public/assets/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  const [listShown, setListShown] = useState(false);
  return (
    <>
      <div
        className={`lg:hidden box-border pr-6 pt-4 flex flex-col absolute right-0 top-0 z-30 items-end text-end text-white text-2xl ${
          listShown && "bg-aquaButton  w-64 border-gold border-l-2"
        } `}
      >
        <span
          className={`flex flex-row  w-60 pl-7 pb-2 ${
            listShown ? "justify-between" : "justify-end"
          } `}
        >
          <img
            src="/assets/logo.svg"
            className={`${listShown ? "w-8 block" : "hidden"}`}
          />
          <img
            src="/assets/bx-menu.svg"
            className="w-10 hover:cursor-pointer"
            onClick={() => setListShown(!listShown)}
          />
        </span>
        <ul className={`${listShown ? "pr-1 block" : "hidden"}`}>
          <li className="pb-2 ">
            <Link
              href="/"
              className={router.pathname == "/" ? "text-gold" : "text-white"}
            >
              Home
            </Link>
          </li>
          <li className="pb-2 ">Reservation</li>
          <li className="pb-2 ">Experiences</li>
        </ul>
        {/* <img src="/assets/logo.svg" className="w-20 h-20 " /> */}
        <ul className={`${listShown ? "pr-1 block" : "hidden"}`}>
          <li className="pb-2  ">Services</li>

          <li className="pb-2  ">
            <Link
              href="/rooms"
              className={
                router.pathname == "/rooms" ? "text-gold" : "text-white"
              }
            >
              Rooms
            </Link>
          </li>
          <li className="pb-2  ">Contact</li>
        </ul>
      </div>
      <div className="lg:flex desktop:gap-32 xl:text-xl gap-20 absolute z-30 text-white top-0 left-0 font-poppins py-9 text-base box-border hidden  flex-row justify-center w-97vw bg-transparent  items-center h-10vh  ">
        <ul className=" desktop:gap-28 xl:gap-20 gap-12 flex flex-row list-none  w-4/12 justify-end ">
          <li className="inline">
            <Link
              href="/"
              className={router.pathname == "/" ? "text-gold" : "text-white"}
            >
              Home
            </Link>
          </li>
          <li className="inline">Reservation</li>
          <li className="inline">Experiences</li>
        </ul>
        <img src="/assets/logo.svg" className="w-20 h-20 " />
        <ul className=" desktop:gap-28 xl:gap-20 gap-12 flex flex-row list-none w-4/12 justify-start">
          <li>Services</li>
          <li>
            <Link
              href="/rooms"
              className={
                router.pathname == "/rooms" ? "text-gold" : "text-white"
              }
            >
              Rooms
            </Link>
          </li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};
export default Header;
