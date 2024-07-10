import { useState } from 'react';
import Withdrawal from './components/Withdrawal';
import TransactionPin from './components/TransactionPin';
import WithdrawalSuccess from './components/WithdrawalSuccess';
import ConfirmPayment from './components/ConfirmPayment';

import { setOpenModal } from 'features/modalPopUp/modalPopSlice';
import { useAppDispatch } from 'redux/hooks';
import { IStepProps } from '@interfaces/dashboard.interface';

const WithdrawFundModal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const dispatch = useAppDispatch();

  const handleNext = () => {
    if (currentStep < Object.keys(steps).length) {
      setCurrentStep(currentStep + 1);
    }
    if (currentStep === 4) {
      dispatch(
        setOpenModal({
          openModal: false,
          modalType: '',
        }),
      );
    }
  };
  const steps: IStepProps = {
    1: <Withdrawal handleNext={handleNext} />,
    2: (
      <ConfirmPayment
        currentStep={currentStep}
        handleNext={handleNext}
        setCurrentStep={setCurrentStep}
      />
    ),
    3: (
      <TransactionPin
        currentStep={currentStep}
        handleNext={handleNext}
        setCurrentStep={setCurrentStep}
      />
    ),
    4: <WithdrawalSuccess handleNext={handleNext} />,
  };

  return (
    <div className="md:w-[500px] bg-colorWhite rounded-[8px] p-6 text-mainTextColor grid gap-y-4">
      {steps[currentStep]}
    </div>
  );
};

export default WithdrawFundModal;
