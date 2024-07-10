import Logo from '@assets/svg/Logo.svg?react';
import Button from '@components/shared/Button';

import ControlledInput from '@components/shared/Input/ControlledInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { forgotPasswordSchema } from '../validation/authValidation';

const ForgotPassword = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(forgotPasswordSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSub = (data: string | any) => {
    console.log(data);
  };
  return (
    <div className=" w-full h-full">
      <div className="w-full h-full flex flex-col items-center justify-center pt-16 px-4">
        <div className="  ">
          <Logo />
          <h3 className="text-[24px] leading-[30px] font-bold text-[#1A1A1A] pt-16 pb-2">
            Forget password?
          </h3>
          <p className="text-[14px] leading-[18px] text-[#4D4D4D] lg:w-[500px]">
            Enter your email below, you will receive an email with link to reset
            your password in a few minutes.
          </p>
          <form className="pt-4" onSubmit={handleSubmit(handleSub)}>
            <ControlledInput
              type="email"
              label="Email"
              name="email"
              control={control}
            />
            <Button
              className="bg-primary w-full rounded-[48px] mx-2 mt-4 py-2"
              type="submit"
            >
              Send Recovery Link
            </Button>
          </form>
          <div className="flex items-center justify-center pt-4">
            <p className="text-[14px] text-[#4D4D4D] leading-[17px] mr-2">
              You don’t have an account?
            </p>
            <Link to="/signup" className="text-[14px] leading-5 text-[#1A1A1A]">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
