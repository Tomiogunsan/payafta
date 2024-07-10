import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export type IWalletService = {
  icon: ReactNode;
  smallText: string;
  className?: string;
  onClick: () => void;
};

const WalletService = ({
  icon,
  smallText,
  className,
  onClick,
}: IWalletService) => {
  return (
    <div className={twMerge(className, 'p-6')} onClick={onClick}>
      {icon}
      <h3 className="pt-4 text-[18px] font-medium leading-5">{smallText}</h3>
    </div>
  );
};

export default WalletService;
