import { useState } from "react";
import logo from "../../../public/assets/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
const Header = () => {
  const router = useRouter();
  const [listShown, setListShown] = useState(false);
  return (
    <>
      <nav
        className={`lg:hidden box-border pr-6 pt-4 flex flex-col absolute right-0 top-0 z-30 items-end text-end text-white text-2xl ${
          listShown && "bg-aquaButton  w-64 border-gold border-l-2"
        } `}
      >
        <span
          className={`flex flex-row  w-60 pl-7 pb-2 ${
            listShown ? "justify-between" : "justify-end"
          } `}
        >
          <Image
            src="/assets/logo.svg"
            className={`${listShown ? "block" : "hidden"}`}
            width={42}
            height={42}
            alt="logo"
            priority={true}
          />
          <Image
            src="/assets/bx-menu.svg"
            className="hover:cursor-pointer"
            onClick={() => setListShown(!listShown)}
            width={40}
            height={40}
            alt="hamburger button"
            priority={true}
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
          <li className="pb-2 ">
            <Link
              href="/reservations"
              className={
                router.pathname == "/reservations" ? "text-gold" : "text-white"
              }
            >
              Reservation
            </Link>
          </li>
          <li className="pb-2 ">
            <Link
              href="/restaurant"
              className={
                router.pathname == "/restaurant" ? "text-gold" : "text-white"
              }
            >
              Restaurant
            </Link>
          </li>
        </ul>
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
      </nav>
      <nav className="lg:flex desktop:gap-32 xl:text-xl gap-20 absolute z-30 text-white top-0 left-0 font-poppins py-9 text-base box-border hidden  flex-row justify-center w-97vw bg-transparent  items-center h-10vh  ">
        <ul className=" desktop:gap-28 xl:gap-20 gap-12 flex flex-row list-none  w-4/12 justify-end ">
          <li className="inline">
            <Link
              href="/"
              className={router.pathname == "/" ? "text-gold" : "text-white"}
            >
              Home
            </Link>
          </li>
          <li className="inline">
            <Link
              href="/reservations"
              className={
                router.pathname == "/reservations" ? "text-gold" : "text-white"
              }
            >
              Reservations
            </Link>
          </li>
          <li className="inline">
            <Link
              href="/restaurant"
              className={
                router.pathname == "/restaurant" ? "text-gold" : "text-white"
              }
            >
              Restaurant
            </Link>
          </li>
        </ul>
        <Image
          src="/assets/logo.svg"
          width={80}
          height={80}
          alt="Hotel Logo"
          priority={true}
        />
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
      </nav>
    </>
  );
};
export default Header;
