import InputPhoneNumber from '.';
import { Controller, FieldValues } from 'react-hook-form';
import { IControlledPhoneNumberInput } from './interface';

const ControlledPhoneNumberInput = <TFieldValue extends FieldValues>(
  props: IControlledPhoneNumberInput<TFieldValue>,
) => {
  const { name: cname, control, ...rest } = props;
  return (
    <Controller
      control={control}
      name={cname}
      render={({ field: { onChange, ...fields }, fieldState }) => (
        <InputPhoneNumber
          {...rest}
          {...fields}
          onChange={value => onChange(value)}
          //   onChange={value => {
          //    const e = {
          //       name: name,
          //       value: value,
          //     };
          //     onChange(e);
          //   }}
          //   onChange={onChange}
          error={(fieldState.error?.message || '').length > 0}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default ControlledPhoneNumberInput;
