import Logo from '@assets/svg/Logo.svg?react';
import Button from '@components/shared/Button';
import ControlledInput from '@components/shared/Input/ControlledInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { createNewPasswordSchema } from '../validation/authValidation';
import EyeClosed from '@assets/icons/eyeClosed.svg?react';
import EyeOpen from '@assets/icons/eyeOpen.svg?react';
import { useState } from 'react';

const instructions = [
  'minimum 8 characters',
  'one special character',
  'one number',
  'one uppercase character',
  'one lowercase character',
];

const CreateNewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      password: '',
      confirmpassword: '',
    },
    resolver: yupResolver(createNewPasswordSchema),
  });

  const handleShowPassword = (field: string) => {
    if (field === 'showPassword') {
      setShowPassword(!showPassword);
    } else if (field === 'showNewPassword') {
      setShowNewPassword(!showNewPassword);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSub = (data: string | any) => {
    console.log(data);
  };

  return (
    <div className=" w-full h-full">
      <div className="w-full h-full flex flex-col md:items-center md:justify-center pt-16 px-4">
        <div className="  ">
          <Logo />
          <h3 className="text-[24px] leading-[30px] font-bold text-[#1A1A1A] pt-16 pb-2">
            Create Password
          </h3>
          <p className="text-[14px] leading-[18px] text-[#4D4D4D] lg:w-[500px]">
            Passwords must be at least 6 characters long.
          </p>
          <form className="pt-4" onSubmit={handleSubmit(handleSub)}>
            <ControlledInput
              type={showPassword ? 'text' : 'password'}
              label="New Password"
              name="password"
              control={control}
              endAdornment={
                showPassword ? (
                  <EyeOpen onClick={() => handleShowPassword('showPassword')} />
                ) : (
                  <EyeClosed
                    onClick={() => handleShowPassword('showPassword')}
                  />
                )
              }
            />
            <div className="pb-4">
              {instructions.map(el => {
                return (
                  <div key={el} className="flex items-baseline pl-4 ">
                    <div className="rounded-full bg-[#999999]  border-[#999999] border-[1px] h-[4px] w-[4px] " />
                    <p className="ml-2 text-[12px] leading-4 text-[#999999]">
                      {el}
                    </p>
                  </div>
                );
              })}
            </div>
            <ControlledInput
              type={showNewPassword ? 'text' : 'password'}
              label="Confirm Password"
              name="confirmpassword"
              control={control}
              endAdornment={
                showNewPassword ? (
                  <EyeOpen
                    onClick={() => handleShowPassword('showNewPassword')}
                  />
                ) : (
                  <EyeClosed
                    onClick={() => handleShowPassword('showNewPassword')}
                  />
                )
              }
            />
            <Button
              className="bg-primary w-full rounded-[48px] mx-2 mt-4 py-2"
              type="submit"
            >
              Change Password
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
