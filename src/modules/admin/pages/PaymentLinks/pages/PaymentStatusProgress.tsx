import ArrowLeft from '@assets/icons/arrowLeft.svg?react';
import Summary from '../components/Summary';

const PaymentStatusProgress = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-2 ">
      <div className="grid gap-y-4 col-span-2 bg-[#fff] p-4 rounded-[8px]">
        <div className="flex">
          <ArrowLeft />
          <h3 className="text-[20px] leading-6 text-mainTextColor pl-2">
            Transaction Summary
          </h3>
        </div>
        <div className="text-[#666] text-[16px] leading-5 flex justify-between">
          <p>Transaction ID: 0006789</p>
          <p>November 3, 2023, 18:25</p>
        </div>
      </div>
      <div className=" bg-[#fff] p-4 rounded-[8px] grid gap-y-4">
        <Summary />
      </div>
    </div>
  );
};

export default PaymentStatusProgress;
