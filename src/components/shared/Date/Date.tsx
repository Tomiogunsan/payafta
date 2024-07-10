import { FieldValues } from 'react-hook-form';
import { IDate } from '../Input/interface';
import ControlledInput from '../Input/ControlledInput';
import Asteric from '@assets/icons/Label.svg?react';

const Date = <TFieldValue extends FieldValues>(props: IDate<TFieldValue>) => {
  const { name, className, label, control, asteric } = props;
  return (
    <div>
      {label && asteric ? (
        <div className="flex items-center">
          <label>{label}</label>
          <Asteric className="ml-[4px]" />
        </div>
      ) : (
        <label className="pb-[3px] text-[#333333]">{label}</label>
      )}
      <div className=" rounded-md">
        <ControlledInput
          control={control}
          name={name}
          className={className}
          type="date"
        />
      </div>
    </div>
  );
};

export default Date;
