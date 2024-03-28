import Image from "next/image";
import Sidebar from "./_components/Sidebar";
import Feed from "./_components/Feed";
import Rightbar from "./_components/Rightbar";

export default function Home() {
  return (
    <div>
      <div className="parent grid grid-cols-12 h-screen w-screen "> 
       <div className="sidebar col-span-3"><Sidebar/></div>
       <div className="sidebar col-span-6  border-x-[1px] border-x-gray-800"><Feed/></div>
       <div className="sidebar col-span-3"><Rightbar/></div>
      </div>
    </div>
  );
}
