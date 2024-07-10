import Button from '@components/shared/Button';
import SuccessIcon from '@assets/icons/successIcon.svg?react';
import { IWithdrawal } from '@interfaces/dashboard.interface';

const WithdrawalSuccess = ({ handleNext }: IWithdrawal) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <SuccessIcon />
      <h3 className=" text-[18px] lg:text-[24px] py-4 leading-[30px] font-[600]  text-mainTextColor">
        Withdrawal Successful
      </h3>
      <p className="text-[14px] leading-[20px] text-subTextColor ">
        You sent ₦400,000.00 to CHUKWUKA BASSEY MICHELLE
      </p>
      <p className="text-[14px] leading-[20px] text-subTextColor pb-4">
        Sterling Bank Plc.
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

export default WithdrawalSuccess;
