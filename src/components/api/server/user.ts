import { useQuery } from "@tanstack/react-query"
import clientAPI from "../lib/apiClient"

export const useGetUser=()=>{
    return useQuery({
        queryKey:["user"],
        queryFn:async()=>{
            const response= await clientAPI.get('/user/me')
            return response
        }
    })
}

