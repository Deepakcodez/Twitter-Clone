"use client";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { graphqlClient } from "../../../clients/api";
import { verifyUserGoogleToken } from "../../../graphql/query/user";
const Rightbar = () => {

  
  const handleLoginWithGoogle = useCallback(async(cred: CredentialResponse) => {

    const googleToken = cred.credential;

    if(!googleToken){
      return toast.error("Google token not found")
    }
      const { verifyGoogleToken } = await graphqlClient.request(verifyUserGoogleToken, 
        {token: googleToken})
      toast.success("Verified success")
      console.log('>>>>>>>>>>>', verifyGoogleToken)

      if(verifyGoogleToken) window.localStorage.setItem("twitter_token",verifyGoogleToken)
  },
  []);
  return (
    <>
      <div className="w-full h-full ">
        <div className=" bg-slate-700/50 rounded-lg p-5 m-2">
          <h1 className="text-xs">New on Twitter</h1>
          <GoogleLogin
            onSuccess={handleLoginWithGoogle}
          />
        </div>
      </div>
    </>
  );
};

export default Rightbar;
