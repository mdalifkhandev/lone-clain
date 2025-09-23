export const getPersentage=(mixAmount:number,numberOfPersentag:number,totalAmount?:number)=>{
   if(!totalAmount || totalAmount<=0){
       return {percentage:0,numberOfPersentag};
   }
   const percentage = Math.round(Math.min(( totalAmount/mixAmount) * numberOfPersentag,numberOfPersentag));
   return {percentage,numberOfPersentag};
}