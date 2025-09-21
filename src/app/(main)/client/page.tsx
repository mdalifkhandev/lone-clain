import ApplicationStatus from '@/components/clientDasbord/ApplicationStatus';
import CreditLimits from '@/components/clientDasbord/ClientDashBoard';
import CreditScore from '@/components/clientDasbord/CreditScore';
import FinancialSummary from '@/components/clientDasbord/FinancialSummary';
import RecentActivity from '@/components/clientDasbord/RecentActivity';
import { NextPage } from 'next';

const ClientDashboard: NextPage = () => {
    return (
        <div className='bg-gray-100 px-4 md:px-16 py-5 md:py-10 space-y-7'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-red-950'>M. GUEHI - Dashboard</h1>
            <div className='flex flex-col md:flex-row gap-4 md:mt-10 mt-5'>
                <div className='w-full md:w-[70%] bg-white rounded-sm shadow-lg'>
                    <CreditScore/>
                </div>
                <div className='w-full md:w-[30%] space-y-3'>
                    <div className='bg-white rounded-sm shadow-lg'>
                       <CreditLimits />
                    </div>
                    <div className='bg-white rounded-sm shadow-lg'>
                       <ApplicationStatus/>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-sm shadow-lg'>
                <FinancialSummary/>
            </div>
            <div className='bg-white rounded-sm shadow-lg'>
               <RecentActivity/>
            </div>
        </div>
    );
};

export default ClientDashboard;