'use client';

import React, { useState } from "react";
import { MdOutlineEditNote } from "react-icons/md";
import { useAuthStore } from "../store/authStore";
import { toast } from "react-toastify";
import useSWR, { mutate } from "swr";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import FormInput from "../custom/FromInput";
import { useGetUser } from "../api/server/user";

interface PersonalInfo {
  firstName?: string;
  lastName?: string;
}

interface ContactInfo {
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}

interface ProfileData {
  phone?: string;
  personalInfo?: PersonalInfo;
  contactInfo?: ContactInfo;
}

interface User {
  _id: string;
  email: string;
}

interface IFormInput {
  'first-name': string;
  'last-name': string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zip: string;
}

const fetcher = (url: string) => axios.get(url).then(res => res.data.data);

const PersonalInformation = () => {
  const { user, isLoggedIn } = useAuthStore();
  const [updateProfile, setUpdateProfile] = useState<boolean>(false);
  const {data:userData}=useGetUser()
  const userLoginData=userData?.data.data
  

  const { data: profileInfo, error, isLoading } = useSWR<ProfileData>(
    isLoggedIn && (user as any)._id ? `/api/v1/profile/${(user as any)._id}` : null,
    fetcher
  );

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const handleUpdateProfile: SubmitHandler<IFormInput> = async (data) => {
    const updatedProfile: ProfileData = {
      phone: data.phone,
      personalInfo: {
        firstName: data['first-name'],
        lastName: data['last-name'],
      },
      contactInfo: {
        address: data.street,
        city: data.city,
        state: data.state,
        zipCode: data.zip,
      },
    };

    try {
      const response = await axios.patch(`/api/v1/profile/${(user as any)._id}`, updatedProfile);
      toast.success(response?.data?.message || "Profile updated successfully!");
      setUpdateProfile(false);
      mutate(`/api/v1/profile/${(user as any)._id}`);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to update profile.");
    }
  };

  return (
    <div>
      <div className='flex justify-between items-center py-2 bg-gray-200 px-5 rounded-sm'>
        <p className='font-semibold text-black text-md'>Personal Information</p>
        <button
          onClick={() => setUpdateProfile(true)}
          className={`${updateProfile ? "hidden" : "block"} text-sm text-black font-semibold cursor-pointer flex items-center gap-1`}
        >
          <MdOutlineEditNote size={25}/>Update Profile
        </button>
      </div>
      <form onSubmit={handleSubmit(handleUpdateProfile)} className='mt-5 md:space-y-3 space-y-1'>
        <div className='flex flex-col md:flex-row gap-3'>
          <div className='w-full md:w-1/2'>
            <FormInput
              label="First Name"
              name="first-name"
              type="text"
              defaultValue={profileInfo?.personalInfo?.firstName || ""}
              disabled={!updateProfile}
              errors={errors}
              register={register}
              IconComponent={() => <></>}
            />
          </div>
          <div className='w-full md:w-1/2'>
            <FormInput
              label="Last Name"
              name="last-name"
              type="text"
              defaultValue={profileInfo?.personalInfo?.lastName || ""}
              disabled={!updateProfile}
              errors={errors}
              register={register}
              IconComponent={() => <></>}
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-3'>
          <div className='w-full md:w-1/2'>
            <FormInput
              label="Email Address"
              name="email"
              type="email"
              defaultValue={userLoginData?.email || ""}
              disabled={true}
              errors={errors}
              register={register}
              IconComponent={() => <></>}
              readonly={true}
            />
          </div>
          <div className='w-full md:w-1/2'>
            <FormInput
              label="Phone Number"
              name="phone"
              type="tel"
              defaultValue={userLoginData?.phone || ""}
              disabled={!updateProfile}
              errors={errors}
              register={register}
              IconComponent={() => <></>}
              readonly={true}
            />
          </div>
        </div>
        <div className='w-full'>
          <FormInput
            label="Street Address"
            name="street"
            type="text"
            defaultValue={profileInfo?.contactInfo?.address || ""}
            disabled={!updateProfile}
            errors={errors}
            register={register}
            placeholder="12 street road"
            IconComponent={() => <></>}
          />
        </div>
        <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
          <div>
            <FormInput
              label="City"
              name="city"
              type="text"
              defaultValue={profileInfo?.contactInfo?.city || ""}
              disabled={!updateProfile}
              errors={errors}
              register={register}
              placeholder="New York"
              IconComponent={() => <></>}
            />
          </div>
          <div>
            <FormInput
              label="State"
              name="state"
              type="text"
              defaultValue={profileInfo?.contactInfo?.state || ""}
              disabled={!updateProfile}
              errors={errors}
              register={register}
              placeholder="NY"
              IconComponent={() => <></>}
            />
          </div>
          <div>
            <FormInput
              label="ZIP Code"
              name="zip"
              type="text"
              defaultValue={profileInfo?.contactInfo?.zipCode || ""}
              disabled={!updateProfile}
              errors={errors}
              register={register}
              placeholder="5010"
              IconComponent={() => <></>}
            />
          </div>
        </div>
        <div className={`${updateProfile ? "block" : "hidden"}`}>
          <div className="flex justify-center items-center mt-5">
            <button className="cursor-pointer bg-red-950 px-3 rounded-sm py-2 text-gray-200 text-sm font-semibold">Update Now</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;