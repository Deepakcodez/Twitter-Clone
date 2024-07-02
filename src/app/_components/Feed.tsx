"use client"
import Image from "next/image";
import { useCurrentUser } from "../../../graphql/query/hooks/user";
import FeedCard from "./FeedCard";
import { IoImageOutline } from "react-icons/io5";
import { useCallback, useState } from "react";
import { useCreateTweet, useGetAllTweets } from "../../../graphql/query/hooks/tweet";
import { Tweet } from "../../../gql/graphql";

const Feed = () => {

    const { user } = useCurrentUser();
    const { tweets = [ ]} = useGetAllTweets();
    const { mutate } = useCreateTweet();
    const[content, setContent] = useState("")

    const handleImageUpload = useCallback(() => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file')
        input.setAttribute('accept', 'image/*')
        input.click();
    }, [])


    const  handlePost=useCallback(()=>{
       mutate({
        content
       })
       setContent("")
    },[content, mutate])


    return (<>
        <div className="w-full h-screen overflow-scroll no-scrollbar  ">
            <div className="w-full mt-5 px-4 ">
                <div className="grid grid-cols-12 gap-2  py-2">
                    <div className="col-span-1">
                        <Image
                            className="rounded-full"
                            src={user?.profileImageURL || '/defaultavatar.jpg'}
                            width={50}
                            height={50}
                            alt="avatar" />

                    </div>
                    <div className="col-span-11 ">
                        <textarea
                            value={content}
                            className="w-full p-2 border-b border-b-slate-800 bg-transparent"
                            placeholder="Whats happening?"
                            rows={4}
                            onChange={(e)=> setContent(e.target.value)}
                        />

                        <div className="flex justify-between">

                            <IoImageOutline onClick={handleImageUpload} size={20} />

                            {/* post button */}
                            <button
                            onClick={handlePost}
                            className="bg-[#1DA1F2] rounded-full   px-4  cursor-pointer ">
                                <h1 className="text-center text-lg">Post</h1>
                            </button>
                            {/* post button */}
                        </div>

                    </div>
                </div>
            </div>
            {
               tweets?.map(tweet=> tweet? <FeedCard key={tweet?.id} data ={tweet as Tweet}/> : null)
            }
        </div>
    </>);
}

export default Feed;