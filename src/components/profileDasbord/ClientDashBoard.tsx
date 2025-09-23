import { TfiMoney } from "react-icons/tfi";
import { getPersentage } from "../utils/getPersentage";


const CreditLimits = ({totalIncome}:{totalIncome:number}) => {
    const totalIncomePersentage=getPersentage(100000,100,totalIncome)
    return (
        <div>
            <h3 className='bg-gray-200 p-4 font-bold rounded-t-sm text-black'>Suggest Credit Limit</h3>
            <div className='px-4 py-7'>
                <div className="flex items-center flex-col md:gap-5 gap-3">
                    <div className="bg-gray-100 p-3 rounded-full">
                        <TfiMoney className="text-red-950 bg-gray-100" size={25}></TfiMoney>
                    </div>
                    <h4 className="text-md font-semibold text-black">FCFA {totalIncome}</h4>
                    <p className="text-sm text-gray-700">Based on your credit score of {totalIncomePersentage?.percentage}/{totalIncomePersentage?.numberOfPersentag}</p>
                </div>
                <div className="bg-gray-100 rounded-sm p-3 space-y-3 mt-7">
                    <h2 className="text-md font-semibold">Credit Limit Ranges</h2>
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-700">Excellent(80-100):</p>
                        <h4 className="text-[14px] font-semibold text-gray-700">FCFA 100,000</h4>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-700 ">Good(60-79):</p>
                        <h4 className="text-[14px] font-semibold text-gray-700">FCFA 50,000</h4>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-700">Fair(40-59):</p>
                        <h4 className="text-[14px] font-semibold text-gray-700">FCFA 30,000</h4>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-700">Poor(0-39):</p>
                        <h4 className="text-[14px] font-semibold text-gray-700">FCFA 10,000</h4>
                    </div>
                </div>
                <form  className="mt-5">
                    <div className="mt-5 flex items-center gap-3">
                    <input type="checkbox" required name="terms"/>
                    <label htmlFor="" className="text-sm text-gray-700">I agree to share my data with partner financial insituations for my credit application</label>
                </div>
                    <div className="space-y-2 mt-4">
                        <label htmlFor="" className="block text-gray-600">Enter Loan Amount</label>
                        <input type="number" name="loan-amount" required className="appearance-none outline-none border border-gray-400 rounded-sm py-2 px-3 w-full" placeholder="Enter your amount"/>
                    </div>
                    <div className="flex justify-center items-center mt-5">
                        <button type="submit" className="py-[6px] px-3 bg-red-950 cursor-pointer rounded-sm text-sm text-gray-300">Submit Application</button>
                    </div>
                </form>
            </div>   
        </div>
    );
};

export default CreditLimits;