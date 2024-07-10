import Logo from '@assets/svg/Logo.svg?react';
import ResetPassword from '@assets/svg/reset-password 1.svg?react';
import Button from '@components/shared/Button';
import RightArrow from '@assets/icons/rightAccordion.svg?react';
import { Link } from 'react-router-dom';

//  import { useForm } from 'react-hook-form';

const CreatePasswordSuccess = () => {
  // const {control, handleSubmit} = useForm({
  //   defaultValues:{
  //     phone: ''
  //   }
  // })

  // const handleSub = (data) => {
  //   console.log(data)
  // }
  // onSubmit={handleSubmit(handleSub)}
  return (
    <div className=" w-full h-full">
      <div className="w-full h-full flex flex-col items-center justify-center pt-16 px-4">
        <div className="  ">
          <Logo />
          <div className="flex flex-col items-center justify-center  w-full">
            <ResetPassword />
            <h3 className=" text-[22px] lg:text-[24px] leading-[30px] font-bold text-[#1A1A1A] pt-16 pb-2">
              Password Change Successful
            </h3>
            <p className="text-[14px] leading-[18px] text-[#4D4D4D] pb-4">
              Please return to the login page to sign in with your new password.
            </p>
            <Link to="/signin" className="w-full">
              <Button
                className="bg-primary w-full rounded-[48px] mx-2 mt-4 py-2"
                type="submit"
              >
                Back to Login
                <RightArrow />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <form className="w-1/2">
        {/* <ControlledPhoneNumberInput label='phone' name='phone' control={control}/> */}
        <button type="submit">click</button>
      </form>
    </div>
  );
};

export default CreatePasswordSuccess;
