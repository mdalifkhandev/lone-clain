"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from '@/components/assets/logo.png';
import Main from "../dashboard/Main";


const Settings = () => <div>Settings Content</div>;

const sidebarItems = [
    { label: "Dashboard", component: Main },
    { label: "Settings", component: Settings },
];

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const ActiveComponent = sidebarItems[activeIndex].component;

    return (
        <div className="flex">
        
            {/* সাইডবারের জন্য পরিবর্তিত কোড */}
            <aside className="w-64 h-screen bg-red-950 rounded-r-4xl text-white p-4 fixed top-0 left-0">
                <div className="flex justify-center mb-4">
                    <Image src={logo} alt="logo" className="bg-white p-2 rounded-2xl" />
                </div>
                <ul>
                    {sidebarItems.map((tab, index) => (
                        <li key={index} className="mb-2">
                            <button
                                onClick={() => setActiveIndex(index)}
                                className={`
                                    w-full text-left px-4 py-2 rounded-md
                                    ${activeIndex === index 
                                        ? "bg-gray-900 text-white font-bold" 
                                        : "hover:bg-gray-900 hover:text-white text-gray-200"
                                    }
                                    transition-colors duration-200
                                `}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* মেইন কন্টেন্টের জন্য পরিবর্তিত কোড */}
            <main className="ml-64 flex-1 p-5 bg-gray-100">
                <ActiveComponent />
            </main>
        </div>
    );
};

export default Sidebar;