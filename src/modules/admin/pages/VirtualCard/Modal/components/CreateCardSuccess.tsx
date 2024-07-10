import SuccessIcon from '@assets/icons/successIcon.svg?react';
import Button from '@components/shared/Button';
import { IVirtualCardModalProps } from '@interfaces/virtualCard.interface';
import { setOpenModal } from 'features/modalPopUp/modalPopSlice';
import { useAppDispatch } from 'redux/hooks';

const CreateCardSuccess = ({ setCreateCard }: IVirtualCardModalProps) => {
  const dispatch = useAppDispatch();
  const closeModal = () => {
    dispatch(
      setOpenModal({
        openModal: false,
        modalType: '',
      }),
    );
    setCreateCard(true);
  };
  return (
    <div className="flex flex-col items-center justify-center ">
      <SuccessIcon />
      <h3 className=" text-[18px] lg:text-[24px]  leading-[30px] font-[600]  text-mainTextColor">
        Card Created
      </h3>
      <p className="text-[14px] leading-[20px] text-subTextColor py-4">
        Your virtual card is now active.
      </p>

      <Button
        className="bg-[#1A1A1A] rounded-[48px] shadow-sm px-12 py-2"
        onClick={closeModal}
      >
        Done
      </Button>
    </div>
  );
};

export default CreateCardSuccess;
