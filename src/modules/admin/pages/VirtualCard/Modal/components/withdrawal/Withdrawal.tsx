import Button from '@components/shared/Button';
import ControlledInput from '@components/shared/Input/ControlledInput';
import { ICreateCard } from '@interfaces/virtualCard.interface';
import { setOpenModal } from 'features/modalPopUp/modalPopSlice';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'redux/hooks';
import CloseIcon from '@assets/icons/closeIcon.svg?react';

const Withdrawal = ({ handleNext }: ICreateCard) => {
  const dispatch = useAppDispatch();
  const { control } = useForm();
  return (
    <div className="grid gap-y-4">
      <div className="flex justify-between">
        <h3 className="text-[24px] leading-7 font-semibold">
          CreateVirtualCard
        </h3>
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
          label="Amount to fund card (Minimum of ₦2,000)"
          name="amount"
          placeholder=" ₦"
          control={control}
          asteric
        />
        <p className="text-[12px] leading-[15px]">Card Balance: </p>
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
