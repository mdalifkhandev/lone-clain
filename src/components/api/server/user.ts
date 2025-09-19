import { useMutation, useQuery } from "@tanstack/react-query"
import clientAPI from "../lib/apiClient"
import { profileInfo } from "@/components/interface/profile"

export const useGetUser=()=>{
    return useQuery({
        queryKey:["user"],
        queryFn:async()=>{
            const response= await clientAPI.get('/user/me')
            return response
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