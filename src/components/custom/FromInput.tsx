'use client';

import { ElementType } from 'react';
import { UseFormRegister, FieldErrors, RegisterOptions, FieldValues, Path } from 'react-hook-form';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

interface FormInputProps<TFormValues extends FieldValues> {
  label: string;
  name: Path<TFormValues>;
  type: string;
  placeholder?: string;
  IconComponent: ElementType;
  register: UseFormRegister<TFormValues>;
  errors: FieldErrors<TFormValues>;
  rules?: RegisterOptions<TFormValues>; 
  showPassword?: boolean;
  togglePasswordVisibility?: () => void;
  defaultValue?: string;
  disabled?: boolean;
  readonly?: boolean;
}

const FormInput = <TFormValues extends FieldValues>({
  label,
  name,
  type = 'text',
  placeholder,
  IconComponent,
  register,
  errors,
  defaultValue,
  rules = {},
  showPassword,
  disabled,
  readonly,
  togglePasswordVisibility,
}: FormInputProps<TFormValues>) => {
  const isPasswordType = name === 'password' || name === 'confirmPassword'||name === 'newPassword';

  return (
    <div>
      <label htmlFor={name as string} className="block text-sm font-semibold text-red-900">{label}</label>
      <div className="relative mt-2">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <IconComponent />
        </div>
        <input
          id={name as string}
          type={isPasswordType && showPassword ? 'text' : type}
          {...register(name, rules)}
          className="w-full appearance-none outline-none border rounded-md py-2 px-4 pl-10 pr-10 text-sm font-medium focus:ring-2 focus:ring-red-950 focus:border-red-950 transition-all text-gray-900 placeholder-gray-500"
          placeholder={placeholder}
          defaultValue={defaultValue}
          disabled={disabled}
          readOnly={readonly}
        />
        {isPasswordType && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
      {errors[name] && <p className="text-red-600 text-sm mt-1">{(errors[name] as Error)?.message}</p>}
    </div>
  );
};

export default FormInput;