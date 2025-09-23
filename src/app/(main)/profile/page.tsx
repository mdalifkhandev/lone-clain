"use client";

import { useGetSingleProfile } from '@/components/api/server/profileApi';
import ApplicationStatus from '@/components/profileDasbord/ApplicationStatus';
import CreditLimits from '@/components/profileDasbord/ClientDashBoard';
import CreditScore from '@/components/profileDasbord/CreditScore';
import FinancialSummary from '@/components/profileDasbord/FinancialSummary';
import RecentActivity from '@/components/profileDasbord/RecentActivity';
import { useAuthStore } from '@/components/store/authStore';
import { getCreditScore } from '@/components/utils/getCreditScore';
import { NextPage } from 'next';

const ClientDashboard: NextPage = () => {

    const { user } = useAuthStore()
    const { data: profileData } = useGetSingleProfile(user?._id as string)
    const profile = profileData?.data.data;
    const updatedDate = new Date(profile?.updatedAt).toLocaleDateString()
    // console.log(profile?.financialInfo);
    const totalIncome = (profile?.financialInfo?.annualIncome + profile?.financialInfo?.electricityBill  + profile?.financialInfo?.mobileMoneyBalance + profile?.financialInfo?.valueOfLandOwnership)-profile?.financialInfo?.existingLoanAmount
    const creditInfo = getCreditScore(totalIncome)
    const annualIncome = profile?.financialInfo?.annualIncome
    const valueOfLandOwnership = profile?.financialInfo?.valueOfLandOwnership
    const factorsAffectingScore={
        annualIncome,
        electricityBill:profile?.financialInfo?.electricityBill,
        mobileMoneyBalance:profile?.financialInfo?.mobileMoneyBalance,
    }

    const financialSummaryData = {
        annualIncome,
        valueOfLandOwnership,
        totalIncome
    }


    return (
        <div className='bg-gray-100 px-4 md:px-16 py-5 md:py-10 space-y-7'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-red-950'>M. GUEHI - Dashboard</h1>
            <div className='flex flex-col md:flex-row gap-4 md:mt-10 mt-5'>
                <div className='w-full md:w-[70%] bg-white rounded-sm shadow-lg'>
                    <CreditScore updatedDate={updatedDate} creditInfo={creditInfo} factorsAffectingScore={factorsAffectingScore} />
                </div>
                <div className='w-full md:w-[30%] space-y-3'>
                    <div className='bg-white rounded-sm shadow-lg'>
                        <CreditLimits totalIncome={totalIncome} />
                    </div>
                    <div className='bg-white rounded-sm shadow-lg'>
                        <ApplicationStatus />
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-sm shadow-lg'>
                <FinancialSummary financialSummaryData={financialSummaryData} />
            </div>
            <div className='bg-white rounded-sm shadow-lg'>
                <RecentActivity updatedDate={updatedDate} />
            </div>
        </div>
    );
};

export default ClientDashboard;