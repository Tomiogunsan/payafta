import SignupImage from '@assets/svg/signup.svg?react';

import AuthLayout from '@components/Layout/AuthLayout';
import Button from '@components/shared/Button';

import ModalBoxLayout from '@components/shared/ModalBoxLayout';
import RenderIf from '@components/shared/RenderIf';
import { setOpenModal } from 'features/modalPopUp/modalPopSlice';

import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import Verify from './components/Verify';

import TokenInput from '@components/shared/TokenInput';

const VerifyToken = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      token: ['', '', '', ''],
    },
  });
  const dispatch = useAppDispatch();
  const { modalType, openModal } = useAppSelector(state => state.modal);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onForm = (data: any) => {
    console.log(data);
    const payload = [...data.token];
    console.log(payload.join(''));
  };

  return (
    <div className="w-full ">
      <div className="flex flex-col lg:flex-row w-full md:items-center md:justify-center">
        <div className="hidden lg:flex lg:flex-[60%] ">
          <SignupImage className="w-full object-cover" />
        </div>
        <div className="flex flex-col  lg:flex-[40%] lg:pt-8  px-4 lg:px-0 ">
          <AuthLayout
            bigText="Verification"
            smallText="Enter the 4 digit sent to +2347011223344."
          >
            <p className="text-[16px] leading-[22px] text-[#333333] pt-8 pb-2">
              Enter Verification Code{' '}
            </p>
            <form onSubmit={handleSubmit(onForm)}>
              <TokenInput control={control} name="token" />
              <p className="text-[12px] leading-4 text-[#4D4D4D] text-center pt-2">
                Resend code in
              </p>
              <Button
                className="rounded-[48px] p-[14px] bg-primary text-[#fff]  mt-8 w-full"
                type="submit"
                onClick={() => {
                  dispatch(
                    setOpenModal({
                      openModal: true,
                      modalType: 'verify',
                    }),
                  );
                }}
              >
                Verify
              </Button>
            </form>
          </AuthLayout>
        </div>
      </div>
      <ModalBoxLayout openModalBox={openModal}>
        <RenderIf condition={modalType === 'verify'}>
          <Verify />
        </RenderIf>
      </ModalBoxLayout>
    </div>
  );
};

export default VerifyToken;
