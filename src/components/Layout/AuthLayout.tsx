import { ReactNode } from 'react';
import Logo from '@assets/svg/Logo.svg?react';

import { Link, To } from 'react-router-dom';
import { Checkbox } from '@mui/material';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: ReactNode;
  bigText: string;
  smallText?: string;
  smallParagraph?: string;

  linkTo?: To;
  linkText?: string;
  checkboxText?: string;
  link?: string;
  checkbox?: boolean;
  className?: string;
};

const AuthLayout = ({
  children,

  bigText,
  smallText,
  linkTo,
  linkText,
  checkboxText,
  checkbox,
  className,
  smallParagraph,
}: Props) => {
  return (
    <section className="  w-full py-8  px-2 lg:px-14 flex flex-col ">
      <div>
        <Logo />
        <h3 className="pt-14 font-bold text-[24px] leading-7 text-[#1A1A1A]">
          {bigText}
        </h3>
        {smallParagraph && (
          <p className="text-[14px] font-normal leading-4 text-[#666666] pt-[15px] pb-8">
            {smallParagraph}
          </p>
        )}
      </div>
      {children}
      {checkbox && checkboxText && (
        <div className="flex pt-2">
          <Checkbox />
          <p className="text-[12px]  font-medium leading-4 text-[#666666] pt-2 lg:w-[472px]">
            {checkboxText}
          </p>
        </div>
      )}

      {smallText && linkTo && linkText && (
        <div className={twMerge('flex pt-6 ', className)}>
          <p className="text-[14px] font-normal leading-4 text-[#666666] pt-[5px]">
            {smallText}
          </p>

          <Link
            to={linkTo}
            className="pl-2  pt-[5px] text-[12px] font-semibold"
          >
            {linkText}
          </Link>
        </div>
      )}
    </section>
  );
};

export default AuthLayout;
