import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {  getAllTweetsQuery } from '../tweet';
import { graphqlClient } from '../../../clients/api';
import { createTweetMutation } from '../../mutation/tweet';
import { CreateTweetData } from '../../../gql/graphql';
import toast from 'react-hot-toast';


export const useCreateTweet=()=>{
   const queryClient = useQueryClient();
   
   const mutaion = useMutation({
      mutationFn : (payload: CreateTweetData)=> 
         graphqlClient.request(createTweetMutation,{payload}),
      onMutate : (payload)=> toast.loading("Creating Tweet", {id: "1"}),
      onSuccess : async()=> {
        await queryClient.invalidateQueries(["all-tweets"])
         toast.success("Tweet Created",{id : "1"})
      },

   })
   return mutaion;
}

export const useGetAllTweets =()=>{
         const query = useQuery({
            queryKey : ["all-tweets"],
            queryFn: ()=> graphqlClient.request(getAllTweetsQuery)
         })
         return{ ...query, tweets : query.data?.getAllTweets}

}
