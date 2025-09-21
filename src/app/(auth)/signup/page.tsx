'use client'; // এটি নিশ্চিত করে যে এই ফাইলটি একটি ক্লায়েন্ট কম্পোনেন্ট

import { useState } from 'react';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FaEnvelope, FaPhone, FaLock } from 'react-icons/fa';
import { FormData } from '@/components/interface';
import { useUserRegister } from '@/components/api/server/auth';
import FormInput from '@/components/custom/FromInput';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { mutate, status } = useUserRegister();
  const router=useRouter()

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      agreedToTerms: false,
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Registration successful!");
        router.push('/login')
      },
      onError: (err) => {
        if (err instanceof AxiosError) {
          const errorMessage = err.response?.data?.message || "Failed to register. Please try again.";
          toast.error(errorMessage);
        } else {
          toast.error("An unknown error occurred.");
        }
      },
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg border border-gray-300 rounded-lg bg-white shadow-2xl p-6 sm:p-8 transition-all duration-300">
        <h1 className="text-center text-red-950 font-bold text-2xl sm:text-3xl lg:text-4xl mb-6">Create Your Account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            IconComponent={FaEnvelope}
            register={register}
            errors={errors}
            rules={{ required: "Email is required" }}
          />

          <FormInput
            label="Phone"
            name="phone"
            type="tel" 
            placeholder="Enter your phone number"
            IconComponent={FaPhone}
            register={register}
            errors={errors}
            rules={{ required: "Phone number is required" }}
          />

          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="Create a password"
            IconComponent={FaLock}
            register={register}
            errors={errors}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            }}
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
          />

          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            IconComponent={FaLock}
            register={register}
            errors={errors}
            rules={{
              required: "Please confirm your password",
              validate: (value) => value === getValues("password") || "Passwords do not match"
            }}
            showPassword={showConfirmPassword}
            togglePasswordVisibility={toggleConfirmPasswordVisibility}
          />

          <div className="flex items-center mt-6">
            <input
              id="agreedToTerms"
              type="checkbox"
              {...register("agreedToTerms", { required: "You must agree to the terms" })}
              className="mr-2 h-4 w-4 text-red-950 focus:ring-red-950 border-gray-300 rounded"
            />
            <label htmlFor="agreedToTerms" className="text-sm font-medium text-gray-500">
              I agree to the <Link href="#" className="text-red-950 hover:underline">Privacy Policy</Link> and{' '}
              <Link href="#" className="text-red-950 hover:underline">Terms of Service</Link>
            </label>
          </div>
          {errors.agreedToTerms && <p className="text-red-600 text-sm mt-1">{errors.agreedToTerms.message}</p>}

          <button
            type="submit"
            disabled={status === 'pending'}
            className={`w-full bg-red-950 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-900 transition-all ${status === 'pending' ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {status === 'pending' ? 'Signing Up...' : 'Sign Up'}
          </button>

          <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
            <p className='text-black'>Already have an account?</p>
            <Link href="/login" className="text-red-950 font-semibold hover:underline">Sign In Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;