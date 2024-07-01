import { useQuery } from '@tanstack/react-query';
import {  getAllTweetsQuery } from '../tweet';
import { graphqlClient } from '../../../clients/api';

export const useGetAllTweets =()=>{
         const query = useQuery({
            queryKey : ["all-tweets"],
            queryFn: ()=> graphqlClient.request(getAllTweetsQuery)
         })
         return{ ...query, tweets : query.data?.getAllTweets}

}