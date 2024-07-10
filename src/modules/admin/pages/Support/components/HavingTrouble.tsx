import Button from '@components/shared/Button';
import RightAccordion from '@assets/icons/rightAccordion.svg?react';
import { useAppDispatch } from 'redux/hooks';
import { setOpenModal } from 'features/modalPopUp/modalPopSlice';

const HavingTrouble = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col items-center justify-center pt-14 ">
      <div className="lg:w-[400px]  rounded-[8px] flex flex-col items-center ">
        <div className="border p-4">
          <h3 className="text-[24px] leading-7 text-mainTextColor text-center">
            Having Trouble?
          </h3>
          <p className="text-center   text-[14px] lg:text-[16px] text-[#999] font-[500] leading-5 py-2">
            Explore common issues below or select 'Other' for personalized
            assistance.
          </p>
          <div className=" pt-4 grid gap-y-2">
            <p className="text-[16px] leading-5 font-medium text-mainTextColor">
              Email
            </p>
            <p className=" text-[16px] text-[#999] font-[400] leading-5 ">
              Support@payafta.com
            </p>
          </div>
          <div className=" pt-4 grid gap-y-2">
            <p className="text-[16px] leading-5 font-medium text-mainTextColor">
              Phone
            </p>
            <p className=" text-[16px] text-[#999] font-[400] leading-5 pb-4">
              07066995653
            </p>
          </div>
          <div className="lg:w-[320px] flex items-center justify-center lg:pl-12">
            <Button
              className="w-full bg-primary text-[#fff] rounded-[48px] py-[10px] "
              onClick={() =>
                dispatch(
                  setOpenModal({ modalType: 'messageSent', openModal: true }),
                )
              }
            >
              Contact Us
              <RightAccordion />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HavingTrouble;
