import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export type IRecentPaymentOrTransactions = {
  icon?: ReactNode;
  text: string;
  smallText: string;

  amount: number;
  status: string;
  // status:
  //   | 'agreement'
  //   | 'payment'
  //   | 'delivery'
  //   | 'successful'
  //   | 'closed'
  //   | 'shipping';
};
function RecentPaymentOrTransactions(props: IRecentPaymentOrTransactions) {
  const { icon, text, smallText, status, amount } = props;
  const className = (() => {
    switch (status) {
      case 'successful':
        return ' text-[#999]';
      case 'agreement':
        return 'bg-[#E8FDEF] text-[#12BA4A]';
      case 'payment':
        return 'bg-[#FCE9E9] text-[#D42620]';
      case 'delivery':
        return 'bg-[#E6E7FE] text-[#070AC5]';
      case 'closed':
        return 'bg-[#F2F2F2] text-[#333]';
      case 'shipping':
        return 'bg-[#E6E7FE]  text-[#03045B] ';
      default:
        return 'text-red-400 bg-red-600';
    }
  })();

  return (
    <div className="flex justify-between items-center  py-6">
      <div className="flex gap-2">
        {icon && <div>{icon}</div>}
        <div>
          <p className="text-[16px] leading-5 text-[#010101] font-medium py-[4px]">
            {text}
          </p>
          <p className="text-[14px] leading-4 text-[#999] font-normal">
            {smallText}
          </p>
        </div>
      </div>
      <div className="">
        <p className="text-[16px] pl-4 leading-5 text-[#010101] font-bold py-[4px]">
          {amount}
        </p>
        <p
          className={twMerge(
            className,
            'text-[14px] leading-4 rounded-[20px] px-[10px] capitalize font-normal',
          )}
        >
          {status}
        </p>
      </div>
    </div>
  );
}

export default RecentPaymentOrTransactions;
