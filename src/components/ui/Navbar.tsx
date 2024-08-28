"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import NavbarMobile from "./NavbarMobile";
import { useEffect } from "react";

const Logo = require("@/Image/Logo.svg");

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);

  useEffect(() => {
    if (!navbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navbar]);

  return (
    <nav className="flex justify-between h-[70px] lg:h-[80px] lg:px-10 px-4 py-5 shadow-lg">
      <div className="flex items-center font-semibold  ">
        <Link href="/">
          <Image src={Logo} alt="Image" className="h-12 lg:h-16"></Image>
        </Link>
        <div className="hidden md:block ml-6 text-sm ">
          <ul className="flex space-x-6">
            <li className="hover:text-green-600">
              <Link href={"https://www.starbucks.com/menu"}>MENU</Link>
            </li>
            <li className="hover:text-green-600">
              <Link href={"https://www.starbucks.com/rewards"}>REWARDS</Link>
            </li>
            <li className="hover:text-green-600">
              <Link href={" https://www.starbucks.com/gift"}>GIFTCARDS</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden md:block md:flex items-center space-x-4 text-sm">
        <Link href={"https://www.starbucks.com/store-locator?map=11.554495,104.911728,14z"} className="flex space-x-2 mr-7 hover:text-green-600">
          <FontAwesomeIcon icon={faLocationDot} className="h-6" />
          <h1 className="font-semibold">Find Store</h1>
        </Link>
        <button className=" px-5 py-2 border  rounded-3xl border-black hover:bg-slate-300">
          <Link href={"https://www.starbucks.com/account/signin?ReturnUrl=%2F"}>
            Sign In
          </Link>
        </button>
        <button className="px-6 py-[7px] border bg-black text-white  rounded-3xl border-white hover:opacity-70">
          <Link href={"https://www.starbucks.com/account/create "}>
            Join Now
          </Link>
        </button>
      </div>

      {/* MOBILE MENU LIST */}

      <button
        onClick={() => setNavbar(!navbar)}
        className="md:hidden hover:rounded-full hover:border-blue-300 "
      >
        {navbar ? (
          <FontAwesomeIcon icon={faBars} className="h-6" />
        ) : (
          <>
            <FontAwesomeIcon icon={faX} className="h-6" />
          </>
        )}
      </button>

      {navbar ? (
        ""
      ) : (
        <>
          <NavbarMobile></NavbarMobile>
        </>
      )}
    </nav>
  );
};
export default Navbar;
