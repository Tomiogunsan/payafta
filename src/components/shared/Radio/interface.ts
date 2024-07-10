import { FieldValues } from 'react-hook-form';
import { IFieldHelperTextProps } from '../FieldHelperText/interface';
import { IBaseControlledField } from '../Input/interface';

export type IRadioOption = {
  label: string;
  value: string;
};

export type IRadioBaseProps = {
  name?: string;
  className?: string;
  optionClassName?: string;
  optionLabelClassName?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  value?: string;
  options: IRadioOption[];
};

export type IRadioProps = IRadioBaseProps &
  IFieldHelperTextProps & {
    label?: string;
    labelClassName?: string;
    radioBaseClassName?: string;
    asteric?: boolean;
  };

export type IControlledRadio<TFieldValues extends FieldValues> =
  IBaseControlledField<TFieldValues> & Omit<IRadioProps, 'value' | 'name'>;
