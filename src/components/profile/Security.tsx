'use client';

import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { toast } from "react-toastify";

// 1. Define the TypeScript interfaces
// interface User {
//   _id?: string;
//   email: string;
// }

interface PasswordUpdateData {
  email: string;
  currentPassword?: FormDataEntryValue | null;
  newPassword?: FormDataEntryValue | null;
  confirmNewPassword?: FormDataEntryValue | null;
}

const Security = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState<boolean>(false);

  // 2. Use a state management store for authentication
  const { user } = useAuthStore();
  const email = user?.email;

  const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const currentPassword = form.get("current-password");
    const newPassword = form.get("new-password");
    const confirmNewPassword = form.get("confirm-new-password");

    if (newPassword !== confirmNewPassword) {
      return toast.error("New password and confirm new password do not match.");
    }
    
    if(!currentPassword || !newPassword || !confirmNewPassword){
        return toast.error("All password fields are required.");
    }

    const newUpdatedPassword: PasswordUpdateData = {
      email: email as string,
      currentPassword,
      newPassword,
      confirmNewPassword,
    };

    try {
      const response = await axios.patch("/api/v1/user/security", newUpdatedPassword);
      toast.success(response.data?.message);
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      toast.error(err?.response?.data?.message || "Failed to change password.");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center py-2 bg-gray-200 px-5 rounded-sm">
        <p className="font-semibold text-md">Security</p>
      </div>
      <form onSubmit={handleChangePassword} className="mt-5 md:space-y-3 space-y-1 md:px-10">
        <div className="relative">
          <label className="text-sm font-semibold text-red-950">Current Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="current-password"
            className="w-full appearance-none outline-none border border-gray-200 rounded-sm py-2 px-4 text-sm font-medium"
            placeholder="....................."
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-[37px] cursor-pointer"
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        </div>
        <div className="relative">
          <label className="text-sm font-semibold text-red-950">New Password</label>
          <input
            type={showNewPassword ? "text" : "password"}
            name="new-password"
            className="w-full appearance-none outline-none border border-gray-200 rounded-sm py-2 px-4 text-sm font-medium"
            placeholder="....................."
            required
          />
          <span
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute right-2 top-[37px] cursor-pointer"
          >
            {showNewPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        </div>
        <div className="relative">
          <label className="text-sm font-semibold text-red-900">Confirm New Password</label>
          <input
            type={showConfirmNewPassword ? "text" : "password"}
            name="confirm-new-password"
            className="w-full appearance-none outline-none border border-gray-200 rounded-sm py-2 px-4 text-sm font-medium"
            placeholder="....................."
            required
          />
          <span
            onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
            className="absolute right-2 top-[37px] cursor-pointer"
          >
            {showConfirmNewPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        </div>
        <div className="flex justify-center items-center mt-4 md:mt-0">
          <button className="cursor-pointer bg-red-950 px-3 rounded-sm py-2 text-gray-200 text-sm font-semibold">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Security;