import { Controller, FieldValues } from 'react-hook-form';
import { IControlledRadio } from './interface';
import Radio from '.';

const ControlledRadio = <TFieldValue extends FieldValues>(
  props: IControlledRadio<TFieldValue>,
) => {
  const { control, name: cname, ...rest } = props;
  return (
    <Controller
      control={control}
      name={cname}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render={({ field: { ref: _ref, ...fields }, fieldState }) => (
        <Radio
          {...fields}
          {...rest}
          onChange={value => {
            fields.onChange(value);
            props?.onChange?.(value);
          }}
          error={(fieldState.error?.message || '').length > 0}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default ControlledRadio;
