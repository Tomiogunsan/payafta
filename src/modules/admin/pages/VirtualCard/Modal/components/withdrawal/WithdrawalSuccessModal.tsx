import { ICreateCard } from '@interfaces/virtualCard.interface';
import SuccessIcon from '@assets/icons/successIcon.svg?react';
import Button from '@components/shared/Button';

const WithdrawalSuccessModal = ({ handleNext }: ICreateCard) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <SuccessIcon />
      <h3 className=" text-[18px] lg:text-[24px]  leading-[30px] font-[600]  text-mainTextColor">
        Withdrawal Successful
      </h3>
      <p className="text-[14px] leading-[20px] text-subTextColor py-4">
        Fund now available on your wallet balance.
      </p>

      <Button
        className="bg-[#1A1A1A] rounded-[48px] shadow-sm px-12 py-2"
        onClick={handleNext}
      >
        Done
      </Button>
    </div>
  );
};

export default WithdrawalSuccessModal;
