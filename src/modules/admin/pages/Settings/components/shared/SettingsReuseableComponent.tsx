import Button from '@components/shared/Button';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ISettingsProp = {
  title: string;
  children: ReactNode;
  className?: string;
  buttonText?: string;
  button: boolean;
};

function SettingsReuseableComponent({
  title,
  children,
  className,
  buttonText,
  button,
}: ISettingsProp) {
  return (
    <div className="border-b-[1px] last:border-b-0">
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-2 pt-10">
        <h1 className="text-[1A1A1A] text-[16px] leading-5 font-[500]">
          {title}
        </h1>
        <div className={twMerge(className, 'col-span-2 rounded-[8px]')}>
          {children}
        </div>
      </div>
      {button && (
        <div className=" w-full flex justify-center lg:justify-end mt-6 pb-8">
          <Button className="bg-primary disabled:bg-[#B3B3B3] rounded-[40px] py-[10px] px-16">
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
}

export default SettingsReuseableComponent;
