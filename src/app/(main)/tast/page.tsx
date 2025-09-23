"use client";

import React, { useState, useEffect } from "react";

type Client = {
  name: string;
  email: string;
  city: string;
  status: "pending" | "approved" | "rejected";
};

const ClientList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "pending" | "approve" | "reject">("all");
  const [data, setData] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const allClients: Client[] = [
    { name: "Jon Doe", email: "jon@example.com", city: "Dhaka", status: "approved" },
    { name: "Asad Khan", email: "asad@example.com", city: "Thakurgaon", status: "pending" },
    { name: "Alice Smith", email: "alice@example.com", city: "Chittagong", status: "rejected" },
    { name: "Bob Brown", email: "bob@example.com", city: "Dhaka", status: "approved" },
  ];

  const getDataByTab = (tab: "all" | "pending" | "approve" | "reject"): Client[] => {
    switch (tab) {
      case "pending":
        return allClients.filter(c => c.status === "pending");
      case "approve":
        return allClients.filter(c => c.status === "approved");
      case "reject":
        return allClients.filter(c => c.status === "rejected");
      default:
        return allClients;
    }
  };

  const fetchData = (tab: "all" | "pending" | "approve" | "reject") => {
    setLoading(true);
    setTimeout(() => {
      setData(getDataByTab(tab));
      setLoading(false);
    }, 300); 
  };

  useEffect(() => {
    fetchData("all"); 
  }, []);

  const handleTabClick = (tab: "all" | "pending" | "approve" | "reject") => {
    setActiveTab(tab);
    fetchData(tab);
  };

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => handleTabClick("all")}
          className={`px-4 py-2 rounded ${activeTab === "all" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          All Client
        </button>
        <button
          onClick={() => handleTabClick("pending")}
          className={`px-4 py-2 rounded ${activeTab === "pending" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Pending
        </button>
        <button
          onClick={() => handleTabClick("approve")}
          className={`px-4 py-2 rounded ${activeTab === "approve" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Approve
        </button>
        <button
          onClick={() => handleTabClick("reject")}
          className={`px-4 py-2 rounded ${activeTab === "reject" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Reject
        </button>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto border rounded">
        {loading ? (
          <p className="p-4 text-center">Loading...</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">City</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-4">
                    No data found
                  </td>
                </tr>
              ) : (
                data.map((client, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{client.name}</td>
                    <td className="px-4 py-2">{client.email}</td>
                    <td className="px-4 py-2">{client.city}</td>
                    <td className="px-4 py-2">{client.status}</td>
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
