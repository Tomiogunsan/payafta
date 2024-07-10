// import SignupImage from '@assets/svg/signup.svg?react';
import AuthLayout from '@components/Layout/AuthLayout';
import { yupResolver } from '@hookform/resolvers/yup';

import { signupSchema } from '../validation/authValidation';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import ControlledInput from '@components/shared/Input/ControlledInput';
import EyeOpen from '@assets/icons/eyeOpen.svg?react';
import EyeClosed from '@assets/icons/eyeClosed.svg?react';

import { Link } from 'react-router-dom';
import Button from '@components/shared/Button';
import { ISignupInput } from '@interfaces/auth.interface';
import ControlledPhoneNumberInput from '@components/shared/InputPhoneNumber/ControlledPhoneNumberInput';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      confirmpassword: '',
    },
    resolver: yupResolver(signupSchema),
  });

  const handleShowPassword = (field: boolean) => {
    if (field === showPassword) {
      setShowPassword(!showPassword);
    } else if (field === showConfirmPassword) {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  function handle(data: ISignupInput) {
    console.log(data);
  }
  return (
    <div className="w-full ">
      <div className="flex flex-col lg:flex-row w-full justify-center">
        <div className="hidden lg:flex lg:flex-[80%]  bg-gradient-to-br from-blue-900 to-primary ">
          {/* <SignupImage className="w-full object-cover" /> */}t
        </div>
        <div className="  flex  flex-col lg:flex-[40%]   px-4 lg:px-0  h-[100vh]">
          <AuthLayout
            bigText="Sign up"
            checkbox
            checkboxText="By continuing, you/re agreeing to our customer terms of service, privacy policy and cookie policy"
            className="lg:justify-center lg:items-center"
          >
            <div className="flex pt-2 items-baseline">
              <p className="text-[14px] leading-4">Already registered?</p>
              <Link
                to="/signin"
                className="ml-2 text-[14px] leading-5 font-semibold"
              >
                Sign in
              </Link>
            </div>
            <form onSubmit={handleSubmit(handle, err => console.log(err))}>
              <ControlledInput
                label="First Name"
                type="text"
                name="firstname"
                control={control}
              />
              <ControlledInput
                label="Last Name"
                type="text"
                name="lastname"
                control={control}
              />
              <ControlledInput
                label="Email"
                type="email"
                name="email"
                control={control}
              />
              <ControlledPhoneNumberInput
                name="phone"
                control={control}
                label="Phone Number"
              />

              <ControlledInput
                label="Password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                control={control}
                endAdornment={
                  showPassword ? (
                    <EyeOpen onClick={() => handleShowPassword(showPassword)} />
                  ) : (
                    <EyeClosed
                      onClick={() => handleShowPassword(showPassword)}
                    />
                  )
                }
              />
              <ControlledInput
                label="Confirm Password"
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmpassword"
                control={control}
                endAdornment={
                  showConfirmPassword ? (
                    <EyeOpen
                      onClick={() => handleShowPassword(showConfirmPassword)}
                    />
                  ) : (
                    <EyeClosed
                      onClick={() => handleShowPassword(showConfirmPassword)}
                    />
                  )
                }
              />
              <Button
                className="rounded-[48px] p-[14px] bg-primary text-[#fff]  mt-8 w-full"
                type="submit"
              >
                Sign up
              </Button>
            </form>
          </AuthLayout>
        </div>
      </div>
    </div>
  );
};

export default Signup;
