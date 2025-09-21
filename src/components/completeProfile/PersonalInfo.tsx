"use client";

import React from "react";
import FormInput from "../custom/FromInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { parsonalInfo } from "../interface/profile";
import { toast } from "react-toastify";


type PersonalInfoProps = {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    setPersonalInfo: React.Dispatch<React.SetStateAction<parsonalInfo | null>>;
};

const PersonalInfo: React.FC<PersonalInfoProps> = ({ step, setStep, setPersonalInfo }) => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<parsonalInfo>()
    const handlePersonalInfo: SubmitHandler<parsonalInfo> = async (data) => {
        const genderMatch = data.gender === 'other' || data.gender === 'female' || data.gender === 'male'
        if (!genderMatch) {
            toast.error('gender is required')
            throw new Error('gender is required')
        }
        const personalInfo: parsonalInfo = {
            firstName: data.firstName,
            lastName: data.lastName,
            dateOfBirth: data.dateOfBirth,
            gender: data.gender,
        };
        setStep(step + 1);
        setPersonalInfo(personalInfo);
    };

    return (
        <div>
            <h2 className="text-xl font-semibold text-red-950 mb-3">Personal Information</h2>
            <form onSubmit={handleSubmit(handlePersonalInfo)} className="mt-5 md:space-y-3 space-y-1 text-black">
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="w-full md:w-1/2">
                        <FormInput
                            name="firstName"
                            label="First Name"
                            type="text"
                            placeholder="Enter your first name"
                            IconComponent={() => <></>}
                            errors={errors}
                            register={register}
                            rules={{ required: true }}
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <FormInput
                            name="lastName"
                            label="Last Name"
                            type="text"
                            placeholder="Enter your last name"
                            IconComponent={() => <></>}
                            errors={errors}
                            register={register}
                            rules={{ required: true }}
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3">
                    <div className="w-full md:w-1/2">
                        <FormInput
                            name="dateOfBirth"
                            label="Date of Birth"
                            type="date"
                            placeholder="Enter your birth date"
                            IconComponent={() => <></>}
                            errors={errors}
                            register={register}
                            rules={{ required: true }}
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label className="text-sm font-bold mt-1.5 text-red-950 block">Gender</label>
                        <select
                            {...register("gender", { required: true })}
                            name="gender"
                            className="appearance-none px-4 py-2 outline-none border border-black w-full rounded-md text-[15px]"
                            required
                        >
                            <option defaultValue='' >---Select---</option>
                            <option value="male" >Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        disabled={!isValid}
                        type="submit"
                        className="px-4 py-2 rounded-md bg-red-950 text-white disabled:opacity-50 cursor-pointer font-semibold transition hover:bg-red-800"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PersonalInfo;
