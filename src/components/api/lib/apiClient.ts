import axios from "axios";

const clientAPI=axios.create({
    baseURL:process.env.NEXT_PUBLIC_API_URL,
    withCredentials:true,
})

// clientAPI.interceptors.request.use(
//     (response)=>{
//         return response
//     }
//     ,
//     (error)=>{
//         if(error.response && error.response.status===401){
//             if(typeof window !=='undefined'){
//                 window.location.href='/login'
//             }
//         }
//         return Promise.reject(error)
//     }
// )

export default clientAPI;