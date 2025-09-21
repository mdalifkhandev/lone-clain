"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from '@/components/assets/logo.png';

const Home = () => <div>Home Content</div>;
const Profile = () => <div>Profile Content</div>;
const Settings = () => <div>Settings Content</div>;

const sidebarItems = [
    { label: "🏠 Home", component: Home },
    { label: "👤 Profile", component: Profile },
    { label: "⚙️ Settings", component: Settings },
];

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const ActiveComponent = sidebarItems[activeIndex].component;

    return (
        <div className="flex h-screen text-black">
            <aside className="w-64 h-screen bg-red-950 rounded-r-4xl text-white p-4">
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
                                        ? "bg-[#140d20] text-white font-bold" 
                                        : "hover:bg-[#140d20] hover:text-white text-gray-200"
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

            {/* Active Content */}
            <main style={{ flex: 1, padding: 20, backgroundColor: '#f5f5f5' }}>
                <ActiveComponent />
            </main>
        </div>
    );
};

export default Sidebar;
