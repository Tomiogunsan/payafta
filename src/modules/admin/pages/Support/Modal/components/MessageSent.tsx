import Button from '@components/shared/Button';
import SuccessIcon from '@assets/icons/successIcon.svg?react';
import { setOpenModal } from 'features/modalPopUp/modalPopSlice';
import { useAppDispatch } from 'redux/hooks';

const MessageSent = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="w-full lg:w-[481px] rounded-[8px] bg-[#fff] p-4">
      <div className="flex flex-col items-center justify-center ">
        <SuccessIcon />
        <h3 className=" text-[18px] lg:text-[24px]  leading-[30px] font-[600]  text-mainTextColor">
          Message Sent
        </h3>
        <p className="text-center text-[14px] leading-[20px] text-subTextColor py-4">
          Your message has been sent! Keep an eye on your email for valuable
          feedback from our dedicated representative.
        </p>

        <Button
          className="bg-[#1A1A1A] rounded-[48px] shadow-sm px-12 py-2"
          onClick={() =>
            dispatch(setOpenModal({ modalType: '', openModal: false }))
          }
        >
          Done
        </Button>
      </div>
    </div>
  );
};

export default MessageSent;
