import { twMerge } from 'tailwind-merge';
import RadioBase from './RadioBase';
import { IRadioProps } from './interface';
import Asteric from '@assets/icons/Label.svg?react';

const Radio = (props: IRadioProps) => {
  const {
    label,
    labelClassName,
    className,
    radioBaseClassName,
    optionClassName,
    optionLabelClassName,
    value: propValue,
    asteric,
    ...checkboxProps
  } = props;
  const value = propValue;
  return (
    <div className={className}>
      {label && asteric ? (
        <div className="flex items-center">
          <label>{label}</label>
          <Asteric className="ml-[4px]" />
        </div>
      ) : (
        <label className={labelClassName}>{label}</label>
      )}
      <RadioBase
        {...checkboxProps}
        value={value}
        className={twMerge('w-full flex flex-wrap -mt-2', radioBaseClassName)}
        optionClassName={twMerge(
          'flex w-max flex-row-reverse mr-8 mt-2 last:mr-0',
          optionClassName,
        )}
        optionLabelClassName={twMerge('ml-2', optionLabelClassName)}
      />
    </div>
  );
};

export default Radio;
