import Button from '@components/shared/Button';
import ControlledInput from '@components/shared/Input/ControlledInput';
import { IVirtualCardProps } from '@interfaces/virtualCard.interface';
import { useForm } from 'react-hook-form';
import BackArrow from '@assets/icons/backArrow.svg?react';

const WithdrawalTransactionPin = ({
  currentStep,
  setCurrentStep,
  handleNext,
}: IVirtualCardProps) => {
  const { control } = useForm();
  return (
    <div>
      <div className="flex ">
        <BackArrow
          className="mr-14 cursor-pointer"
          onClick={() => setCurrentStep(currentStep - 1)}
        />

        <h3 className="font-[600] text-[16px] lg:text-[24px] leading-[30px] lg:ml-8">
          Enter Transaction Pin
        </h3>
      </div>
      <p className="text-subTextColor text-[16px] leading-[20px] pt-2 text-center">
        Protect your payment
      </p>
      <form className="flex flex-col items-center py-4">
        <div className="flex w-full max-w-[360px] gap-[10px]">
          {Array.from({ length: 4 }).map((_digit, idx) => (
            <ControlledInput
              key={idx}
              type="text"
              name={`token.${idx}`}
              inputMode="numeric"
              autoComplete="one-time-code"
              control={control}
              className="w-full h-[40px] border-[1px] rounded-[5px] text-center font-bold text-[32px] leading-3"
            />
          ))}
        </div>
        <p className="text-center  text-primary py-8">Forgot Pin?</p>
      </form>

      <div className="flex justify-center items-center">
        <Button
          className="bg-primary rounded-[48px] shadow-sm py-2 px-8"
          onClick={handleNext}
        >
          Authorize Payment
        </Button>
      </div>
    </div>
  );
};

export default WithdrawalTransactionPin;
