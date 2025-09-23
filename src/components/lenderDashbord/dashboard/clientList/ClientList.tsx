"use client";

import React, { useEffect, useState } from 'react';
import { CiFilter } from 'react-icons/ci';

type Client = {
    id: string;
    city: string;
    status: "pending" | "approved" | "rejected";
    creditScore: string;
    requestLoanAmount: string;
};

const allClients: Client[] = [
    {
        id: "cl-001",
        city: "Dhaka",
        status: "approved",
        creditScore: "85",
        requestLoanAmount: "5000",
    },
    {
        id: "cl-002",
        city: "Thakurgaon",
        status: "pending",
        creditScore: "65",
        requestLoanAmount: "3000",
    },
    {
        id: "cl-003",
        city: "Chittagong",
        status: "rejected",
        creditScore: "45",
        requestLoanAmount: "8000",
    },
    {
        id: "cl-004",
        city: "Rajshahi",
        status: "approved",
        creditScore: "75",
        requestLoanAmount: "6500",
    },
    {
        id: "cl-005",
        city: "Sylhet",
        status: "pending",
        creditScore: "58",
        requestLoanAmount: "4200",
    },
    {
        id: "cl-006",
        city: "Khulna",
        status: "approved",
        creditScore: "90",
        requestLoanAmount: "10000",
    },
    {
        id: "cl-007",
        city: "Barishal",
        status: "rejected",
        creditScore: "35",
        requestLoanAmount: "7000",
    },
    {
        id: "cl-008",
        city: "Rangpur",
        status: "pending",
        creditScore: "60",
        requestLoanAmount: "2500",
    },
];

const ClientList = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [activeTab, setActiveTab] = useState<"all" | "pending" | "approve" | "reject">("all");
    const [data, setData] = useState<Client[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    
    // filters state-এ 'status' যোগ করা হয়েছে
    const [filters, setFilters] = useState({
        city: "",
        credit: "",
        amount: "",
        status: ""
    });

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    const getDataByTab = (tab: "all" | "pending" | "approve" | "reject"): Client[] => {
        let filteredData = allClients;

        // ট্যাব ফিল্টারিং
        switch (tab) {
            case "pending":
                filteredData = filteredData.filter(c => c.status === "pending");
                break;
            case "approve":
                filteredData = filteredData.filter(c => c.status === "approved");
                break;
            case "reject":
                filteredData = filteredData.filter(c => c.status === "rejected");
                break;
            default:
                break;
        }

        // ইনপুট ফিল্টারিং
        if (filters.city) {
            filteredData = filteredData.filter(c => c.city.toLowerCase().includes(filters.city.toLowerCase()));
        }

        if (filters.credit) {
            const creditInput = parseFloat(filters.credit);
            if (!isNaN(creditInput)) {
                filteredData = filteredData.filter(c => parseFloat(c.creditScore) >= 0 && parseFloat(c.creditScore) <= creditInput);
            }
        }

        if (filters.amount) {
            const amountInput = parseFloat(filters.amount);
            if (!isNaN(amountInput)) {
                filteredData = filteredData.filter(c => parseFloat(c.requestLoanAmount) >= 0 && parseFloat(c.requestLoanAmount) <= amountInput);
            }
        }

        // 'Status' সিলেক্ট ইনপুট ফিল্টারিং যোগ করা হয়েছে
        if (filters.status) {
            filteredData = filteredData.filter(c => c.status === filters.status);
        }

        return filteredData;
    };

    const fetchData = (tab: "all" | "pending" | "approve" | "reject") => {
        setLoading(true);
        setTimeout(() => {
            const filteredData = getDataByTab(tab);
            setData(filteredData);
            setLoading(false);
        }, 300);
    };

    useEffect(() => {
        fetchData(activeTab);
    }, [activeTab, filters]);

    const handleTabClick = (tab: "all" | "pending" | "approve" | "reject") => {
        setActiveTab(tab);
        setFilters({ city: "", credit: "", amount: "", status: "" }); // নতুন ট্যাবে ক্লিক করলে সব ফিল্টার রিসেট হবে
    };

    // ড্রপডাউন থেকে স্ট্যাটাস পরিবর্তন হলে handleFilterChange ফাংশন কল হবে
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters({ ...filters, status: e.target.value });
    };

    return (
        <div className='bg-white'>
            {/* Header with Filter Button */}
            <div className='flex justify-between items-center mb-4 mt-6'>
                <h1 className='text-2xl font-bold'>Client List</h1>
                <button
                    className='btn btn-outline hover:bg-red-950 rounded flex items-center'
                    onClick={toggleFilter}
                >
                    <CiFilter className='text-2xl' />
                    Filter
                </button>
            </div>

            {/* Tabs */}
            <div className='flex gap-10 mb-4'>
                <button onClick={() => handleTabClick("all")} className={` ${activeTab === "all" ? 'text-red-950 font-bold' : ''}`}>All Client</button>
                <button onClick={() => handleTabClick("pending")} className={` ${activeTab === "pending" ? 'text-red-950 font-bold' : ''}`}>Pending</button>
                <button onClick={() => handleTabClick("approve")} className={` ${activeTab === "approve" ? 'text-red-950 font-bold' : ''}`}>Approve</button>
                <button onClick={() => handleTabClick("reject")} className={` ${activeTab === "reject" ? 'text-red-950 font-bold' : ''}`}>Reject</button>
            </div>
            <div className='border-t-2 mt-4'></div>
            {/* Filter Section (toggle) */}
            <div
                className={` mb-3 overflow-hidden transition-all duration-500 ${showFilter ? 'max-h-60 mt-4' : 'max-h-0'
                    }`}
            >
                <div className='flex flex-col gap-3 p-4 border rounded bg-gray-50'>
                    <div className='flex flex-col md:flex-row gap-3'>
                        <div className='flex flex-col w-full'>
                            <label className='text-sm font-medium mb-1'>City</label>
                            <input
                                type="text"
                                placeholder="City"
                                className='input text-black bg-white border-gray-400'
                                value={filters.city}
                                onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                            />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='text-sm font-medium mb-1'>Credit</label>
                            <input
                                type="number"
                                placeholder="Credit"
                                className='input text-black bg-white border-gray-400'
                                value={filters.credit}
                                onChange={(e) => setFilters({ ...filters, credit: e.target.value })}
                            />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='text-sm font-medium mb-1'>Amount Range</label>
                            <input
                                type="number"
                                placeholder="Amount Range"
                                className='input text-black bg-white border-gray-400'
                                value={filters.amount}
                                onChange={(e) => setFilters({ ...filters, amount: e.target.value })}
                            />
                        </div>
                        {/* Status Select Input */}
                        <div className='flex flex-col w-full'>
                            <label className='text-sm font-medium mb-1'>Status</label>
                            <select
                                name="status"
                                className='input text-black bg-white border-gray-400'
                                value={filters.status}
                                onChange={handleFilterChange}
                            >
                                <option value="">Select Status</option>
                                <option value="approved">Approved</option>
                                <option value="pending">Pending</option>
                                <option value="rejected">Rejected</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto border rounded">
                {loading ? (
                    <p className="p-4 text-center">Loading...</p>
                ) : (
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left">ID</th>
                                <th className="px-4 py-2 text-left">City</th>
                                <th className="px-4 py-2 text-left">Credit Score</th>
                                <th className="px-4 py-2 text-left">Request Loan Amount</th>
                                <th className="px-4 py-2 text-left">Status</th>
                                <th className="px-4 py-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="text-center py-4">
                                        No data found
                                    </td>
                                </tr>
                            ) : (
                                data.map((client, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="px-4 py-2">{client.id}</td>
                                        <td className="px-4 py-2">{client.city}</td>
                                        <td className="px-4 py-2">{client.creditScore}</td>
                                        <td className="px-4 py-2">{client.requestLoanAmount}</td>
                                        <td className="px-4 py-2">{client.status}</td>
                                        <td className="px-4 py-2"></td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default ClientList;