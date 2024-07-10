import Logo from '@assets/svg/Logo.svg?react';
import { useState } from 'react';
import PersonalKYC from './components/PersonalKYC/PersonalKYC';
import SettlementKYC from './components/SettlementKYC/SettlementKYC';
import TransactionPIN from './components/TransactionPIN/TransactionPIN';
import Button from '@components/shared/Button';
import GettingStartedModal from './components/GettingStartedModal';
import { IFormCheck } from '@interfaces/auth.interface';

// type Props = Record<number, React.ReactNode>;
// [key: number]: {React.ReactNode};

const GetStarted = () => {
  const [formCheck, setFormCheck] = useState<IFormCheck>({
    isDone: [],
    isActive: 1,
  });
  const handleNext = () => {
    if (formCheck.isActive <= 3) {
      setFormCheck({
        ...formCheck,
        isActive:
          formCheck.isActive !== 3
            ? formCheck.isActive + 1
            : formCheck.isActive,
        isDone: [...formCheck.isDone, formCheck.isActive],
      });
    }
  };

  return (
    <div className="w-full h-screen  bg-[#f9f9f9] p-4 lg:p-0">
      <div className="flex flex-col lg:items-center lg:justify-center pt-12">
        <Logo />
        <div className=" w-full lg:w-[638px] lg:h-[518px] rounded-[8px] bg-[#fff] mt-16 flex flex-col ">
          <div className="h-[60px] flex justify-between m-4">
            <h3 className="text-[16px] text-[#010101] leading-5 font-semibold">
              Verification Needed
            </h3>
            <p className="text-[14px] text-[#4D4D4D] font-medium leading-4">
              {formCheck.isActive}/ 3 Complete
            </p>
          </div>
          <PersonalKYC formCheck={formCheck} />
          <SettlementKYC formCheck={formCheck} />
          <TransactionPIN formCheck={formCheck} />
          <Button
            className="bg-primary rounded-[48px] p-4 md:mx-28"
            disabled={formCheck.isDone.length !== 3}
          >
            Submit Verification
          </Button>
        </div>
      </div>
      <GettingStartedModal handleNext={handleNext} />
    </div>
  );
};

export default GetStarted;
