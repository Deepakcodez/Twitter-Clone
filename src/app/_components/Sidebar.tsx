"use client"
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { useCurrentUser } from "../../../graphql/query/hooks/user";
import Image from "next/image";


interface sidebarOptionsType {
  title: string;
  icon: React.ReactNode;
}


const Sidebar = () => {


  const { user } = useCurrentUser();

  const sidebarButtons: sidebarOptionsType[] =
    [
      {
        title: "Home",
        icon: <AiFillHome />
      },
      {
        title: "Explore",
        icon: <FaSearch />
      },
      {
        title: "Notification",
        icon: <FaBell />
      },
      {
        title: "Messages",
        icon: <FaEnvelope />
      },
      {
        title: "Saved",
        icon: <FaBookmark />
      },
      {
        title: "Profile",
        icon: <IoPerson />
      },
    ]

  return (
    <>
      <div className="w-full h-screen relative ">
        {/* Logo */}
        <div className="hover:bg-gray-500/25 cursor-pointer ml-2 transition-all rounded-full w-fit  ">
          <BsTwitterX className="text-5xl mt-2 p-3 " />
        </div>
        {/* Logo */}

        {/* buttons  */}
        <ul className="mt-3">
          {
            sidebarButtons.map((data, index) =>
              <>
                <li className="flex justify-start items-center gap-5 py-2 px-4 rounded-full transition-all  w-fit hover:bg-gray-500/25 cursor-pointer mb-2">
                  <span className="text-3xl">{data.icon}</span>
                  <span className="text-xl hidden lg:block">{data.title}</span>
                </li>
              </>)
          }
        </ul>
        {/* buttons  */}

        {/* post button */}
        <button className="bg-[#1DA1F2] w-[8rem] rounded-full mr-20 py-1 cursor-pointer mt-5">
          <h1 className="text-center text-lg">Post</h1>
        </button>
        {/* post button */}
        {
          user &&
          <div className="w-full bg-slate-600/25  flex  items-center gap-2 py-2 absolute bottom-0">
            <Image
              className="rounded-full"
              src={user.profileImageURL || '/defaultavatar.jpg'}
              width={50}
              height={50}
              alt="avatar" />
            <div>
              <h1 className="text-sm text-white/75">{user.firstName} {user.lastName}</h1>
              <h1 className="text-[0.7rem] text-gray-200/50">{user.email}</h1>
            </div>
          </div>
        }

      </div>
    </>
  );
};

export default Sidebar;
