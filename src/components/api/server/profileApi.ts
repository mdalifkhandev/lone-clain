import { useMutation, useQuery } from "@tanstack/react-query";
import clientAPI from "../lib/apiClient";
import { profileInfo } from "@/components/interface/profile";

export const useGetSingleProfile = (userId:string) => {
    return useQuery({
        queryKey:['singleProfile',userId],
        enabled:!!userId,
        queryFn:async()=>{
            if(userId){
                const response=await clientAPI.get(`/user/profile/me?id=${userId}`)
                return response
            }
        }
    })
}

export const useUpdateAndCreateProfile=()=>{
    return useMutation({
        mutationFn:async(data:profileInfo)=>{
            const response=await clientAPI.patch('/user/update-profile',data)
            return response
        }
    })
}