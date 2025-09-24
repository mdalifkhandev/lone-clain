'use client';

import React from 'react';
import { Progress } from 'antd';
import { getPersentage } from '../utils/getPersentage';


interface CreditScoreProps {
    creditInfo?: {
        creditScore?: number;
        creditTag?: string;

    };
    factorsAffectingScore?: {
        annualIncome?: number;
        electricityBill?: number;
        mobileMoneyBalance?: number;
    };
    updatedDate?: string;
}

const CreditScore: React.FC<CreditScoreProps> = ({ creditInfo, factorsAffectingScore, updatedDate }) => {
    const annualIncome=getPersentage(100000,30,factorsAffectingScore?.annualIncome)
    const electricityBill=getPersentage(5000,30,factorsAffectingScore?.electricityBill)
    const mobileMoneyBalance=getPersentage(2000,30,factorsAffectingScore?.mobileMoneyBalance)
    const today = new Date().toLocaleDateString()
    

    return (
        <div>
            <div className='bg-gray-200 p-4 flex justify-between items-center rounded-t-sm'>
                <h3 className='font-bold text-black'>Credit Score</h3>
                <p className='text-sm text-gray-700'>
                    Updated {updatedDate===today?"Today":updatedDate}

                </p>
            </div>
            <div className='px-4 py-10'>
                <div className='flex justify-center'>
                    <Progress
                        type="dashboard"
                        gapDegree={120}
                        steps={10}
                        percent={creditInfo?.creditScore}
                        trailColor="#D3D3D3"
                        strokeColor={"green"}
                        strokeWidth={12}
                        size={250}
                        format={() => (
                            <div style={{ textAlign: "center" }}>
                                <div style={{ fontSize: "10px", color: "green", backgroundColor: "#D3D3D3", display: "inline-block", padding: "3px 9px", borderRadius: "10px" }}>
                                    {creditInfo?.creditTag}
                                </div>
                                <div>{creditInfo?.creditScore}</div>
                            </div>
                        )}
                    />
                </div>
                <p className='text-center text-sm text-gray-700 border-b border-gray-300 md:pb-16 pb-10 '>
                    Your credit score is in the Excellent range. This indicates excellent creditworthiness.
                </p>
                <div className='mt-10 md:mt-16'>
                    <h2 className='text-xl text-center text-red-950'>Factors affecting your score</h2>
                    <div className='mt-9 md:space-y-7 space-y-2'>
                        <div>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-red-950 font-semibold text-[14px]'>Annual Income (FCFA)</h3>
                                <p className='text-sm text-gray-700'>{annualIncome?.percentage || 0}/{annualIncome?.numberOfPersentag || 0}</p>
                            </div>
                            <progress className="progress w-full text-green-500" value={annualIncome?.percentage || 0} max={annualIncome?.numberOfPersentag || 0}></progress>
                        </div>
                        <div>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-red-950 font-semibold text-[14px]'>Electricity Bill (FCFA)</h3>
                                <p className='text-sm text-gray-700'>{electricityBill?.percentage || 0}/{electricityBill?.numberOfPersentag || 0}</p>
                            </div>
                            <progress className="progress w-full text-blue-600" value={electricityBill?.percentage || 0} max={electricityBill?.numberOfPersentag || 0}></progress>
                        </div>
                        <div>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-red-950 font-semibold text-[14px]'>Mobile Money Balance (FCFA)</h3>
                                <p className='text-sm text-gray-700'>{mobileMoneyBalance?.percentage || 0}/{mobileMoneyBalance?.numberOfPersentag || 0}</p>
                            </div>
                            <progress className="progress w-full text-green-500" value={mobileMoneyBalance?.percentage || 0} max={mobileMoneyBalance?.numberOfPersentag || 0}></progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditScore;