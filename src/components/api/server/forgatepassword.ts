import { useMutation } from "@tanstack/react-query"
import clientAPI from "../lib/apiClient"
import { EmailData, OtpData, ResetPasswordData } from "@/components/interface";

export const useForgatePasswordSendMail=()=>{
    return useMutation({
        mutationFn:async(data:EmailData)=>{
            const response=await clientAPI.post('/auth/send-mail', { email: data.email });
            return response;
        }
    })
}

export const useForgatePasswordVerifyOtp=()=>{
    return useMutation({
        mutationFn:async(data:OtpData)=>{
            const response=await clientAPI.post('/auth/otp-verify', data);
            return response;
        }
    })
}

export const useForgateResetPassword=()=>{
    return useMutation({
        mutationFn:async(data:ResetPasswordData)=>{
            const response=await clientAPI.post('/auth/reset-password', data);
            return response;
        }
    })
}