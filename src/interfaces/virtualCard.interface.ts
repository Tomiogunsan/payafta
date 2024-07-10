export type IStepProps = Record<number, React.ReactNode>;

export type IVirtualCardProps = {
  currentStep: number;
  handleNext: () => void;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export type ICreateCard = {
  handleNext: () => void;
};

export type IVirtualCardModalProps = {
  setCreateCard: React.Dispatch<React.SetStateAction<boolean>>;
};
