import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const NavbarMobile = () => {
  return (
    <div className="flex flex-col left-0 top-20 fixed h-screen w-full bg-black/70 z-10   md:hidden">
      <div className=" fixed bg-white top-20 right-0 p-10  border-t-2 w-[75%] h-screen ease-in-out duration-500">
        <ul className="space-y-10 cursor-pointer">
          <li>Menu</li>
          <li>Rewards</li>
          <li>Gift Cards</li>
        </ul>
        <div className="h-[2px] bg-gray-600 mt-8 mb-4 opacity-40 cursor-pointer"></div>
        <div className="space-x-5 space-y-5">
          <button className=" px-5 py-[5px] border  rounded-3xl border-black hover:bg-slate-300">
            Sign In
          </button>
          <button className="px-6 py-[7px] border bg-black text-white  rounded-3xl border-white hover:opacity-70">
            Join Now
          </button>
          <Link href={""} className="flex space-x-2 mr-7 hover:text-green-600">
            <FontAwesomeIcon icon={faLocationDot} className="h-6" />
            <h1 className="font-semibold">Find Store</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
