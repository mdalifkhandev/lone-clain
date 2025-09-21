

// Define interfaces for TypeScript
interface CreditRequest {
  id: string;
  name: string;
  status: 'pending' | 'success' | 'rejected';
  amount: number;
  date: string;
}

interface CreditRequestStatus {
  totalClients: number;
  approvedClients: number;
  pendingClients: number;
}

interface ClientListData {
  allClients: CreditRequest[];
  pendingClients: CreditRequest[];
  successClients: CreditRequest[];
  rejectedClients: CreditRequest[];
}

// Static data
const creditRequestInfo: CreditRequest[] = [
  { id: '1', name: 'John Doe', status: 'pending', amount: 5000, date: '2025-09-20' },
  { id: '2', name: 'Jane Smith', status: 'success', amount: 10000, date: '2025-09-19' },
  { id: '3', name: 'Bob Johnson', status: 'rejected', amount: 7500, date: '2025-09-18' },
  { id: '4', name: 'Alice Brown', status: 'pending', amount: 3000, date: '2025-09-17' },
  { id: '5', name: 'Charlie Davis', status: 'success', amount: 12000, date: '2025-09-16' },
];

const LenderDashBoard: React.FC = () => {
  // Filter static data
  const pendingCreditRequestInfo = creditRequestInfo.filter(client => client.status === 'pending');
  const successCreditRequestInfo = creditRequestInfo.filter(client => client.status === 'success');
  const rejectedCreditRequestInfo = creditRequestInfo.filter(client => client.status === 'rejected');

  // Prepare status data
  const creditRequestStatus: CreditRequestStatus = {
    totalClients: creditRequestInfo.length,
    approvedClients: successCreditRequestInfo.length,
    pendingClients: pendingCreditRequestInfo.length,
  };

  // Prepare client list data
  const clientList: ClientListData = {
    allClients: creditRequestInfo,
    pendingClients: pendingCreditRequestInfo,
    successClients: successCreditRequestInfo,
    rejectedClients: rejectedCreditRequestInfo,
  };

  return (
    <div className="md:space-y-7 space-y-5 text-black">
    </div>
  );
};

export default LenderDashBoard;