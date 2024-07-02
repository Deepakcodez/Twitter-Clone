import Image from "next/image";
import Sidebar from "./_components/Sidebar";
import Feed from "./_components/Feed";
import Rightbar from "./_components/Rightbar";

export default function Home() {
  return (
    <div>
      <div className="parent grid grid-cols-12 h-[100vh] w-full lg:px-32"> 
       <div className="sidebar col-span-1  lg:col-span-3  "><Sidebar/></div>
       <div className="sidebar md:col-span-6 col-span-11   border-x-[1px] border-x-gray-800"><Feed/></div>
       <div className="sidebar col-span-3 hidden md:block"><Rightbar/></div>
      </div>
    </div>
  );
}
