"use client";

import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { contactInfo } from "../interface/profile";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../custom/FromInput";

interface ContactInfoProps {
  step: number;
  setStep: (step: number) => void;
  setContactInfo: (data: contactInfo) => void;
  contact:contactInfo
}



const ContactInfo: React.FC<ContactInfoProps> = ({
  step,
  setStep,
  setContactInfo,
  contact
}) => {
  const { register, handleSubmit, formState: { errors,isValid } } = useForm<contactInfo>()
  const handleContactInfo: SubmitHandler<contactInfo> = (data) => {
    const contactInfo = {
      address: data.address,
      city: data.city,
      state: data.state,
      zipCode: data.zipCode,
    };
    setStep(step + 1);
    setContactInfo(contactInfo);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-red-950 mb-3">
        Contact Information
      </h2>
      <form
        onSubmit={handleSubmit(handleContactInfo)}
        className="mt-5 md:space-y-3 space-y-1"
      >
        <div className="w-full">
          <FormInput
            name="address"
            type="text"
            label="Address"
            defaultValue={contact?.address||''}
            errors={errors}
            register={register}
            IconComponent={()=><></>}
             rules={{required:true}}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
          <div>
            <FormInput
            name="city"
            label="City"
            type="text"
            defaultValue={contact?.city||''}
            errors={errors}
            register={register}
            IconComponent={()=><></>}
             rules={{required:true}}
            />
          </div>
          <div>
            <FormInput
            name="state"
            label="State"
            type="text"
            defaultValue={contact?.state||''}
            errors={errors}
            register={register}
            IconComponent={()=><></>}
             rules={{required:true}}
            />
          </div>
          <div>
            <FormInput
              name="zipCode"
              label="Zip Code"
              type="number"
              defaultValue={contact?.zipCode||''}
              errors={errors}
              register={register}
              IconComponent={()=><></>}
              rules={{required:true}}
            />
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="px-4 py-2 rounded bg-gray-400 disabled:opacity-50 flex text-black items-center gap-2 cursor-pointer"
          >
            <MdArrowBackIosNew /> Back
          </button>
          <button
          disabled={!isValid}
            type="submit"
            className="px-4 py-2 rounded bg-red-950 text-white disabled:opacity-50 cursor-pointer"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactInfo;
