export type IStepProps = Record<number, React.ReactNode>;

export type IWithdrawalProps = {
  currentStep: number;
  handleNext: () => void;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export type IWithdrawal = {
  handleNext: () => void;
};
