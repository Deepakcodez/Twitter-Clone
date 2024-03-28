import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="parent grid grid-cols-12 h-screen w-screen "> 
       <div className="sidebar col-span-3">sidebar</div>
       <div className="sidebar col-span-6  border-x-[1px] border-x-gray-800">main</div>
       <div className="sidebar col-span-3">right</div>
      </div>
    </div>
  );
}
