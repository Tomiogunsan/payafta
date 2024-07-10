import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/semantic-ui.css';
import FieldHelperText from '../FieldHelperText';
import { IInputPhoneNumberProps } from './interface';
import Asteric from '@assets/icons/Label.svg?react';
import 'react-phone-number-input/style.css';

const InputPhoneNumber = ({
  label,
  onChange,
  asteric,
  error,
  helperText,
}: IInputPhoneNumberProps) => {
  return (
    <div className="w-full max-w-full overflow-hidden flex flex-col ">
      {label && asteric ? (
        <div className="flex items-center">
          <label>{label}</label>
          <Asteric className="ml-[4px]" />
        </div>
      ) : (
        <label className="pb-[3px] text-[#333333]">{label}</label>
      )}
      <div className="relative">
        <PhoneInput
          country={'ng'}
          onChange={(phone: string) => onChange(`+${phone}`)}
          containerStyle={{
            width: '100%',
          }}
          inputStyle={{
            width: '100%',
            borderRadius: '8px',
            paddingTop: '26px',
            paddingBottom: '26px',
          }}
        />
      </div>

      <FieldHelperText error={error} helperText={helperText} />
    </div>
  );
};

export default InputPhoneNumber;
