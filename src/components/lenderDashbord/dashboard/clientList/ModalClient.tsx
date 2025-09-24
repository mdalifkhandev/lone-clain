"use client";

import { Client } from "@/components/interface/profile";
import CreditScore from "@/components/profileDasbord/CreditScore";
import { getCreditScore } from "@/components/utils/getCreditScore";
import React from "react";
import { BsEye } from "react-icons/bs";
import CustomModal from "./CustomModal";
import { CiImport } from "react-icons/ci";

const MyModal: React.FC<{ client: Client }> = ({ client }) => {
    console.log(client);

    const annualIncome = client?.profileId?.financialInfo?.annualIncome;
    const electricityBill = client?.profileId?.financialInfo?.electricityBill;
    const existingLoanAmount = client?.profileId?.financialInfo?.existingLoanAmount;
    const mobileMoneyBalance = client?.profileId?.financialInfo?.mobileMoneyBalance;
    const valueOfLandOwnership = client?.profileId?.financialInfo?.valueOfLandOwnership;
    const totalIncome = ((annualIncome || 0) + (electricityBill || 0) + (mobileMoneyBalance || 0) + (valueOfLandOwnership || 0)) - (existingLoanAmount || 0);
    const creditInfo = getCreditScore(totalIncome);
    const factorsAffectingScore = {
        annualIncome,
        electricityBill,
        mobileMoneyBalance,
    }
    const openModal = () => {
        const modal = document.getElementById(`modal_${client?._id}`) as HTMLDialogElement | null;
        if (modal) {
            modal.showModal();
        }
    };

    return (
        <div>
            <button onClick={openModal}>
                <BsEye className="cursor-pointer text-2xl text-red-950" />
            </button>
            <dialog id={`modal_${client?._id}`} className="modal">
                <div className="modal-box w-11/12 max-w-5xl bg-white">
                    {/* Header */}
                    <div className="mb-4 md:mb-6 flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-4">
                        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-0">
                            Client Details
                        </h1>
                        <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded">
                            <CiImport className="text-2xl" /> Export
                        </button>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        {/* First part (2.5x) */}
                        <div className="md:">
                            <CustomModal client={client} />
                        </div>

                        {/* Second part */}
                        <div className="w-full md:w-[35%] bg-gray-200 p-4">
                            <CreditScore factorsAffectingScore={factorsAffectingScore} creditInfo={creditInfo} />
                        </div>
                    </div>


                    <div className="modal-action mt-4">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MyModal;
