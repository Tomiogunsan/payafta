import CloseIcon from '@assets/icons/closeIcon.svg?react';
import CopyIcon from '@assets/icons/copyIcon.svg?react';
import { setOpenModal } from 'features/modalPopUp/modalPopSlice';
import { useAppDispatch } from 'redux/hooks';

const FundVirtualCardModal = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="md:w-[500px] bg-colorWhite rounded-[8px] p-6 text-mainTextColor grid gap-y-4">
      <div className="flex justify-between">
        <h3 className="text-[24px] leading-7 font-semibold">
          Fund Virtual Card
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
      <p className="text-subTextColor text-[16px] leading-5 font-normal ">
        This works like a regular bank account number. You can transfer to the
        account below and the funds will be credited to your wallet.
      </p>
      <div className="flex flex-col items-center py-4">
        <p className="text-subTextColor">Bank name:</p>
        <h3 className="text-[18px] leading-[22px] text-[#1A1A1A] font-[600]">
          STERLING BANK
        </h3>
        <p className="text-subTextColor mt-4">Account Number:</p>
        <div className="flex bg-[#F8F8F8] px-2">
          <h3 className="text-[18px] leading-[22px] text-[#1A1A1A] font-[600]  pr-2">
            0099881122
          </h3>
          <CopyIcon />
        </div>
        <p className="text-subTextColor pt-4">Account Name:</p>
        <h3 className="text-[18px] leading-[22px] text-[#1A1A1A] font-[600]">
          Paul Simeon/STERLING BANK
        </h3>
      </div>
    </div>
  );
};

export default FundVirtualCardModal;
