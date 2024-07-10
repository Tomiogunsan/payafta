import { FieldValues } from 'react-hook-form';
import { IBaseControlledField } from '../Input/interface';
import { IFieldHelperTextProps } from '../FieldHelperText/interface';

export type IInputPhoneNumberProps = IFieldHelperTextProps & {
  label?: string;
  asteric?: boolean;
  value: string;
  onChange: (data: string) => void;
};

export type IControlledPhoneNumberInput<TFieldValues extends FieldValues> =
  IBaseControlledField<TFieldValues> &
    Omit<IInputPhoneNumberProps, 'value' | 'name' | 'onChange'>;
