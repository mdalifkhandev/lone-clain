"use client";

import { Client } from '@/components/interface/profile';
import React, { useEffect, useState } from 'react';
import { CiFilter } from 'react-icons/ci';
import MyModal from './ModalClient';

const ClientList = ({ loanApplicationsData }: { loanApplicationsData: Client[] }) => {
    const allClients = loanApplicationsData;
    console.log(allClients);

    const [showFilter, setShowFilter] = useState(false);
    const [activeTab, setActiveTab] = useState<"all" | "pending" | "approved" | "rejected">("all");
    const [data, setData] = useState<Client[]>(loanApplicationsData);
    const [loading, setLoading] = useState<boolean>(false);

    const getCreditLevel = (score: number): "High" | "Medium" | "Low" | "Unknown" => {
        if (score >= 80 && score <= 100) return "High";
        if (score >= 60 && score < 80) return "Medium";
        if (score >= 40 && score < 60) return "Low";
        return "Unknown";
    };



    const [filters, setFilters] = useState({
        city: "",
        minScore: "",
        maxScore: "",
        amount: "",
        status: ""
    });

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    const getDataByTab = (tab: "all" | "pending" | "approved" | "rejected"): Client[] => {
        let filteredData = allClients;

        switch (tab) {
            case "pending":
                filteredData = filteredData.filter(c => c.status === "pending");
                break;
            case "approved":
                filteredData = filteredData.filter(c => c.status === "approved");
                break;
            case "rejected":
                filteredData = filteredData.filter(c => c.status === "rejected");
                break;
            default:
                break;
        }

        // ইনপুট ফিল্টারিং
        if (filters.city) {
            filteredData = filteredData.filter(c => c.city.toLowerCase().includes(filters.city.toLowerCase()));
        }

        if (filters.minScore) {
            const minScoreInput = parseFloat(filters.minScore);
            if (!isNaN(minScoreInput)) {
                filteredData = filteredData.filter(c => parseFloat(c.creditScore) <= minScoreInput);
            }
        }
        if (filters.maxScore) {
            const maxScoreInput = parseFloat(filters.maxScore);
            if (!isNaN(maxScoreInput)) {
                filteredData = filteredData.filter(c => parseFloat(c.creditScore) >= 0 && parseFloat(c.creditScore) >= maxScoreInput);
            }
        }

        if (filters.amount) {
            const amountInput = parseFloat(filters.amount);
            if (!isNaN(amountInput)) {
                filteredData = filteredData.filter(c => parseFloat(c.loanAmount) >= 0 && parseFloat(c.loanAmount) <= amountInput);
            }
        }

        // 'Status' সিলেক্ট ইনপুট ফিল্টারিং যোগ করা হয়েছে
        if (filters.status) {
            filteredData = filteredData.filter(c => c.status === filters.status);
        }

        return filteredData;
    };

    const fetchData = (tab: "all" | "pending" | "approved" | "rejected") => {
        setLoading(true);
        setTimeout(() => {
            const filteredData = getDataByTab(tab);
            setData(filteredData);
            setLoading(false);
        }, 300);
    };

    useEffect(() => {
        fetchData(activeTab);
    }, [activeTab, filters, allClients]);

    const handleTabClick = (tab: "all" | "pending" | "approved" | "rejected") => {
        setActiveTab(tab);
        setFilters({ city: "", minScore: "", maxScore: "", amount: "", status: "" }); // নতুন ট্যাবে ক্লিক করলে সব ফিল্টার রিসেট হবে
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
                <button onClick={() => handleTabClick("approved")} className={` ${activeTab === "approved" ? 'text-red-950 font-bold' : ''}`}>Approve</button>
                <button onClick={() => handleTabClick("rejected")} className={` ${activeTab === "rejected" ? 'text-red-950 font-bold' : ''}`}>Reject</button>
            </div>
            <div className='border-t-2 mt-4'></div>
            {/* Filter Section (toggle) */}
            <div
                className={` mb-3 overflow-hidden transition-all duration-500 ${showFilter ? 'max-h-60 mt-4' : 'max-h-0'
                    }`}
            >
                <div className='flex flex-col gap-3 p-4 shadow-2xl rounded bg-gray-50'>
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
                            <label className='text-sm font-medium mb-1'>Min Score</label>
                            <input
                                type="number"
                                placeholder="minCredit"
                                className='input text-black bg-white border-gray-400'
                                value={filters.minScore}
                                onChange={(e) => setFilters({ ...filters, minScore: e.target.value })}
                            />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='text-sm font-medium mb-1'>Max Score</label>
                            <input
                                type="number"
                                placeholder="maxCredit"
                                className='input text-black bg-white border-gray-400'
                                value={filters.maxScore}
                                onChange={(e) => setFilters({ ...filters, maxScore: e.target.value })}
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

            <div className="overflow-x-auto  rounded">
                {loading ? (
                    <p className="p-4 text-center">Loading...</p>
                ) : (
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100 h-16">
                            <tr>
                                <th className="px-4 py-2 text-center">ID</th>
                                <th className="px-4 py-2 text-center">City</th>
                                <th className="px-4 py-2 text-center">Credit Score</th>
                                <th className="px-4 py-2 text-center">Amount Request</th>
                                <th className="px-4 py-2 text-center">Status</th>
                                <th className="px-4 py-2 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="text-center py-4">
                                        No data found
                                    </td>
                                </tr>
                            ) : (
                                data?.map((client, index) => (
                                    <tr key={index} className="shadow-sm h-16">
                                        <td className="px-4 py-2 text-center">{index + 1}</td>
                                        <td className="px-4 py-2 text-center">{client.city}</td>
                                        <td className="px-4 py-2 text-center">
                                            <span
                                                className={`${Number(client.creditScore) >= 80 ? "text-green-600" :
                                                    Number(client.creditScore) >= 60 ? "text-yellow-500" :
                                                        Number(client.creditScore) >= 40 ? "text-red-600" :
                                                            "text-gray-500"
                                                    }`}
                                            >

                                                {client.creditScore}/100
                                            </span>
                                            <div className='text-xs font-semibold'>
                                                {getCreditLevel(Number(client.creditScore))}
                                            </div>
                                        </td>

                                        <td className="px-4 py-2 text-center">{client.loanAmount}</td>
                                        <td className="px-4 py-2 text-center">
                                            <span className={`py-2 px-3 rounded-2xl font-bold text-center 
                                                    ${client.status === "approved" ? "text-green-500 bg-gray-200" : ""}
                                                    ${client.status === "pending" ? "text-yellow-600 bg-gray-200" : ""}
                                                    ${client.status === "rejected" ? "text-red-500 bg-gray-200" : ""}
                                                `}>
                                                {client.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-2 ">
                                            <MyModal client={client} />
                                        </td>

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