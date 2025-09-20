'use client';

import React from 'react';
import { TfiMoney } from "react-icons/tfi";
import { BiWallet } from "react-icons/bi";
import { VscGraph } from "react-icons/vsc";

// Define the shape of the financialInfo prop for type safety
interface FinancialInfoProps {
  financialInfo?: {
    annualIncome?: number;
    valueOfLandOwnership?: number;
  };
  debitToIncomeRatio?: number;
}

const FinancialSummary: React.FC<FinancialInfoProps> = ({ financialInfo, debitToIncomeRatio }) => {
  // Use optional chaining and nullish coalescing for safe access
  const annualIncome = financialInfo?.annualIncome ?? 0;
  const valueOfLandOwnership = financialInfo?.valueOfLandOwnership ?? 0;
  const debtRatio = debitToIncomeRatio ?? 0;

  return (
    <div>
      <h3 className='bg-gray-200 p-4 font-bold rounded-t-sm text-black'>Financial Summary</h3>
      <div className='px-4 py-6 flex flex-col md:flex-row md:gap-7 gap-5 items-center'>
        {/* Annual Income Section */}
        <div className="bg-gray-50 rounded-sm w-full items-center p-3 flex gap-2 border border-gray-300">
          <div className="bg-green-200 p-2 rounded-full">
            <TfiMoney size={18} className="text-green-700" />
          </div>
          <div>
            <p className="text-sm text-gray-700">Annual income</p>
            <h3 className="text-gray-900 text-[15px]">FCFA {annualIncome.toLocaleString()}</h3>
          </div>
        </div>

        {/* Value of Land Ownership Section */}
        <div className="bg-gray-50 rounded-sm items-center p-3 w-full flex gap-2 border border-gray-300">
          <div className="bg-red-200 p-2 rounded-full">
            <BiWallet size={18} className="text-red-700" />
          </div>
          <div>
            <p className="text-sm text-gray-700">Value of Land ownership</p>
            <h3 className="text-gray-900 text-[15px]">FCFA {valueOfLandOwnership.toLocaleString()}</h3>
          </div>
        </div>

        {/* Debit to Income Ratio Section */}
        <div className="bg-gray-50 rounded-sm items-center p-3 w-full flex gap-2 border border-gray-300">
          <div className="bg-yellow-200 p-2 rounded-full">
            <VscGraph size={18} className="text-yellow-700" />
          </div>
          <div>
            <p className="text-sm text-gray-700">Debit to income Ratio</p>
            <h3 className="text-gray-900 text-[15px]">FCFA {debtRatio}/17</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialSummary;