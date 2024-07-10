import { isEqual } from 'lodash';
import { useEffect, useState } from 'react';
import { IRadioOption, IRadioProps } from './interface';
import { twMerge } from 'tailwind-merge';
import { Radio } from '@mui/material';
import FieldHelperText from '../FieldHelperText';

const RadioBase = ({
  name,
  className,
  options,
  value,
  onChange,
  optionClassName,
  optionLabelClassName,
  error,
  helperText,
}: IRadioProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(value ?? '');

  useEffect(() => {
    if (value && !isEqual(value, selectedValue)) {
      setSelectedValue(value ?? []);
    }
  }, [value]);

  const onCheckChange = (option: IRadioOption) => {
    const newSelectedValue = option.value;
    setSelectedValue(newSelectedValue);
    if (onChange) {
      onChange(newSelectedValue);
    }
  };
  return (
    <>
      <div className={`${className}`}>
        {options.map((option: IRadioOption) => {
          return (
            <div
              key={option.label}
              className={twMerge(
                'flex justify-between w-full items-center',
                optionClassName,
              )}
            >
              <label
                className={twMerge(
                  'text-[12px] text-[#333] font-normal',
                  optionLabelClassName,
                )}
              >
                {option?.label}
              </label>

              <Radio
                checked={selectedValue === option.value}
                onChange={() => {
                  onCheckChange(option);
                }}
                value={option?.value}
                name={name}
                color="success"
              />
            </div>
          );
        })}
      </div>
      <FieldHelperText error={error} helperText={helperText} />
    </>
  );
};

export default RadioBase;
