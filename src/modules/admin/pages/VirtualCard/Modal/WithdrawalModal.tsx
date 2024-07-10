import { IStepProps } from '@interfaces/virtualCard.interface';
import Withdrawal from './components/withdrawal/Withdrawal';
import WithdrawalSuccessModal from './components/withdrawal/WithdrawalSuccessModal';
import WithdrawalTransactionPin from './components/withdrawal/WithdrawalTransactionPin';
import { useState } from 'react';
import { setOpenModal } from 'features/modalPopUp/modalPopSlice';
import { useAppDispatch } from 'redux/hooks';

const WithdrawalModal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const dispatch = useAppDispatch();
  const handleNext = () => {
    if (currentStep < Object.keys(steps).length) {
      setCurrentStep(currentStep + 1);
    }
    if (currentStep === 3) {
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
      <WithdrawalTransactionPin
        currentStep={currentStep}
        handleNext={handleNext}
        setCurrentStep={setCurrentStep}
      />
    ),
    3: <WithdrawalSuccessModal handleNext={handleNext} />,
  };

  return (
    <div className="md:w-[500px] bg-colorWhite rounded-[8px] p-6 text-mainTextColor grid gap-y-4">
      {steps[currentStep]}
    </div>
  );
};

export default WithdrawalModal;
