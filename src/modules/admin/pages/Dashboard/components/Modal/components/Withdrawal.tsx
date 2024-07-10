import CloseIcon from '@assets/icons/closeIcon.svg?react';
import { setOpenModal } from 'features/modalPopUp/modalPopSlice';
import { useAppDispatch } from 'redux/hooks';

import Button from '@components/shared/Button';
import { useForm } from 'react-hook-form';
import ControlledInput from '@components/shared/Input/ControlledInput';
import { IWithdrawal } from '@interfaces/dashboard.interface';

const Withdrawal = ({ handleNext }: IWithdrawal) => {
  const dispatch = useAppDispatch();
  const { control } = useForm();
  return (
    <div className="grid gap-y-4">
      <div className="flex justify-between">
        <h3 className="text-[24px] leading-7 font-semibold">Withdrawal</h3>
        <CloseIcon
          onClick={() =>
            dispatch(
              setOpenModal({
                openModal: false,
                modalType: '',
              }),
            )
          }
        />
      </div>

      <form>
        <ControlledInput
          label="Amount to withdraw"
          name="amount"
          placeholder=" ₦"
          control={control}
        />
        <p className="text-[12px] leading-[15px]">Available Balance: </p>
        <h3 className="text-[14px] leading-[17px] font-semibold pt-6 pb-2">
          Settlement Account
        </h3>
        <div className="p-4 rounded-[8px] border-[2px] bg-[#f8f8f8] border-[#f2f2f2] mb-4">
          <p>Bank Name</p>
          <h3 className="text-[24px] font-[600] leading-[30px] text-mainTextColor">
            0011223344
          </h3>
          <p>Account Name</p>
        </div>
      </form>
      <Button
        className="bg-primary rounded-[48px] shadow-sm py-[10px] mx-12"
        onClick={handleNext}
      >
        Proceed
      </Button>
    </div>
  );
};

export default Withdrawal;
