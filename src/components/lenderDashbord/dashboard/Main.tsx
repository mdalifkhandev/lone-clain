import React from 'react';
import ClientStatus from './ClientStatus';
import ClientList from './clientList/ClientList';

const Main = () => {
    const creditRequestStatus= {
    totalClients: 20,
    approvedClients: 20,
    pendingClients: 20,
  };
    return (
        <div className='text-black bg-white'>
            <h1 className='text-2xl font-bold mb-8 mt-6'>
                CreditFirst - Dashboard
            </h1>
            <ClientStatus creditRequestStatus={creditRequestStatus} />
            <ClientList />
        </div>
    );
};

export default Main;