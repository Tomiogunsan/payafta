import { IVirtualCardProps } from '@interfaces/virtualCard.interface';
import BackArrow from '@assets/icons/backArrow.svg?react';
import { virtualCardPayment } from 'db/virtualCard';
import Button from '@components/shared/Button';

const Payment = ({
  currentStep,
  setCurrentStep,
  handleNext,
}: IVirtualCardProps) => {
  return (
    <div>
      <div className="flex ">
        <BackArrow
          className="mr-14 cursor-pointer"
          onClick={() => setCurrentStep(currentStep - 1)}
        />

        <h3 className="font-[600] text-[24px] leading-[30px] ml-20">Payment</h3>
      </div>
      <p className="text-subTextColor  text-[14px] lg:text-[16px] leading-[20px] pt-2">
        Verify the details below before completing the payment.
      </p>
      {virtualCardPayment.map((el, idx) => {
        return (
          <div key={idx} className="flex justify-between py-4">
            <p className="text-[#666] leading-[20px] text-[16px] font-[500]">
              {el.title}
            </p>
            <p className="text-[16px] text-[#333] leading-[20px] font-[500]">
              {el.name}
            </p>
          </div>
        );
      })}
      <div className="flex items-center justify-center mt-2">
        <Button
          className="bg-primary rounded-[48px] shadow-sm py-2 px-8"
          onClick={handleNext}
        >
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
};

export default Payment;
