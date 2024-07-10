import { InputAdornment, OutlinedInput } from '@mui/material';
import { IInputProps } from './interface';
import { twMerge } from 'tailwind-merge';
import FieldHelperText from '../FieldHelperText';
import Asteric from '@assets/icons/Label.svg?react';

const Input = (props: IInputProps) => {
  const {
    label,

    helperText,
    startAdornmentProps,
    endAdornmentProps,
    asteric,
    className,
    startAdornment,
    endAdornment,
    maxlength,
    // inputRef,
    ...rest
  } = props;
  return (
    <div className="w-full max-w-full overflow-hidden flex flex-col py-2">
      {/* {label && <label className="pb-[3px] text-[#333333]">{label}</label>} */}
      {label && asteric ? (
        <div className="flex items-center">
          <label>{label}</label>
          <Asteric className="ml-[4px]" />
        </div>
      ) : (
        <label className="pb-[3px] text-[#333333]">{label}</label>
      )}
      <OutlinedInput
        {...rest}
        classes={{
          input: twMerge(
            'w-full text-[12px] rounded-[8px] border border-[#E6E6E6]',
            className,
          ),
        }}
        startAdornment={
          startAdornment ? (
            <InputAdornment {...startAdornmentProps} position="start">
              {startAdornment}
            </InputAdornment>
          ) : null
        }
        endAdornment={
          endAdornment ? (
            <InputAdornment {...endAdornmentProps} position="end">
              {endAdornment}
            </InputAdornment>
          ) : null
        }
        inputProps={{ maxlength: maxlength }}
        // inputRef={input => {
        //   if (ref) {
        //     ref(input);
        //   }
        // }}
      />
      <FieldHelperText error={props.error} helperText={helperText} />
    </div>
  );
};

export default Input;
