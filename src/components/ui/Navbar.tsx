"use client";
import { useState } from "react";
import Link from "next/link";
import ProfileDropDown from "../Navbar/ProfileDropDown";
import Image from "next/image";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Partners", path: "javascript:void(0)" },
    { title: "Feedback", path: "javascript:void(0)" },
  ];

  return (
    <nav className="bg-white border-b">
      <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
        <div className="flex-none lg:flex-initial">
          <Link href="/">
            <Image
              src="https://www.reshot.com/preview-assets/icons/PTXY7M2H6V/flickr-PTXY7M2H6V.svg"
              alt="Float UI logo"
              width={60}
              height={50}
            />
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div
            className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${
              menuState ? "" : "hidden"
            }`}
          >
            <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
              {navigation.map((item, idx) => (
                <li key={idx} className="text-gray-600 hover:text-gray-900">
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <ProfileDropDown class="mt-5 pt-5 border-t lg:hidden" />
          </div>
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            <form className="flex items-center space-x-2 border rounded-md p-2">
              <SearchOutlined />
              <input
                className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                type="text"
                placeholder="Search"
              />
            </form>
            <ProfileDropDown class="hidden lg:block" />
            <button
              className="outline-none text-gray-400 block lg:hidden"
              onClick={() => setMenuState(!menuState)}
            >
              {menuState ? <MenuOutlined /> : <MenuOutlined />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
