import { IStepProps } from '@interfaces/dashboard.interface';
import { useState } from 'react';

import CreateVirtualCard from './components/CreateVirtualCard';
import Payment from './components/Payment';
import CreateCardTransactionPin from './components/CreateCardTransactionPin';
import CreateCardSuccess from './components/CreateCardSuccess';

import { IVirtualCardModalProps } from '@interfaces/virtualCard.interface';

const CreateVirtualCardModal = ({ setCreateCard }: IVirtualCardModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < Object.keys(steps).length) {
      setCurrentStep(currentStep + 1);
    }
  };
  const steps: IStepProps = {
    1: <CreateVirtualCard handleNext={handleNext} />,
    2: (
      <Payment
        currentStep={currentStep}
        handleNext={handleNext}
        setCurrentStep={setCurrentStep}
      />
    ),
    3: (
      <CreateCardTransactionPin
        currentStep={currentStep}
        handleNext={handleNext}
        setCurrentStep={setCurrentStep}
      />
    ),
    4: <CreateCardSuccess setCreateCard={setCreateCard} />,
  };

  return (
    <div className="md:w-[500px] bg-colorWhite rounded-[8px] p-6 text-mainTextColor grid gap-y-4">
      {steps[currentStep]}
    </div>
  );
};

export default CreateVirtualCardModal;
