import Image from "next/image";
import { FaBookmark } from "react-icons/fa";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FC } from "react";
import { Tweet } from "../../../gql/graphql";

interface FeedCardProps{
    data : Tweet
}
const FeedCard:FC<FeedCardProps> = ({data}) => {
       

    return ( 
        <>
        <div className="border-t-[1px]  border-gray-400/50 hover:bg-gray-800/75 transition-all cursor-pointer ">
            <div className="grid grid-cols-12 p-4">
                <div className="col-span-1 ">
                <Image 
                 className="rounded-full"
                 src={data.author?.profileImageURL || '/defaultavatar.jpg' }
                 alt="User-avatar" 
                 height={50} 
                 width={50}

                 />
                </div>
                <div className="col-span-11 px-3">
                    <h1 className="text-white/75">{data.author?.firstName} {data.author?.lastName} </h1>
                    <p>{data.content}</p>

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