import Date from '@components/shared/Date/Date';
import ControlledInput from '@components/shared/Input/ControlledInput';
import AddMore from '@assets/icons/addMore.svg?react';

import { useForm } from 'react-hook-form';

const MileStonePayment = () => {
  const { control } = useForm();
  return (
    <div className="pt-4">
      <h3>How do you you want to pay your milestone</h3>
      <ControlledInput
        name="milestoneOne"
        label="Milestone 1"
        asteric
        placeholder="Description"
        control={control}
      />
      <div className="grid lg:grid-cols-2 gap-2">
        <Date name="deliver_date" control={control} />
        <ControlledInput name="amount" placeholder="₦0.00" control={control} />
      </div>
      <div className="flex justify-between">
        <p>DELETE</p>
        <AddMore />
      </div>
    </div>
  );
};

export default MileStonePayment;
