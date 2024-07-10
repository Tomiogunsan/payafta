import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export type IBalanceProps = {
  icon: ReactNode;
  bigText: string;
  amount: number;

  className: string;
};

const Balance = ({ className, amount, bigText, icon }: IBalanceProps) => {
  return (
    <div
      className={twMerge(
        className,
        'h-[120px] border-[1px] rounded-[8px] border-[#f2f2f2] shadow-sm p-8',
      )}
    >
      <div className="flex items-center">
        <p className="pr-2 text-[14px] leading-4">{bigText}</p>
        {icon}
      </div>
      <h3 className="font-[600] leading-7 text-[24px] mt-4">
        ₦{amount.toFixed(2)}
      </h3>
    </div>
  );
};

export default Balance;
