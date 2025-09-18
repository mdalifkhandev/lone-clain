import { FormData, LoginData } from "@/components/interface";
import clientAPI from "@/components/api/lib/apiClient"
import { useMutation } from "@tanstack/react-query"

export const useUserRegister = () => {
    return useMutation({
        mutationFn: async (data: FormData) => {
            const response = await clientAPI.post('/auth/signup', data);
            return response;
        }
    })
}

export const useUserLogin = () => {
    return useMutation({
        mutationFn: async (data:LoginData) => {
            const response = await clientAPI.post('/auth/login', data);
            return response;
        }
    })
}