import { useQuery } from "@tanstack/react-query";
import clientAPI from "../lib/apiClient";

export const useGetSingleProfile = (userId:string) => {
    return useQuery({
        queryKey:['singleProfile',userId],
        queryFn:async()=>{
            const response=await clientAPI.get(`/user/profile/me?id=${userId}`)
            return response
        }
    })
}