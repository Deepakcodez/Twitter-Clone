import Image from "next/image";
import { FaBookmark } from "react-icons/fa";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
const FeedCard = () => {
    return ( 
        <>
        <div className="border-t-[1px]  border-gray-400/50 hover:bg-gray-800/75 transition-all cursor-pointer ">
            <div className="grid grid-cols-12 p-4">
                <div className="col-span-1 ">
                <Image 
                 className="rounded-full"
                 src="https://avatars.githubusercontent.com/u/138669669?v=4"
                 alt="User-avatar" 
                 height={50} 
                 width={50}

                 />
                </div>
                <div className="col-span-11 px-3">
                    <h1>Deepak</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius nulla, culpa accusamus necessitatibus sunt soluta tempora? Ipsam exercitationem eum quis.</p>

            <div className="flex pt-3 pr-10 gap-5 justify-between text-lg items-center">
                <div><BiMessageRounded/></div>
                <div><FaRetweet/></div>
                <div><AiOutlineHeart/></div>
                <div><BiUpload/></div>
            </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default FeedCard;