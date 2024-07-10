import { twMerge } from 'tailwind-merge';
import { IPageHeaderProps } from './interface';

const PageHeader = ({
  bigText,
  smallText,
  icon,
  onClick,
  className,
  card,
}: IPageHeaderProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-between ">
      <div>
        <h1
          className={twMerge(
            className,
            'text-[20px] leading-[25px] font-semibold text-mainTextColor ',
          )}
        >
          {bigText}
        </h1>
      </div>
      {card && (
        <div
          onClick={onClick}
          className="flex items-center cursor-pointer p-8 border-[1px] border-[#e6e6e6] rounded-[8px] "
        >
          {icon}
          <p className="text-[18px] text-mainTextColor leading-[22px] font-medium pl-4">
            {smallText}
          </p>
        </div>
      )}
    </div>
  );
};

export default PageHeader;
