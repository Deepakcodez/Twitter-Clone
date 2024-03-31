"use client"
import {GoogleLogin} from "@react-oauth/google"
const Rightbar = () => {
    return ( 
        <>
        <div className="w-full h-full ">
           <div className=" bg-slate-700/50 rounded-lg p-5 m-2">
            <h1 className="">New on Twitter</h1>
            <GoogleLogin onSuccess={cred =>console.log('>>>>>>>>>>>cred', cred)}/>
           </div>
        </div>
        </>
     );
}
 
export default Rightbar;